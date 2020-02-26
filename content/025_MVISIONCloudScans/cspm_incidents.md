---
title: "CSPM Incidents"
date: 2020-02-24
weight: 17
---

Once the scan is complete, hover of INCIDENTS at the top and choose POLICY INCIDENTS. Explore the incidents at your leisure. 

Take special note of the "Do not admin with allowPrivilegeEscalation in Pod Security Policies" as shown below.

![dlp7](/images/mvcscan/cspm_incident02.png?classes=border,shadow)

More information on POD Security Policies can be found here:
https://kubernetes.io/docs/concepts/policy/pod-security-policy/

As well, review the two S3 bucket incidents for unrestricted access and unencrypted bucket. An example of an Unrestricted Access bucket is shown below.

![dlp7](/images/mvcscan/cspm_incident03.png?classes=border,shadow)

In a subsequent section, we will resolve these incidents within AWS.