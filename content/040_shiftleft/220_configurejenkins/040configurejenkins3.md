---
title: "Configure Jenkins Projects"
date: 2018-08-07T08:30:11-07:00
weight: 20
draft: false
tags:
  - mfesesummit2020
  
---

Now that Jenkins is configured and ready to use MVISION Cloud, the final step is to enable the security checks are part of the project's build process.

To get started, return to the Jenkins homepage and click the first project (ConfigAudit_Easy):

![ConfigAudit_Easy](/images/mfe/clickconfigauditeasy.png?classes=border,shadow)

You'll see a notice that the project is currently disabled.  Click enable:

![Click Enable](/images/mfe/clickenable.png?classes=border,shadow)

With the project enabled, click on the "configure" button:

![Click Configure](/images/mfe/clickconfigure.png?classes=border,shadow)

Scroll through the project's configuration, taking note of the enabled sections and what is configured there.  For instance you'll notice that the build is triggered automatically when AWS CodeCommit detects a change to code and sends a notification to the CodeCommitSQS queue.

  ![SQS Trigger](/images/mfe/sqstrigger.png?classes=border,shadow)

  Also note that the project is built from the latest source stored in AWS CodeCommit using Git (more on this later):

  ![Git AWS CodeCommit](/images/mfe/gitcodecommit.png?classes=border,shadow)

Click the "Enable Shift Left Inline Integration Box" (there is no need to change the other settings):

![Enable Shift Left](/images/mfe/enableshiftleft.png?classes=border,shadow)


####Repeat the above steps for the Medium and Hard projects


You have successfully configured Jenkins to work with MVISION Cloud!  Please move on to the next section to configure MVISION Cloud policies.

