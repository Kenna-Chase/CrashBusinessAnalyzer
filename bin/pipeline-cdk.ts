#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PipelineCdkStack } from '../lib/pipeline-cdk-stack';
import {DatabaseStack} from "../lib/database-stack";

const app = new cdk.App();

new PipelineCdkStack(app, 'PipelineCdkStack', {
  env: { account: '557364989003', region: 'us-east-1' },
});

new DatabaseStack(app, 'DatabaseStack', {
  env: { account: '557364989003', region: 'us-east-1' },
});

app.synth();