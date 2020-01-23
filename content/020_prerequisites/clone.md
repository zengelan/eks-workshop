---
title: "Clone the Service Repos"
chapter: false
weight: 40
hidden: true
tags:
  - MFESummit2020
---

In this step you are downloading some of the files and tools we need for the lab to your environment. The following commands create a git repository in your environment and fill it with the data from the central repository.

Let's first reset and setup the right configuration for the git command to use the aws credentials (ref: https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-https-unixes.html)

```
rm ~/.gitconfig
git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true

```

Now lets clone the `master` branch from the repository, we will be cloning another branch, specific for your student environment later
```
cd ~/environment
git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/SESummit2020 SESummit2020_master
ls -lisah

```

{{% notice warning %}}
If you receive an error like "fatal: unable to access 'https://.....': The requested URL returned error: 403" then you need to remove the line starting with `aws_session_token` from the aws credential file at `${HOME}/.aws/credentials`
Otherwise you will not be able to authenticate correctly when using the `git`command.   
You can use the following command to easily remove the line, then try again
```bash
sed -i '/aws_session_token/d' ${HOME}/.aws/credentials

```
this is due to a current bug/issue in the Cloud9 IDE
{{% /notice %}}
