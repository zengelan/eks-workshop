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
git clone -b $CODEWORD https://git-codecommit.us-east-1.amazonaws.com/v1/repos/SESummit2020 ${HOME}/environment/SESummit2020
cd ${HOME}/environment/SESummit2020
ll

```

{{% notice warning %}}
If you receive an error like `fatal: unable to access 'https://.....': The requested URL returned error: 403` then you need to remove the line starting with `aws_session_token` from the aws credential file at `${HOME}/.aws/credentials`
Otherwise you will not be able to authenticate correctly when using the `git`command.   
Execute the command `sed -i '/aws_session_token/d' ${HOME}/.aws/credentials` to easily remove the line, then try again
this is due to a current bug/issue in the Cloud9 IDE
{{% /notice %}}

Another note

{{% notice warning %}}
If you receive an error like `fatal: repository '/home/ec2-user/environment/SESummit2020' does not exist` then you hve not set the environment varibale with your codeword and the variable cannot be expanded. You can either set the variable manually with `export CODEWORD=<CODEWORD>` (and replacing <CODEWORD> with your actual codeword, for example 'export CODEWORD=flashpoint') or you check the section [PREPARE THE ENVIRONMENT](/020_prerequisites/environment) in the section "Start the workshop" for details
{{% /notice %}}
