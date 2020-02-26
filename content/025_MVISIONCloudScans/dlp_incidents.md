---
title: "DLP Incidents"
date: 2020-02-24
weight: 22
---
Once the Scan is complete, you can either go to POLICY > POLICY INCIDENTS, or you can click on the Last Scan Incidents number as shown below.

![dlp](/images/mvcscan/dlpincident01.png?classes=border,shadow)

You will see a list of files that were found in the AWS S3 bucket.

![dlp](/images/mvcscan/dlpincident02.png?classes=border,shadow)

By selecting an incident row, you can see details for that incident.

![dlp](/images/mvcscan/dlpincident03.png?classes=border,shadow)

Make sure to scroll down within the Incident Details to see the secure Match Highlighting with Obfuscation.

![dlp](/images/mvcscan/dlpincident04.png?classes=border,shadow)

You may notice that one high severity incident has an action taken of "Quarantine Failed". This is expected as our IAM Role is ReadOnly. MVISION Cloud can take numerous automatic response actions, but require further permissions within the AWS environment.