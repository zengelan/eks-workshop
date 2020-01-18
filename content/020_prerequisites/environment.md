---
title: "Prepare the environment"
chapter: false
weight: 30
tags:
  - MFESummit2020
---

{{% notice info %}}
Starting from here, when you see command to be entered such as below, you will enter these commands into Cloud9 IDE. You can use the **Copy to clipboard** feature (right hand upper corner) to simply copy and paste into Cloud9. In order to paste, you can use Ctrl + V for Windows or Command + V for Mac.
{{% /notice %}}

To ensure temporary credentials aren't already in place we will also remove
any existing credentials file by executing the following command in the Terminal:
```
rm -vf ${HOME}/.aws/credentials
```

#### Save your student credentials for AWS
Execute the following command and enter the information from the user information.
 
Enter the following information when prompted for it:

AWS Acces Key ID <br>
AWS Secret Access Key <br>
Region as `us-east-1` <br>
Output format `json` <br>

{{% notice warning %}}
Please take extra care to not paste any whitespaces or line-breaks. If something goes wrong, then restart the command and try pasting the data again without whitespaces 
{{% /notice %}}

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



To make things easier in the next steps you will define a couple of environment variables specific to your environment.

{{% notice tip %}}
We are using the ``bash_profile`` to save the variables. We can then reference them later as environment variables  
{{% /notice %}}

Copy this command, then paste it into the Cloud 9 terminal, then replace ``<CODEWORD>`` with the codeword for your environment. Then execute the command.

```
echo export CODEWORD=<CODEWORD> | tee -a ~/.bash_profile
```
then execute 

```
. ~/.bash_profile 

```

You should also save the default regions for the the different labs and resources in this lab:
```
echo export EKS_REGION=us-east-1 | tee -a ~/.bash_profile
. ~/.bash_profile 

```

And now we also need to make sure to setup the right configuration for the git command to use the aws credentials (ref: https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-https-unixes.html)

```
rm ~/.gitconfig
git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true

```

