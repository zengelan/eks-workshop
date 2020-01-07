---
title: "Install Kubernetes Tools"
chapter: false
weight: 15
---

Amazon EKS clusters require kubectl and kubelet binaries and the aws-cli or aws-iam-authenticator
binary to allow IAM authentication for your Kubernetes cluster.

{{% notice tip %}}
In this workshop we will give you the commands to download the Linux
binaries. If you are running Mac OSX / Windows, please [see the official EKS docs
for the download links.](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html)
{{% /notice %}}

{{% notice info %}}
Starting from here, when you see command to be entered such as below, you will enter these commands into Cloud9 IDE. You can use the **Copy to clipboard** feature (right hand upper corner) to simply copy and paste into Cloud9. In order to paste, you can use Ctrl + V for Windows or Command + V for Mac.
{{% /notice %}}

#### Install kubectl
```
sudo curl --location -o /usr/local/bin/kubectl https://amazon-eks.s3-us-west-2.amazonaws.com/1.14.6/2019-08-22/bin/linux/amd64/kubectl
sudo chmod +x /usr/local/bin/kubectl

```

#### Install jq, envsubst (from GNU gettext utilities) and bash-completion
```
sudo yum -y install jq gettext bash-completion

```

#### Verify the binaries are in the path and executable
```
for command in kubectl jq envsubst
  do
    which $command &>/dev/null && echo "$command in path" || echo "$command NOT FOUND"
  done

```

#### Enable kubectl bash_completion
```
kubectl completion bash >>  ~/.bash_completion
. /etc/profile.d/bash_completion.sh
. ~/.bash_completion

```
