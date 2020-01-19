---
title: "Prerequisites"
date: 2018-08-07T13:31:55-07:00
weight: 10
tags:
  - MFESummit2020
  - sunny
---

For this module, we need to download the [eksctl](https://eksctl.io/) binary:
```
curl --location "https://labs.sesummit20.net/labfiles/container-lab/eksctl_mfesummit2020_2.tar.gz" | tar xz -C /tmp
sudo mv -v /tmp/eksctl /usr/local/bin

```


{{% notice warning %}}
In this workshop we will use a special version of eksctrl which turns on logging for the EKS master, schedule and worker nodes during creation. If you use another build of eksctl then please ensure you have enabled logging in the configuration file or that you enable logging right after the EKS cluster was created manually 

{{% /notice %}}


Confirm the eksctl command works:
```
eksctl version

```

Check that the version is `0.2.0-1086-g2c93d15f` or `0.2.0-1087-g4c730114` 

***

{{% expand "Expand for more information about these versions" %}}

These versions of eksctl were specifically modified and built for our workshop.

+ Version  `0.2.0-1086-g2c93d15f` 
  + This version includes a code change to automatically enable cluster logging to CloudWatch after creation
  + Also it makes sure the AWS Availability Zone us-east-1e is excluded for nodegroups, as it doesn't support EKS (currently)
    + Commit 2c93d15f https://github.com/zengelan/eksctl/commit/2c93d15f059e63d6d6f058513e7b0a07cdd220a0 
  + Logging for the cluster needs to be enabled for basic compliance and to allow MVISION Cloud to detect configuration issues at the control plane. This is for your convenience, as cluster logging can always be enabled manually, too. Either through the AWS EKS Console or using the eksctl tool.
    + Commit 70e9aa2f https://github.com/zengelan/eksctl/commit/70e9aa2f45003b1619912532d32735208d9d20cb
+ Version  `0.2.0-1087-g4c730114`
  + In addition to the change of the version above
  + This version includes a code change that ensure that three availability groups are also used in the us-east-1 region. The original version would only use two, even when using three nodes.
  + Commit 4c73011: https://github.com/zengelan/eksctl/commit/4c730114a3791295bc9a06188e035bf639c49381 

{{% /expand %}}

***

Now let's enable eksctl bash-completion, so you can use the <TAB> key to complete commands and arguments while you type
```
eksctl completion bash >> ~/.bash_completion
. /etc/profile.d/bash_completion.sh
. ~/.bash_completion

```
