#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PipelineCdkStack } from '../lib/pipeline-cdk-stack';

const app = new cdk.App();
new PipelineCdkStack(app, 'PipelineCdkStack', {
  env: { account: '557364989003', region: 'us-east-1' },
});

app.synth();