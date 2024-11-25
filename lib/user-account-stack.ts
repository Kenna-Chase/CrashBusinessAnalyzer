import {Duration, Stack, StackProps} from "aws-cdk-lib";
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import {Construct} from "constructs";
import {Cors} from "aws-cdk-lib/aws-apigateway";

/**
* The stack that defines the components for the account creation and login flow.
*/
export class UserAccountStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // User Account Data Table
        const userAccountTable = new dynamodb.Table(
            this,
            'UserAccountTable',
            {
                partitionKey: {
                    name: 'username',
                    type: dynamodb.AttributeType.STRING
                },
                tableName: 'UserAccountTable',
                billingMode: dynamodb.BillingMode.PAY_PER_REQUEST
            }
        );

        // LAMBDA Function
        const userAccountLambda = new lambda.Function(this, 'userAccountLambda', {
            runtime: lambda.Runtime.NODEJS_LATEST,
            functionName: 'userAccountLambda',
            code: lambda.Code.fromAsset('lib/lambda-handlers/user-accounts'),
            handler: 'userAccountLogic.handler',
            timeout: Duration.seconds(5),
            environment: {
                DYNAMODB_TABLE: userAccountTable.tableName,
                JWT_SECRET: "secretSecret",
            }
        });
        //Add IAM Roles for Lambda
        userAccountLambda.addToRolePolicy(
            new iam.PolicyStatement({
                actions: ['dynamodb:*'],
                resources: [userAccountTable.tableArn]
            })
        );
        //Add cloudwatch?

        // API Gateway Connections
        const accountGateway = new apigateway.LambdaRestApi(this, 'accountGateway', {
            proxy: false,
            handler: userAccountLambda,
            defaultCorsPreflightOptions: {
                allowOrigins: Cors.ALL_ORIGINS,
                allowMethods: Cors.ALL_METHODS,
            },
        });
        const lambdaIntegration = new apigateway.LambdaIntegration(userAccountLambda);
        // Resource: /health --  Method: /GET
        const healthResource = accountGateway.root.addResource('health');
        healthResource.addMethod('GET', lambdaIntegration);

        // Resource: /register -- Method: /POST
        const registerResource = accountGateway.root.addResource('register');
        registerResource.addMethod('POST', lambdaIntegration);

        //Resource: /login  -- Method: /POST
        const loginResource = accountGateway.root.addResource('login');
        loginResource.addMethod('POST', lambdaIntegration);

        //Resource: /verify -- Method: /POST
        const verifyResource = accountGateway.root.addResource('verify');
        verifyResource.addMethod('POST', lambdaIntegration);
    }
}