---
title: "Access Code 9 IDE"
chapter: false
weight: 13
tags:
  - MFESummit2020
  - frith
---

One of the most important resources you will be using is the Cloud 9, cloud based, Integrated Developer Environment (IDE). This is similar to using Eclipse or IntelliJ IDEA as an IDE. However Cloud 9 runs in the cloud, on a EC2 machine and can be accessed through the web browser.
No installation is needed and when working with it, you are already in the correct network and using the correct AWS credentials needed for our workshop. 

{{% notice tip %}}
If you want to learn more about Cloud 9 and how it works you can visit the [official Getting Started with Cloud 9 pages](https://console.aws.amazon.com/cloud9/home/product?ad=c&cp=bn&p=c9#) for further information
{{% /notice %}}

### Access your personal Cloud 9 environment
Check the list of credentials for a link to your personal Cloud 9 environment or use the AWS Console to navigate to Cloud 9 and click on **Open IDE** 

![Cloud91](/images/mfe/cloud9_1.jpg)

Your IDE Opens and you can see the main window layout. It looks like a "regular" IDE running on your computer but its running in your browser. Click on the (+) icon and **Open a new Terminal**

![Cloud92](/images/mfe/cloud9_2.jpg)

### Configure Cloud9 Credential Management
{{% notice info %}}
Cloud9 normally manages IAM credentials dynamically. This isn't currently compatible with
the EKS IAM authentication, so we will disable it and rely on the IAM role instead.
{{% /notice %}}

- Return to your workspace and click the sprocket, or launch a new tab to open the Preferences tab
- Select **AWS SETTINGS**
- Turn off **AWS managed temporary credentials**
- Close the Preferences tab
![c9disableiam](/images/c9disableiam.png?classes=border,shadow)

To ensure temporary credentials aren't already in place we will also remove
any existing credentials file by executing the following command in the Terminal:
```
rm -vf ${HOME}/.aws/credentials
```

#### Enter your student credentials
Execute the following command and enter the information from the user information email. Enter the following:

AWS Acces Key ID
AWS Secret Access Key
Region as `us-east-1`
Output format `json`

```
aws configure
```

PLEASE NOTE: Screenshot below shows us-east-2, but make sure to choose us-east-1.

![awscliauth](/images/mfe/awscliauth.jpg?classes=border,shadow)

Due to a bug in the Code9 IDE we need to remove the line `aws_session_token=` from the AWS credential file. Either edit the file and remove the line starting with `aws_session_token=` or execute the following command:
```bash
sed -i '/aws_session_token/d' ${HOME}/.aws/credentials

```
{{% notice warning %}}
If the line starting with `aws_session_token` is in the aws credential file at ${HOME}/.aws/credentials you will not be able to authenticate correctly when using the `git`command   
{{% /notice %}}

### Check Credential configuration

Then execute the following command to check that you are connected and authenticated to the AWS API backend with the correct username:

#### Check username using AWS IAM
```
aws iam get-user

```
The output will be all information about your user account from IAM and looks like this
![Cloud94](/images/mfe/cloud9_4.jpg?classes=border,shadow)

Another way to get the information about the logged in user is to execute the following command, which asks the AWS STS service:

#### Check username using AWS STS
```
aws sts get-caller-identity

```

The output will show the username and user id of the currently logged in user and look like this:
![Cloud93](/images/mfe/cloud9_3.jpg?classes=border,shadow)


