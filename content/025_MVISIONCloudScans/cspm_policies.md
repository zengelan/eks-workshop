---
title: "Cloud Security Posture Management (CSPM) Policies"
date: 2020-02-24
weight: 15
---

For the first Security Scan, we will be performing Cloud Security Posture Management (CSPM or Config Audit) against both the AWS environment as a whole and the Elastic Kubernetes Service (EKS).

Howver over POLICY at the top and select CONFIGURATION AUDIT.

![cspm1](/images/mvcscan/cspmpolicy01.png?classes=border,shadow)

By default, MVC enables all the CSPM policies to provide customers a comprehensive baseline to their IaaS posture. For this lab, we only want to test a few to start.

Click the check box at the top-left of the list to select all the CSPM policies. Next, click the ACTION button at the top-right and choose DEACTIVATE POLICIES. Confirm your selection.

![cspm2](/images/mvcscan/cspmpolicy02.png?classes=border,shadow)

![cspm3](/images/mvcscan/cspmpolicy03.png?classes=border,shadow)

![cspm4](/images/mvcscan/cspmpolicy04.png?classes=border,shadow)
