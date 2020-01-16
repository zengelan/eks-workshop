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
{{% notice info %}}
In today's lab you are not able to make any changes to the MVISION Cloud configuration as you have read-only access. We have already imported several policies that are executed against the EKS Clusters.
{{% /notice %}}




## Initiate a new Configuration Audit Scan in AWS

Trigger a new configuration audit scan by going to Policy -> On-Demand Scan -> Security Configuration Audit for AWS.

Click on "Run Scan Now". 
{{% notice info %}}
In today's lab you are not able start a scan. A scan will be started by the instructor during the lab session.
{{% /notice %}}

![TriggerConfigAuditScan](/images/mfe/Capture_TriggerConfigAuditScan.JPG?classes=border,shadow)




## Review Misconfiguration Incidents on your Default EKS Cluster installation 

Every EKS cluster deployed as part of the class is expected to yield the following 4 security misconfigurations:  

![MVCValidationEKS](/images/mfe/Capture_EKSMaster_Violations_1.JPG?classes=border,shadow)


![MVCValidation](/images/mfe/Capture_Violations.JPG?classes=border,shadow)




## Remediate Misconfigurations in your EKS cluster and re-validate risk mitigation


1. Disable Anonymous Auth to the Kubernetes API server

When enabled, requests that are not rejected by other configured authentication methods are treated as anonymous requests. These requests are then served by the K8s API server. One should rely on authentication to authorize access and disallow anonymous requests.



2. Enable the "AlwaysPullImages" Admission Control Plugin:

This admission controller modifies every new Pod to force the image pull policy to Always. This is useful in a multitenant cluster so that users can be assured that their private images can only be used by those who have the credentials to pull them. Without this admission controller, once an image has been pulled to a node, any pod from any user can use it simply by knowing the image’s name (assuming the Pod is scheduled onto the right node), without any authorization check against the image. When this admission controller is enabled, images are always pulled prior to starting containers, which means valid credentials are required.




<<Include MVC image with only 2 remaining misconfigurations>>




## 


Some **key** thoughts to reflect on based on the security review that we just performed:

1. The default control-plane components (i.e., Kubernetes cluster comprising of master and worker nodes, etcd, coreDNS and kube-proxy DaemonSets, and a host of other foundational elements) that you installed in this lab section have security misconfigurations that have potentially introduced new attack surface to the cloud-native application architecture.

2. The components in this section of the lab can now be thought of as "new abstract infrastructure", which will be utilized to install and manage lifecycle of several application pods on the respective nodes. More on that in the next section, but do we know enough about our EKS cluster misconfigurations until this point to make a decision whether to let the build activities continue or not?

3. This is also where it's important to highlight MVISION Cloud's ability to perform security configuration audit scans in a CloudFormation/Terraform template **before** the underlying infrastructure gets instantiated by the development teams. Wouldn't it be effective to add these checks related to "container/cluster security" to other traditional security misconfiguration checks that are performed on other cloud-native resources like EC2 VMs, S3 buckets, etc.? Do you see where the two strategies intersect?

In short, the ability to scan misconfigurations on AWS managed Kubernetes environment helps enable good **guardrails** with respect to this new cloud-native application that we will shortly be deploying in the next section. 
