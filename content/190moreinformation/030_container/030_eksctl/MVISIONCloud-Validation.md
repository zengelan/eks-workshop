---
title: "MVISION Cloud Validation"
date: 2018-08-07T13:36:57-07:00
weight: 50
tags:
  - AWSWorkshop2020
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





## Review Compliance with Default EKS Cluster Configurations 


Out of the 78 policies imported for configuration audit, each EKS cluster deployed as part of this SE-Summit class is expected to yield the 2 or more security misconfigurations that relate to the control-plane default configurations of your cluster. This incldes the following issues:


![MVCValidationEKS](/images/mfe/Capture_Misconfigurations_EKSCluster_Final.JPG?classes=border,shadow)



Confirm that your cluster was compliant with the following **two** security checks:




**1. Argument secure-port should not be set to 0 for API Server** 

API servers can arguably be perceived as the frontend of a Kubernetes cluster. As a good  rule of thumb, administrative access to the Kube-API master should be highly controlled and audited. 

That includes disabling any anonymous authentication requests, ensuring HTTPS with client authentication is used in conjunction with authentication and authorization plugins, and limiting network access to the API-server only to dashboards and health monitoring systems.


![MVCValidationEKSCompliant1](/images/mfe/Capture_SuccessfulCheck_EKSCluster1.JPG?classes=border,shadow)


Here's how you can manually check this setting for your specific EKS cluster instance:


Select the EKS Cluster under the Analytics/Resources section and review Additional Details for the information provided via AWS APIs. Look for **apiServerSecurePort** parameter value to confirm a non-zero value. 


![MVCValidationEKSCompliant1.1](/images/mfe/Capture_Validation1Final.JPG?classes=border,shadow)





**2. Admission control plugin PodSecurityPolicy should be set for API Server**


A **Pod Security Policy** is a cluster-level resource that controls the actions that a pod can perform and what it has the ability to access. The PodSecurityPolicy objects define a set of conditions that a pod must run with in order to be accepted into the system. Pod Security Policies are comprised of settings and strategies that control the security features a pod has access to and hence this must be used to control pod access permissions.

![MVCValidationEKSCompliant2](/images/mfe/Capture_SuccessfulCheck_EKSCluster2.JPG?classes=border,shadow)



Here's how you can manually validate this in your EKS cluster configuration to learn further: 

```
kubectl describe pods --all-namespaces

```

Get the name of the `aws-node` PODs from above command then execute

```
kubectl describe pods aws-node-abcdesfg -n kube-system
```


![MVCValidationEKSCompliant2.1](/images/mfe/Capture_Validation2.JPG?classes=border,shadow)


![MVCValidationEKSCompliant2.2](/images/mfe/Capture_Validation3.JPG?classes=border,shadow)






Finally, here is the default EKS cluster yielding 16 misconfigurations when all configuration policy checks are activatated in your demo MVISION Cloud instance. 


This is based on the policy content update from the 4.4 release in December, when we had announced support for EKS/ECS Configuration Audit within MVISION Cloud.


![MVCValidation](/images/mfe/Capture_Violations.JPG?classes=border,shadow)




## Important Considerations


1. The default control-plane components (i.e., Kubernetes cluster comprising of master and worker nodes, etcd, coreDNS and kube-proxy DaemonSets, and a host of other foundational elements) that you installed in this lab section have security misconfigurations that have potentially introduced new attack surface to the cloud-native application architecture.

2. The components in this section of the lab can now be thought of as "new abstract infrastructure", which will be utilized to install and manage lifecycle of several application pods on the respective nodes. More on that in the next section, but do we know enough about our EKS cluster misconfigurations until this point to make a decision whether to let the build activities continue or not?

3. This is also where it's important to highlight MVISION Cloud's ability to perform security configuration audit scans in a CloudFormation/Terraform template **before** the underlying infrastructure gets instantiated by the development teams. Wouldn't it be effective to add these checks related to "container/cluster security" to other traditional security misconfiguration checks that are performed on other cloud-native resources like EC2 VMs, S3 buckets, etc.? Do you see where the two strategies intersect?

4. It's worth noting that because the control plane components of an EKS cluster are implemented and managed by Amazon Web Services, the options to effect remediatiation on Kube-APIMaster or ETCD components are either not present or require an AWS support ticket. This in effect is the **Shared Responsibility Model**, just applied to the world of container orchestration platforms. This has its advantages and disadvantages and one size doesn't fit all.


In short, the ability to scan misconfigurations on AWS managed Kubernetes environment helps enable good **guardrails** with respect to this new cloud-native application that we will shortly be deploying in the next section. 
