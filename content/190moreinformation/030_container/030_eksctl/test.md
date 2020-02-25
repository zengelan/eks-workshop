---
title: "Test the Cluster"
date: 2018-08-07T13:36:57-07:00
weight: 30
tags:
  - AWSWorkshop2020
  
---
#### Test the cluster:
Confirm your nodes:

```bash
kubectl get nodes
```

if we see our 3 nodes, we know we have authenticated correctly

If you have issues here and the output tells you that you are unauthenticated, then execute the following command to update the kubeconfig file with the correct credentials

```
aws eks --region ${EKS_REGION} update-kubeconfig --name ${CODEWORD}-eksctl
```

#### Export the Worker Role Name for use throughout the workshop:

```
STACK_NAME=$(eksctl get nodegroup --cluster ${CODEWORD}-eksctl -o json | jq -r '.[].StackName')
ROLE_NAME=$(aws cloudformation describe-stack-resources --stack-name $STACK_NAME | jq -r '.StackResources[] | select(.ResourceType=="AWS::IAM::Role") | .PhysicalResourceId')
echo "export ROLE_NAME=${ROLE_NAME}" | tee -a ~/.bash_profile
```

#### Congratulations!

You now have a fully working Amazon EKS Cluster that is ready to use!
