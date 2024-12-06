# Crash Business Analyzer
### Kenna Chase


The Crash Business Analyzer is a business financial performance analysis tool aimed at providing a comprehensive solution for evaluating the financial standing of an autobody business. Businesses will be able to gain further insights into their relative financial performance with comparisons and benchmarking across peer groups.


## Setup 
## React Website
The web application was developed using React and placed in the src/application folder. This folder is extracted as a part of the CodePipeline and deployed.  

## CDK Deployment
Deploying infrastructure with the AWS CDK transforms the code into cloud resources.
### 1. **Set Up The Environment**
- **Install the AWS CDK CLI:**
  ```bash
  npm install -g aws-cdk
  ```  (for Typescript)

### 2. **Define The CDK Stacks**
- Open the `lib/<name>-stack.ts` file.
- Use CDK constructs to define resources, such as S3 buckets, Lambda functions, Databases, or VPCs.
  

### 3. **Bootstrap Your Environment**
Before deploying, bootstrap your environment to set up the necessary resources:
```bash
cdk bootstrap aws://<ACCOUNT_ID>/<REGION>
```  

### 4. **Deploy the Stack**
- **Synthesize the CloudFormation Template:**  
  Generate a CloudFormation template to verify the stack:
  ```bash
  cdk synth
  ```  
- **Deploy The Stack to AWS:**  
  Use the deploy command to create resources:
  ```bash
  cdk deploy
  ```  
  For deploying specific stacks: 
  ```bash
  cdk deploy <STACK_NAME>
  ```
### 5. **Verify and Manage**
- Check the AWS Management Console to confirm the resources were deployed.
- To update your stack, make changes to your code and redeploy using `cdk deploy`.
- Rollback or delete your stack if needed using: `cdk destroy` 

## Development
After the initial CDK was developed, the CodePipeline was setup, so when the Github Repository main branch is updated it automatically triggers the CodePipeline to update. The CodePipeline will deploy the necessary CDK changes as well as deploy the updated web application from the src/application folder. 

