---
title: "Configuring Jenkins' IP Address"
date: 2018-08-07T08:30:11-07:00
weight: 20
draft: false
tags:
  - mfesesummit2020
  
---

Jenkins is often configured with an HTTPS reverse proxy or other security in front of it, so it needs to be told what the URL looks like in your browser bar in order to correctly display images and form absolute links for notifications.  Also, Jenkins will nag you to fix this until you do so let's take care of that now.

From the Jenkins homepage, click "Manage Jenkins"

![Manage Jenkins](/images/mfe/managejenkins.png?classes=border,shadow)

From the Manage Jenkins screen, click "Configure System"

![Configure System](/images/mfe/configuresystem.png?classes=border,shadow)

From Jenkins configuration, locate the Jenkins URL setting and replace the IP address that is there with the IP address of your Jenkins instance recorded in the previous section.  The URL should begin with http:// and end with :8080/ as shown below:

![Jenkins URL](/images/mfe/jenkinsurl.png?classes=border,shadow)

**Please continue to the next section of the lab to configure Jenkins' MVISION Cloud credentials**