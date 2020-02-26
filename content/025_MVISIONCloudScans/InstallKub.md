---
title: "Install Kubernetes Tools"
chapter: false
weight: 5
---

Amazon EKS clusters require kubectl and kubelet binaries and the aws-cli or aws-iam-authenticator
binary to allow IAM authentication for your Kubernetes cluster.

Go to your Cloud9 Terminal and run the following commands in order. While you should consider the commands, it is best to use the "Copy" button at the top right of each block.

#### Install kubectl
```
sudo curl --location -o /usr/local/bin/kubectl https://amazon-eks.s3-us-west-2.amazonaws.com/1.14.6/2019-08-22/bin/linux/amd64/kubectl
sudo chmod +x /usr/local/bin/kubectl

```

#### Install jq, envsubst (from GNU gettext utilities) and bash-completion
```
sudo yum -y install jq gettext bash-completion mysql57

```

#### Verify the binaries are in the path and executable
```
for command in kubectl jq envsubst
  do
    which $command &>/dev/null && echo "$command in path" || echo "$command NOT FOUND"
  done

```

From the above output, you are looking for 3 returns of "x in path".

#### Enable kubectl bash_completion
```
kubectl completion bash >>  ~/.bash_completion
. /etc/profile.d/bash_completion.sh
. ~/.bash_completion

```


### Configure Cloud9 Credential Management
{{% notice info %}}
Cloud9 normally manages IAM credentials dynamically. This isn't currently compatible with
the EKS IAM authentication, so we will disable it and rely on the IAM role instead.
{{% /notice %}}

- Return to your workspace and click the sprocket, or launch a new tab to open the Preferences tab
- Select **AWS SETTINGS**
- Turn off **AWS managed temporary credentials**
- Close the Preferences tab
![c9disableiam](/images/c9disableiam.png?classes=border,shadow)


To ensure temporary credentials aren't already in place we will also remove
any existing credentials file by executing the following command in the Terminal:
```
rm -vf ${HOME}/.aws/credentials
```

The final step ties your Cloud9 environment to the EKS Cluster

```
aws eks update-kubeconfig --name mcafee-workshop-eksctl --region us-west-2
```

This concludes the prep for the Kubernetes environment. We will return here after the scans to resolve some high severity incidents!