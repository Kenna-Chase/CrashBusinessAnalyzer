import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Stack, StackProps } from 'aws-cdk-lib';
import {Construct} from "constructs";
import {ManagedPolicy, Role, ServicePrincipal} from "aws-cdk-lib/aws-iam";

export class DatabaseStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const salesCostGrossProfitTable = new dynamodb.Table(this, 'SalesCostGrossProfitData', {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
        });

        const lambdaFunction = new lambda.Function(this, 'initalLambdaFunction', {
            code: lambda.Code.fromAsset('lib/lambda-handler'),
            runtime: lambda.Runtime.NODEJS_LATEST,
            handler: 'index.handler',
            role: this.dynamoLambdaRole()
        });

    }

    private  dynamoLambdaRole() {
        const lambdaDynamoRole = new Role(this, 'LambdaRole', {
            assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
        });
        lambdaDynamoRole.addManagedPolicy(
            ManagedPolicy.fromAwsManagedPolicyName('AmazonDynamoDBFullAccess'));
        return lambdaDynamoRole;
    }
}
