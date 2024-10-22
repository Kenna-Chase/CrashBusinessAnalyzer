import { DynamoDBClient } from "aws-sdk/clients/dynamodb";
import { PutCommand, DynamoDBDocumentClient} from "aws-sdk/lib/dynamodb"

const AWS = require("aws-sdk");

const client = new DynamoDBClient({});
const dynamoDb = DynamoDBDocumentClient.from(client);

const params = {
    TableName: process.env.DYNAMODB_TABLE
};


exports.handler = async (event, context) => {
    let responseBody = "";
    let statusCode = 200;
    const headers = { 'Content-Type': 'text/plain' };

    try {
        let requestJSON = JSON.parse(event.body);
        await dynamoDb.send(
            new PutCommand({
                TableName: params.TableName,
                Item: {
                    id: requestJSON.id,
                    price: requestJSON.price,
                    name: requestJSON.name,
                },
            })
        );
        responseBody = `Put item ${requestJSON.id}`;
    } catch (err) {
        statusCode = 400;
        responseBody = err.message;
    }
    responseBody = JSON.stringify(responseBody);
    return { statusCode, responseBody, headers};
};