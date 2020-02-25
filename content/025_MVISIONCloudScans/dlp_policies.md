---
title: "Data Loss Prevention (DLP) Policies"
date: 2020-02-24
weight: 20
---

Hover over POLICY and select POLICY TEMPLATES

![dlp1](/images/mvcscan/dlppolicy01.png?classes=border,shadow)

MVISION Cloud has hundreds of policy templates across Configuration Audit, Compliance (DLP), Collaboration, and Malware. To slim down our search, click on the Compliance/DLP button as shown below.

![dlp2](/images/mvcscan/dlppolicy02.png?classes=border,shadow)

Once the list filters, click on the Search Bar and type "pci" which further filters down. Click on the policy "PCI DSS".

![dlp3](/images/mvcscan/dlppolicy03.png?classes=border,shadow)

Repeat the same process for US Social Security Numbers by searching for "social" or something similar.

![dlp4](/images/mvcscan/dlppolicy04.png?classes=border,shadow)

Now that both are shown in the filtered list, you can select both and click on ACTIONS and choose CREATE POLICY. Accept the pop-up to create the policies.

![dlp5](/images/mvcscan/dlppolicy05.png?classes=border,shadow)

Now that the two policies have been added, we need to activate them much like we did the CSPM policies. Hover over POLICY at the top and choose DLP POLICIES.

![dlp6](/images/mvcscan/dlppolicy06.png?classes=border,shadow)

Select both policies, click on ACTIONS, and select ACTIVATE. Activated policies can be used in scans. Please note that we do not have to assign any services to the policy to use them in an On-Demand Scan. When a policy has a service assigned to it, it enables the Near Real-Time capability, allowing MVC to analysis file uploads, sharing, and content created in the cloud as it happens.

![dlp7](/images/mvcscan/dlppolicy07.png?classes=border,shadow)