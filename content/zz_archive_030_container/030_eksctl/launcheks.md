---
title: "Launch EKS"
date: 2018-08-07T13:34:24-07:00
weight: 20
tags:
  - MFESummit2020
  
---


#### Challenge:
**How do I check the IAM role on the workspace?**

{{%expand "Expand here to see the solution" %}}
Run `aws sts get-caller-identity` and validate that your _Arn_ contains your codeword like `halogen`.

```javascript
{
    "Account": "933.....0693", 
    "UserId": "AIDA......HELGDYZ", 
    "Arn": "arn:aws:iam::933....93:user/sesummit20/labuser.halogen@sesummit20.net"
}
```

If you do not see the correct role, please go back and [validate the IAM role](/020_prerequisites/workspaceiam/#validate-the-iam-role) for troubleshooting.

If you do see the correct role, proceed to next step to create an EKS cluster.
{{% /expand %}}

### Create an EKS cluster

To create your new EKS cluster we will be using some defaults for this lab to ensure the resources are tagged with your codeword and we have some best practices settings defined like enabling logging of the EKS cluster and nodes 

First we are going to store the desired EKS region in a variable, so we can use it more easily later. Please execute the following to set the environment variable named `EKS_REGION` to `us-east-1` 
```
echo export EKS_REGION=us-east-1 | tee -a ~/.bash_profile
. ~/.bash_profile 
```



Make sure you saved the appropriate environment variables as described in the section [Prepare the environment](/020_prerequisites/environment).
To check this execute the command:
```
echo "My codeword is: ${CODEWORD} and my EKS Region is: ${EKS_REGION}"
``` 

The output should print both your Codeword as well as the EKS Region like this:
![checkvars](/images/mfe/checkvars.png?classes=border,shadow)

{{% notice warning %}}
If the output does not print your codeword or not the region, then please go back to [Prepare the environment](/020_prerequisites/environment) and setup the variables correctly.
{{% /notice %}}


#### Now we are ready to create your own Kubernetes cluster with all the required resources:

{{% notice warning %}}
PLEASE HOLD HERE AND WAIT UNTIL THE INSTRUCTOR GIVES YOU THE OK TO COMMENCE. WE NEED TO AVOID CONCURRENCY ISSUES
{{% /notice %}}

Copy & Paste the following command to your Cloud9 terminal, then execute
```
eksctl create cluster --name=${CODEWORD}-eksctl --region=${EKS_REGION} --tags codeword=${CODEWORD} --nodes=3 --node-type=t3a.small --managed --vpc-nat-mode Disable --alb-ingress-access
```

{{%expand "If you have not setup the variables, then expand this section" %}}

Copy & Paste the following command to your Cloud9 terminal and replace `<CODEWORD>` with your personally assigned codeword, then execute

```
eksctl create cluster --name=<CODEWORD>-eksctl --tags codeword=<CODEWORD> --nodes=3 --node-type=t3a.small --managed --vpc-nat-mode Disable --alb-ingress-access
```

{{% /expand %}}

{{% notice warning %}}
Launching EKS and all the dependencies will take approximately 15 minutes
{{% /notice %}}

While the task is running you can see the progress in the CloudFormation Console at https://console.aws.amazon.com/cloudformation/home?region=us-east-1
You can also go to the other relevant services in the console to see how e.g. the EC2 machines are created, the VPC settings and security groups are configured automatically.

{{% notice info %}}
While this process is running, use the time to learn a bit about one of the hippest file formats in the DevOps world and work through the "YAML Primer Section"  ["YAML Primer Section"]({{< ref "whileyouwait.md" >}}) of this lab. The come back here, once cluster creation is done. Did you know that `YAML Ain't Markup Language` ?
{{% /notice %}}



After the command is done, execute the following command to view the cluster information:
```
 eksctl get cluster
```


{{%expand "If you have not used the specific eksctl version for this lab, expand this section to learn how to enable logging manually" %}}

To enable CloudWatch logging manually after the EKS cluster was created use the following command.
 ```
eksctl --cluster <CLUSTER-NAME> utils update-cluster-logging --enable-types all --approve
```
{{% /expand %}}

