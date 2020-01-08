---
title: "Clone the Service Repo"
chapter: false
weight: 20
tags:
  - beginner
  - MFESummit2020
  - shiftleft
---

In this step you are downloading the CloudFormation templates that are used to deploy resources in AWS automatically.
These templates all have some security issues built-in and they will be rejected to be deployed by MVISION Cloud.

The following command will clone the branch for your codename from the repository. We have created this branch for you upfront and placed the three templates in there. Once you make changes and check this into the GIT sourcecode management system, the Jenkins system will be notified about a new code checking, and then will 
1. download the latest files for your branch from the GIT repo
1. perform a Shift-Left Config Audit scan of the template
1. if the scan does not find any issues, the template will be automatically deployed to AWS

```
cd ~/environment
git clone -b <CODENAME> https://git-codecommit.us-east-1.amazonaws.com/v1/repos/SESummit2020 SESummit2020
ll
```

{{% notice warning %}}
If you receive an error like "fatal: unable to access 'https://.....': The requested URL returned error: 403" then you need to remove the line starting with `aws_session_token` from the aws credential file at `${HOME}/.aws/credentials`
Otherwise you will not be able to authenticate correctly when using the `git`command.   
You can use the following command to easily remove the line, then try again
```bash
sed -i '/aws_session_token/d' ${HOME}/.aws/credentials

```
this is due to a current bug/issue in the Code9 IDE
{{% /notice %}}