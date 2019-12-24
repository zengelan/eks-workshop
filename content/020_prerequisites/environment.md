---
title: "Prepare the environment"
chapter: false
weight: 14
tags:
  - MFESummit2020
  - frith
---

To make things easier in the next steps you will define a couple of environment variables specific to your environment.

{{% notice tip %}}
We are using the ``bash_profile`` to save the variables. We can then reference them later as environment variables  
{{% /notice %}}

Copy this command, then paste it into the Cloud 9 terminal, then replace ``<CODEWORD>`` with the codeword for your environment. Then execute the command.

```bash
echo export CODEWORD=<CODEWORD> | tee -a ~/.bash_profile
```
then execute 

```bash
. ~/.bash_profile 
```

You should also save the default regions for the the different labs and resources in this lab:
```bash
echo export EKS-REGION=us-east-1 | tee -a ~/.bash_profile
. ~/.bash_profile 
```

