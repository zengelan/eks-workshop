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
![ekskubectl](/images/ekskubectl.jpg)
and the [AWS EKS Console UI](https://us-east-2.console.aws.amazon.com/eks/home?region=us-east-2).
![eksui1](/images/eksui1.jpg)

##Command line
Execute the following commands to learn more about the architecture and settings of your cluster using the command line tool and also explore the relevant UI parts in the [AWS EKS Console UI](https://us-east-2.console.aws.amazon.com/eks/home?region=us-east-2)

Information about the cluster
```bash
kubectl cluster-info
```

All details about the nodes
```bash
kubectl cluster-info
```

Context information
```bash
kubectl config current-context
```

Information about API resources
```bash
kubectl kubectl api-resources
```

##AWS EKS Console 
Navigate to the [AWS EKS Console UI](https://us-east-2.console.aws.amazon.com/eks/home?region=us-east-2) and open the details of your cluster, if you don't see the cluster with your codeword, make sure you selected the right region ``us-east-2`` 
