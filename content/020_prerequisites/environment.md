---
title: "Prepare the environment"
chapter: false
weight: 30
tags:
  - RSA
---

{{% notice info %}}
Starting from here, when you see command to be entered such as below, you will enter these commands into Cloud9 IDE. You can use the **Copy to clipboard** feature (right hand upper corner) to simply copy and paste into Cloud9. In order to paste, you can use Ctrl + V for Windows or Command + V for Mac.
{{% /notice %}}

To ensure temporary credentials aren't already in place we will also remove
any existing credentials file by executing the following command in the Terminal:
```
rm -vf ${HOME}/.aws/credentials
```

#### Saving your student credentials for AWS
Execute the following command and enter the information from the user information.

{{% notice warning %}}
As Default Region, please use `us-east-2`
{{% /notice %}}
 
Enter the following information when prompted for it:

AWS Acces Key ID <br>
AWS Secret Access Key <br>
Region as us-east-2 <br>
Output format `json` <br>

{{% notice warning %}}
Please take extra care to not paste any whitespaces or line-breaks. If something goes wrong, then restart the command and try pasting the data again without whitespaces 
{{% /notice %}}

```
aws configure
```


![awscliauth](/images/mfe/awscliauth.jpg?classes=border,shadow)

Due to a bug in the Cloud9 IDE we need to remove the line `aws_session_token=` from the AWS credential file. Either edit the file and remove the line starting with `aws_session_token=` or execute the following command:
```bash
sed -i '/aws_session_token/d' ${HOME}/.aws/credentials

```
{{% notice warning %}}
If the line starting with `aws_session_token` is in the aws credential file at ${HOME}/.aws/credentials you will not be able to authenticate correctly when using the `git`command   
{{% /notice %}}


### Using environment variables as credential storage
You can also store the AWS credentials in environment variables, these credentials stored in environment varibales have a higher priority and, when set, are overwriting the credentials used in the aws cli configuration.
To set your environment variables execute the following commands and append the key id and private key accordingly. These variables are only set in the current terminal session, so if you open a new terminal tab, these environment variables must be set again.

```
export AWS_ACCESS_KEY_ID=A...X
```

and

```
export AWS_SECRET_ACCESS_KEY=h...K
```

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


And now we also need to make sure to setup the right configuration for the git command to use the aws credentials (ref: https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-https-unixes.html)

```
rm ~/.gitconfig
git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true

```

