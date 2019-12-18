---
title: "Launch EKS"
date: 2018-08-07T13:34:24-07:00
weight: 20
---


#### Challenge:
**How do I check the IAM role on the workspace?**

{{%expand "Expand here to see the solution" %}}
Run `aws sts get-caller-identity` and validate that your _Arn_ contains your codeword like `halogen` and an Instance Id.

```output
{
    "Account": "123456789012",
    "UserId": "AROA1SAMPLEAWSIAMROLE:i-01234567890abcdef",
    "Arn": "arn:aws:sts::123456789012:assumed-role/eksworkshop-admin/i-01234567890abcdef"
}
```

If you do not see the correct role, please go back and [validate the IAM role](/020_prerequisites/workspaceiam/#validate-the-iam-role) for troubleshooting.

If you do see the correct role, proceed to next step to create an EKS cluster.
{{% /expand %}}

### Create an EKS cluster

To create your new EKS cluster we will be using some defaults for this lab to ensure the resources are tagged with your codeword and we have some best practices settings defined like enabling logging of the EKS cluster and nodes 

{{% notice info %}}
We will be using a pre-defined configuration file that was downloaded when you cloned the repos. If you can't find the configuration please review section [Clone the service repos](/020_prerequisites/clone)
{{% /notice %}}

Copy & Paste the following command to your Cloud9 terminal and replace <CODEWORD> with your personally assigned codeword, then execute
```
eksctl create cluster --name=eksctl-<CODEWORD> --tags codeword=<CODEWORD> --nodes=3 --node-type=t3a.large --managed --alb-ingress-access --region=${AWS_REGION} --auto-kubeconfig
```

{{% notice info %}}
Launching EKS and all the dependencies will take approximately 15 minutes
{{% /notice %}}

To enable CloudWatch logging manually after the EKS cluster was created use the following command.
 ```
eksctl --cluster <CLUSTER-NAME> utils update-cluster-logging --enable-types all --approve
```