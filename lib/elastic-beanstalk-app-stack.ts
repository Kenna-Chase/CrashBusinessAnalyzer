import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3assets from 'aws-cdk-lib/aws-s3-assets';
import * as elasticbeanstalk from 'aws-cdk-lib/aws-elasticbeanstalk';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface EBEnvProps extends cdk.StackProps {
    // Autoscaling group configuration
    minSize?: string;
    maxSize?: string;
    instanceTypes?: string;
    envName?: string;
}

export class ElasticBeanstalkApplicationStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: EBEnvProps) {
        super(scope, id, props);

        // Construct an S3 asset Zip from directory up.
        const webAppZipArchive = new s3assets.Asset(this, 'WebAppZip', {
            path: `${__dirname}/../src/application`,
        });

        // Create a ElasticBeanStalk app.
        const appName = 'CrashBusinessWebApp';
        const app = new elasticbeanstalk.CfnApplication(this, 'Application', {
            applicationName: appName,
        });

        // Create an app version from the S3 asset.
        const appVersionProps = new elasticbeanstalk.CfnApplicationVersion(this, 'AppVersion', {
            applicationName: appName,
            sourceBundle: {
                s3Bucket: webAppZipArchive.s3BucketName,
                s3Key: webAppZipArchive.s3ObjectKey,
            },
        });

        // Ensure Elastic Beanstalk app exists before creating an app version
        appVersionProps.addDependency(app);

        // Create role and instance profile
        const myRole = new iam.Role(this, `${appName}-aws-elasticbeanstalk-ec2-role`, {
            assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
        });

        const managedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName('AWSElasticBeanstalkWebTier')
        myRole.addManagedPolicy(managedPolicy);

        const myProfileName = `${appName}-InstanceProfile`

        const instanceProfile = new iam.CfnInstanceProfile(this, myProfileName, {
            instanceProfileName: myProfileName,
            roles: [
                myRole.roleName
            ]
        });

        // Example of some options which can be configured
        const optionSettingProperties: elasticbeanstalk.CfnEnvironment.OptionSettingProperty[] = [
            {
                namespace: 'aws:autoscaling:launchconfiguration',
                optionName: 'IamInstanceProfile',
                value: myProfileName,
            },
            {
                namespace: 'aws:autoscaling:asg',
                optionName: 'MinSize',
                value: props?.maxSize ?? '1',
            },
            {
                namespace: 'aws:autoscaling:asg',
                optionName: 'MaxSize',
                value: props?.maxSize ?? '1',
            },
            {
                namespace: 'aws:ec2:instances',
                optionName: 'InstanceTypes',
                value: props?.instanceTypes ?? 't2.medium',
            },
        ];


        // Create an Elastic Beanstalk environment to run the application
        const elbEnv = new elasticbeanstalk.CfnEnvironment(this, 'Environment', {
            environmentName: props?.envName ?? "MyWebAppEnvironment",
            applicationName: app.applicationName || appName,
            solutionStackName: '64bit Amazon Linux 2 v5.9.6 running Node.js 18',
            optionSettings: optionSettingProperties,
            versionLabel: appVersionProps.ref,
        });

    }
}