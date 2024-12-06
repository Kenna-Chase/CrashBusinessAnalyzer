import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

const client = new DynamoDBClient({ region: 'us-east-1' });
const dynamoDb = DynamoDBDocumentClient.from(client);

const healthPath = '/health';
const registerPath = '/register';
const loginPath = '/login';
const verifyPath = '/verify';

export const handler = async (event) => {
    console.log('Request Event: ', event);
    let response;
    switch(true){
        case event.httpMethod === 'GET' && event.path === healthPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === 'POST' && event.path === registerPath:
            const registerBody = JSON.parse(event.body);
            response = await register(registerBody);
            break;
        case event.httpMethod === 'POST' && event.path === loginPath:
            const loginBody = JSON.parse(event.body);
            response = await login(loginBody);
            break;
        case event.httpMethod === 'POST' && event.path === verifyPath:
            const verifyBody = JSON.parse(event.body);
            response = verifyUser(verifyBody);
            break;
        default:
            response = buildResponse(404, '404 Not Found');
    }
    return response;
}

// REGISTER LOGIC
async function register(userInfo) {
    const name = userInfo.name;
    const email = userInfo.email;
    const username = userInfo.username;
    const password = userInfo.password;
    const company = userInfo.company;

    if(!userInfo || !name || !email || !username || !password  || !company) {
        return buildResponse(401, {message: 'All fields are required'});
    }

    const dynamoUser = await getUser(username);
    if(dynamoUser && dynamoUser.username) {
        return buildResponse(401, {
            message: 'Username already exists. Please choose different username.'
        });
    }

    const encryptedPassword = await bcrypt.hash(password.trim(), 10);
    const user = {
        name: name,
        email: email,
        username: username.toLowerCase().trim(),
        password: encryptedPassword,
        company: company,
    }
    const savedUserResponse = await saveUser(user);
    if(!savedUserResponse) {
        console.log("Server Error....");
        return buildResponse(503, {message: 'Server Error. Please try again later.'});
    }

    return buildResponse(200, {username: username });
}

// DynamoDB Get And Save Logic
async function getUser(username) {
    const command = new GetCommand({
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            username: username
        }
    });
    try {
        const response = await dynamoDb.send(command);
        return response.Item;
    } catch (error) {
        console.log('There was an error getting the user: ', error);
    }
}

async function saveUser(user) {
    try {
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: user
        }
        await dynamoDb.send(new PutCommand(params));
    } catch (error){
        console.log('There was an error saving the user: ', error);
    }
   return true;
}

// LOGIN LOGIC
async function login(user) {
    const username = user.username;
    const password = user.password;
    if (!user || !username || !password) {
        return buildResponse(401, {
            message: 'Username and Password are required.'
        })
    }

    const dynamoUser = await getUser(username.toLowerCase().trim());
    if(!dynamoUser || !dynamoUser.username) {
        return buildResponse(403, {
            message: 'User does not exist.'
        })
    }

    if (!bcrypt.compareSync(password, dynamoUser.password)) {
        return buildResponse(403, {
            message: 'Password is incorrect.'
        })
    }

    const userInfo = {
        username: dynamoUser.username,
        name: dynamoUser.name,
        company: dynamoUser.company,
    }
    const token = generateToken(userInfo)

    const response = {
        user: userInfo,
        token: token
    }
    return buildResponse(200, response);
}

// VERIFY LOGIC
function verifyUser(requestBody) {
    if(!requestBody.user || !requestBody.user.username || !requestBody.token) {
        return buildResponse(401, {
            verified: false,
            message: 'incorrect request body',
        });
    }

    const user = requestBody.user;
    const token = requestBody.token;
    const verification = verifyToken(user.username, token);
    if (!verification.verified) {
        return buildResponse(401, verification);
    }
    return buildResponse(200, {
        verified: true,
        message: 'success',
        user: user,
        token: token
    });
}
function buildResponse(statusCode, body){
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
}
// Authorization Helper Functions
function generateToken(userInfo){
    if(!userInfo){
        return null;
    }

    return sign(userInfo, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
}

function verifyToken(username, token){
    return verify(token, process.env.JWT_SECRET, (error, response) => {
        if (error) {
            return {
                verified: false,
                message: 'invalid token'
            }
        }
        if (response.username !== username) {
            return {
                verified: false,
                message: 'invalid user'
            }
        }
        return {
            verified: true,
            message: 'token verified'
        }
    });
}