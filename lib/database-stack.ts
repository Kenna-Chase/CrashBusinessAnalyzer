import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Stack, StackProps } from 'aws-cdk-lib';
import {Construct} from "constructs";
import {Cors} from "aws-cdk-lib/aws-apigateway";

/**
 * The stack that defines the database components.
 */
export class DatabaseStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // DynamoDB Database
        const salesCostGrossProfitTable = new dynamodb.Table(
            this,
            'SalesCostGrossProfitDataTable',
            {
                partitionKey: {
                    name: 'id',
                    type: dynamodb.AttributeType.STRING
                },
                tableName: 'SalesCostGrossProfitDataTable',
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

        const aggregateSalesCostGrossProfitDataLambda = new lambda.Function(this, 'aggregateSalesCostGPData', {
            runtime: lambda.Runtime.NODEJS_LATEST,
            functionName: 'aggregateSalesCostGPData',
            code: lambda.Code.fromAsset('lib/lambda-handlers'),
            handler: 'aggregateSalesCostGrossProfit.handler',
            environment: {
                DYNAMODB_TABLE: salesCostGrossProfitTable.tableName
            }
        });
        aggregateSalesCostGrossProfitDataLambda.addToRolePolicy(
            new iam.PolicyStatement({
                actions: ['dynamodb:*'],
                resources: [salesCostGrossProfitTable.tableArn]
            })
        );


        // API Gateway
        const getSalesCostGrossProfitDataAPI = new apigateway.LambdaRestApi(this, 'getSalesCostGPApi', {
            proxy: false,
            handler: getSalesCostGrossProfitDataLambda,
            defaultCorsPreflightOptions: {
                allowOrigins: Cors.ALL_ORIGINS,
                allowMethods: Cors.ALL_METHODS,
            }
        });
        const apiResourceGet = getSalesCostGrossProfitDataAPI.root.addResource('getSalesCostGrossProfit');
        const getSalesCostGrossProfitApiLambdaIntegration = new apigateway.LambdaIntegration(getSalesCostGrossProfitDataLambda);
        apiResourceGet.addMethod('GET', getSalesCostGrossProfitApiLambdaIntegration)

        const putSalesCostGrossProfitDataAPI = new apigateway.LambdaRestApi(this, 'putSalesCostGPApi', {
            proxy: false,
            handler: putSalesCostGrossProfitDataLambda,
            defaultCorsPreflightOptions: {
                allowOrigins: Cors.ALL_ORIGINS,
                allowMethods: Cors.ALL_METHODS,
            }
        });
        const apiResourcePut = putSalesCostGrossProfitDataAPI.root.addResource('putSalesCostGrossProfit');
        const putSalesCostGrossProfitApiLambdaIntegration = new apigateway.LambdaIntegration(putSalesCostGrossProfitDataLambda);
        apiResourcePut.addMethod('PUT', putSalesCostGrossProfitApiLambdaIntegration);

        const aggregateSalesCostGrossProfitDataAPI = new apigateway.LambdaRestApi(this, 'aggregateSalesCostGPApi', {
            proxy: false,
            handler: putSalesCostGrossProfitDataLambda,
            defaultCorsPreflightOptions: {
                allowOrigins: Cors.ALL_ORIGINS,
                allowMethods: Cors.ALL_METHODS,
            }
        });
        const apiResourceAggregate = aggregateSalesCostGrossProfitDataAPI.root.addResource('aggregateSalesCostGrossProfit');
        const aggregateSalesCostGrossProfitApiLambdaIntegration = new apigateway.LambdaIntegration(aggregateSalesCostGrossProfitDataLambda);
        apiResourceAggregate.addMethod('GET', aggregateSalesCostGrossProfitApiLambdaIntegration);

    }
}
