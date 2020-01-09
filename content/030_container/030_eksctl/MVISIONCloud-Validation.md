---
title: "MVISION Cloud Validation"
date: 2018-08-07T13:36:57-07:00
weight: 50
tags:
  - MFESummit2020
  - sunny
---

## Import New Configuration Audit Checks  

Login to your MVISION Cloud dashboard. Go to Policy Templates. Select the option of "Container Security" under Business Requirements, and select the option of "Security Configuration" from under Policy Type.


![NewConfigAudit](/images/mfe/Capture_PolicyTemplates.JPG?classes=border,shadow)


## Initiate a new Configuration Audit Scan in AWS

Trigger a new configuration audit scan by going to Policy -> On-Demand Scan -> Security Configuration Audit for AWS.

Click on "Run Scan Now". 


![TriggerConfigAuditScan](/images/mfe/Capture_TriggerConfigAuditScan.JPG?classes=border,shadow)



## Review Misconfiguration Incidents on your Default EKS Cluster installation 

![MVCValidation](/images/mfe/Capture_Violations.JPG?classes=border,shadow)


So, some **key** thoughts to reflect on based on the security review that we just performed:

1. The default control-plane components (i.e., Kubernetes cluster comprising of master and worker nodes, etcd, coreDNS and kube-proxy DaemonSets, and a host of other foundational elements) that you installed in this lab section have security misconfigurations that have potentially introduced new attack surface to the cloud-native application architecture.

2. The components in this section of the lab can now be thought of as "new abstract infrastructure", which will be utilized to install and manage lifecycle of several application pods on the respective nodes. More on that in the next section, but do we know enough about our EKS cluster misconfigurations until this point to make a decision whether to let the build activities continue or not.

3. This is also where it's important to highlight MVISION Cloud's ability to perform security configuration audit scans in a CloudFormation/Terraform template **before** the underlying infrastructure gets instantiated by the development teams. Wouldn't it be effective to add these checks related to "container/cluster security" to other traditional security misconfiguration checks that are performed on other cloud-native resources like EC2 VMs, S3 buckets, etc.? Do you see where the two strategies intersect?

In short, the ability to scan misconfigurations on AWS managed Kubernetes environment helps enable good **guardrails** with respect to this new cloud-native application that we will shortly be deploying in the next section.
