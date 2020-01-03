---
title: "Prerequisites"
date: 2018-08-07T13:31:55-07:00
weight: 10
tags:
  - MFESummit2020
  - sunny
---

For this module, we need to download the [eksctl](https://eksctl.io/) binary:
```bash
curl --silent --location "https://labs.sesummit20.net/tools/eksctl_mfesummit2020.tar.gz" | tar xz -C /tmp
sudo mv -v /tmp/eksctl /usr/local/bin
```


{{% notice warning %}}
In this workshop we will use a special version of eksctrl which turns on logging for the EKS master, schedule and worker nodes during creation. If you use another build of eksctl then please ensure you have enabled logging in the configuration file or that you enable logging right after the EKS cluster was created manually 

{{% /notice %}}


Confirm the eksctl command works:
```bash
eksctl version
```

Enable eksctl bash-completion
```
eksctl completion bash >> ~/.bash_completion
. /etc/profile.d/bash_completion.sh
. ~/.bash_completion
```
