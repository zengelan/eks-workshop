---
title: "Explore your EKS Cluster"
date: 2018-08-07T13:36:57-07:00
weight: 40
tags:
  - MFESummit2020
  - sunny
---

## Explore details of your cluster using kubectl and the AWS Console

You can explore and edit the properties of your EKS cluster using the command line tool `kubectl` 
![ekskubectl](/images/mfe/ekskubectl.jpg?classes=border,shadow)
and the [AWS EKS Console UI](https://us-east-1.console.aws.amazon.com/eks/home?region=us-east-2).

![eksui1](/images/mfe/Capture_EKSCluster1.JPG?classes=border,shadow)

![eksui2](/images/mfe/Capture_EKSCluster2.JPG?classes=border,shadow)



## Command line
Execute the following commands to learn more about the architecture and settings of your cluster using the command line tool and also explore the relevant UI parts in the [AWS EKS Console UI](https://us-east-1.console.aws.amazon.com/eks/home?region=us-east-2)

Information about the cluster
```
kubectl cluster-info
```

All details about the nodes
```
kubectl cluster-info dump|more
```

Context information
```
kubectl config current-context
```

Information about API resources
```
kubectl api-resources

```
To see all pods available across all namespaces:

```
kubectl get pods --all-namespaces
```

To review the POD definition file in YAML for further exploration:
```
kubectl get pods <<name_of_your_pod>> -o yaml > pod-definition.yaml
```


## AWS EKS Console 
Navigate to the [AWS EKS Console UI](https://us-east-1.console.aws.amazon.com/eks/home?region=us-east-1) and open the details of your cluster, if you don't see the cluster with your codeword, make sure you selected the right region ``us-east-1``. 

Review the different security groups that were created by default as part of the EKS cluster creation efforts. Piece the information together to see what's happening under the covers. 
