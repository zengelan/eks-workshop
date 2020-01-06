---
title: "Update to the latest AWS CLI"
chapter: false
weight: 14
draft: false
hidden: true
comment: default install now includes aws-cli/1.15.83
tags:
  - MFESummit2020
  - frith
---

{{% notice tip %}}
For this workshop, please ignore warnings about the version of pip being used.
{{% /notice %}}

1. Run the following command to view the current version of aws-cli:
```
aws --version
```

1. Update to the latest version:
```
sudo python3 -m pip install --upgrade awscli
```

1. Confirm you have a newer version:
```
aws --version
```
