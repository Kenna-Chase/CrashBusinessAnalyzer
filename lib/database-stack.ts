import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Stack, StackProps } from 'aws-cdk-lib';
import {Construct} from "constructs";
import {ManagedPolicy, Role, ServicePrincipal} from "aws-cdk-lib/aws-iam";

/**
 * The stack that defines the database components.
 */
export class DatabaseStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // DynamoDB Database
        const salesCostGrossProfitTable = new dynamodb.Table(
            this,
            'SalesCostGrossProfitData',
            {
                partitionKey: {
                    name: 'id',
                    type: dynamodb.AttributeType.STRING
                },
                tableName: 'SalesCostGrossProfitData',
                billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
            }
            );

        // Lambda Functions
        const getSalesCostGrossProfitDataLambda = new lambda.Function(this, 'getSalesCostGPData', {
            runtime: lambda.Runtime.NODEJS_LATEST,
            functionName: 'getSalesCostGPData',
            code: lambda.Code.fromAsset('lib/lambda-handlers'),
            handler: 'getSalesCostGrossProfit.handler',
            environment: {
                DYNAMODB_TABLE: salesCostGrossProfitTable.tableName
            }
        });
        getSalesCostGrossProfitDataLambda.addToRolePolicy(
            new iam.PolicyStatement({
                actions: ['dynamodb:Scan'],
                resources: [salesCostGrossProfitTable.tableArn]
            })
        );


        const putSalesCostGrossProfitDataLambda = new lambda.Function(this, 'putSalesCostGPData', {
            runtime: lambda.Runtime.NODEJS_LATEST,
            functionName: 'putSalesCostGPData',
            code: lambda.Code.fromAsset('lib/lambda-handlers'),
            handler: 'putSalesCostGrossProfit.handler',
            environment: {
                DYNAMODB_TABLE: salesCostGrossProfitTable.tableName
            }
        });
        putSalesCostGrossProfitDataLambda.addToRolePolicy(
            new iam.PolicyStatement({
                actions: ['dynamodb:PutItem'],
                resources: [salesCostGrossProfitTable.tableArn]
            })
        );

        // API Gateway
        const getSalesCostGrossProfitDataAPI = new apigateway.LambdaRestApi(this, 'getSalesCostGPApi', {
            proxy: false,
            handler: getSalesCostGrossProfitDataLambda
        });
        const apiResourceGet = getSalesCostGrossProfitDataAPI.root.addResource('getSalesCostGrossProfit');
        const getSalesCostGrossProfitApiLambdaIntegration = new apigateway.LambdaIntegration(getSalesCostGrossProfitDataLambda);
        apiResourceGet.addMethod('GET', getSalesCostGrossProfitApiLambdaIntegration)

        const putSalesCostGrossProfitDataAPI = new apigateway.LambdaRestApi(this, 'salesCostGPApi', {
            proxy: false,
            handler: putSalesCostGrossProfitDataLambda
        });
        const apiResourcePut = putSalesCostGrossProfitDataAPI.root.addResource('salesCostGrossProfit');
        const putSalesCostGrossProfitApiLambdaIntegration = new apigateway.LambdaIntegration(putSalesCostGrossProfitDataLambda);

        apiResourcePut.addMethod('PUT', putSalesCostGrossProfitApiLambdaIntegration);
    }
}
