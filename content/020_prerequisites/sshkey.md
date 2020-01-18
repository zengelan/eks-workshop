---
title: "Create an SSH key"
chapter: false
weight: 40
---


Please run this command to generate SSH Key in Cloud9. This key will be used on the worker node instances to allow ssh access if necessary.

```
ssh-keygen
```

{{% notice tip %}}
Press `enter` 3 times to take the default choices
{{% /notice %}}

Upload the public key to your EC2 region:

```
aws ec2 --region ${EKS_REGION} import-key-pair --key-name eksworkshop-${CODEWORD} --public-key-material file://~/.ssh/id_rsa.pub
```
