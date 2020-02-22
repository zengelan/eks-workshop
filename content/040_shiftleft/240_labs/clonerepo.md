---
title: "Clone your CodeCommit Repo"
chapter: false
weight: 20
tags:
  - beginner
  - MFESummit2020
  - shiftleft
  
---

In this step you are downloading the CloudFormation templates from the repository that is used by Jenkins to automatically deploy resources in AWS.  These templates have some security issues built-in and they will be rejected to be deployed by MVISION Cloud.

The following command will clone (make a local copy) of the your code repository using a popular tool called Git.  Not only does Git download code, it has commit and push functions whcih detect any local changes nade to the clone and, when you are ready, merges those changes to the repository.

We have created this repo for you upfront and placed the three templates in there. Once you make changes and check this into the Git sourcecode management system, the Jenkins system will be notified about a new code check-in, and will then:

1. Download the latest files for your branch from the Git repo
1. Perform a Shift-Left Config Audit scan of the template (via the MVISION Cloud Plugin)
1. If the scan does not find any issues, the template will be automatically deployed to AWS

## Let's get started in Code9

Login to your AWS console, ensure you are in the US-West-2 (Oregon), region and navigate to the Cloud9 service.  If should have already created an IDE environment for an earlier part of the lab, click open "Open IDE" to get started.

![Open Cloud9](/images/mfe/opencloud9.png?classes=border,shadow)

{{% notice Important %}}
If you do NOT have an IDE, click "Create Environment", provide a name, and continue creating the Cloud9 IDE with all the defaults.  When it is ready, click "Open IDE" to get started.
{{% /notice %}}

## Clone your AWS CodeCommit Repo

Let's open a bash shell to work from.  Select "New Terminal" from the "Window" menu:

![Open a new bash terminal](/images/mfe/newterminal.png?classes=border,shadow)

In the terminal, enter the git clone command to create a local copy of the source code in a folder named McAfeeAtRSA

```
cd ~/environment
git clone https://git-codecommit.us-west-2.amazonaws.com/v1/repos/McAfeeAtRSA ${HOME}/environment/McAfeeAtRSA
cd ${HOME}/environment/McAfeeAtRSA
ll


```

You should now see file listing and a new folder created in your Cloud9 IDE:

![Successful Clone](/images/mfe/successfulclone.png?classes=border,shadow)
