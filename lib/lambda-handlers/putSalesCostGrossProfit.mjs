// Import the DynamoDB client from AWS SDK v3
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";

// Create the DynamoDB client
const client = new DynamoDBClient({ region: 'us-east-1' });
// Create the DynamoDB document client
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event, context) => {
    try {
        return await writeSalesCostGPMessageToDynamo(event.body);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: error }),
        };
    }
};

// Writes message to DynamoDB table Message
async function writeSalesCostGPMessageToDynamo(body) {
    const uuid = randomUUID();

    // If no body, return an error
    if (!body) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Missing body' }),
        };
    }

    await ddbDocClient.send(
        new PutCommand({
            TableName: process.env.DYNAMODB_TABLE,
            Item: {
                id: `${uuid}`,
                ...body,
            },
        })
    );

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Entry created" }),
    };
}