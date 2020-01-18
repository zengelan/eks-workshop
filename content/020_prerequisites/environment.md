---
title: "Prepare the environment"
chapter: false
weight: 30
tags:
  - MFESummit2020
  - frith
---

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

