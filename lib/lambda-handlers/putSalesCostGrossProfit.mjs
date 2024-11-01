// Import the DynamoDB client from AWS SDK v3
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// Create the DynamoDB client
const client = new DynamoDBClient({ region: 'us-east-1' });
// Create the DynamoDB document client
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event, context) => {
    try {
        // Captures the requestId from the context message
        const requestId = context.awsRequestId;

        await writeMessageToDynamo(requestId);

        return {
            statusCode: 201,
            body: '',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred while creating the message' }),
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
    }
};

// Writes message to DynamoDB table Message
async function writeMessageToDynamo(requestId) {
    const params = {
        TableName:  process.env.DYNAMODB_TABLE,
        Item: {
            'id': requestId,
            'message': 'Hello from lambda'
        }
    };
    const command = new PutCommand(params);
    return ddbDocClient.send(command);
}