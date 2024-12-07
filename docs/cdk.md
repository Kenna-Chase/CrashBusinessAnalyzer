# CDK Infrastructure As Code



The AWS Cloud Development Kit (CDK) allows for the infrastructure to be defined as code, making it easier to manage, share, and scale cloud resources.

### Why Choose CDK with CodePipeline?

- **Infrastructure as Code:** Define, version, and share infrastructure with familiar programming languages.
- **Easy Rollback:** Quickly revert to previous deployments if needed, allowing for stability.
- **Repeatable Deployments:** Automate and replicate consistent deployments across environments with ease.


### CDK in this Application

![CDK Diagram](images/CDKDiagram.png)

Each major component of this application was created using a CDK Stack. The Stack then contained the various AWS resource constructs and their associated connections. This allowed for the different services of the application to be developed and updated independently. It also allowed for easy rollback and consistent, repeatable deployments. 
