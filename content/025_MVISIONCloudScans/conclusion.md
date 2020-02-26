---
title: "Conclusion"
date: 2020-02-24
weight: 60
---

### What did we do? ###

1. We linked our AWS environment to our MVISION Cloud tenant to run two different types of security scans. This included Cloud Security Posture Management (CSPM) scans against the AWS environment as a whole, as well as the EKS cluster. It also included a Data Loss Prevention (DLP) scan against a pre-provisioned S3 bucket which had some sensitive test files.

2. We configured a number of policies associated with those scans, including numerous Container Security policies, open S3 buckets, unecnrypted S3 buckets, PCI DSS, and US Social Secuerity Numbers.

3. After identifying issues, we went back into the AWS environment and fixed them via the GUI and through the AWS CLI. This would be very indicative of what your DevOps team would need to do!

4. Finally, we rescanned the environment to show through reporting a reduction of Open incidents.


### Critical Takeaways ###

1. Vocabulary! As we all as learn more about bridging the gap between security and DevOps, getting to speak the same language is so important.

2. While many of the items we performed were manual, many could and should be automated in production. For example, if someone opens a S3 bucket without permission, it should be closed ASAP! There is a screenshot showing this at the bottom of the screen.

3. To thread the needle of security and business agility, we need to be aware that sometimes things are configured certain ways to support a business process. For example, there is a S3 bucket that does have permission to be public, it would be prudent to perform a DLP scan to ensure there is no sensitive company data being exposed publicly. A screenshot of this as an automatic response is also shown below.

4. Please share with us what you found valuable!

![dlp7](/images/mvcscan/conclusion01.png?classes=border,shadow)

![dlp7](/images/mvcscan/conclusion02.png?classes=border,shadow)

![dlp7](/images/mvcscan/conclusion03.png?classes=border,shadow)

