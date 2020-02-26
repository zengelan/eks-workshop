---
title: "Policy Options"
date: 2020-02-24
weight: 10
---

### Important Policy Options

Before we get started, there are three important policy options we want to enable:

1. Data Storage - customers can choose to store their secure match highlights within McAfee, or their own S3/Blob storage encrypted to their own keys

2. Secure Match Highlighting with Obfuscation - This features allows remediators to quickly and safley make true-positive or false-positive decisions about DLP incidents

3. Autonomous Remediation - This feature allows MVC to automatically move Incidents from a New status to a Resolved status after a remediator fixes the issue

To start, make sure you are logged into your MVC tenant and click on POLICY at the top, and then POLICY OPTIONS.

![PolicyMenu](/images/mvcscan/policyoptions01.png?classes=border,shadow)

Next, select Data Storage and choose McAfee. Please note, most MVC customers prefer to store their Match Highlights in their own S3 buckets or Azure Blobs, encrypted to their own keys. For the purpose of the lab, McAfee Provisioned Storage is simpler.

Then Click Save.

![Data](/images/mvcscan/policyoptions02.png?classes=border,shadow)

Select Match Highlighting and Enable, then click Save. Note how Obfuscation is turned on by default.

![MH](/images/mvcscan/policyoptions03.png?classes=border,shadow)

Finally, select Autonomous Remediation and Enable, then click Save.

![AR](/images/mvcscan/policyoptions04.png?classes=border,shadow)
