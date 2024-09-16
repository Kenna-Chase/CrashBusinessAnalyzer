import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import {  Stack, StackProps } from 'aws-cdk-lib';
import { CdkEBStage } from './eb-stage';

/**
 * The stack that defines the application pipeline.
 */
export class PipelineCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'CrashBusinessAnalyzerPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('Kenna-Chase/CrashBusinessAnalyzer', 'main'),

        // Install dependencies, build and run cdk synth
        installCommands: ['npm i -g npm@latest'],
        commands: [
          'npm install', 'npm ci', 'npm run build', 'npx cdk synth'
        ],
      }),
    });

    // The application stages

    // Deploy beanstalk app
    const deployEBApp = new CdkEBStage(this, 'Alpha-DeployEB', {
      minSize : "1",
      maxSize : "2"
    });
    const deployEBAppStage = pipeline.addStage(deployEBApp);

  }
}
