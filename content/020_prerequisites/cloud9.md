---
title: "Access Cloud 9 IDE"
chapter: false
weight: 20
tags:
  - RSA
---

One of the most important resources you will be using is the Cloud 9, cloud based, Integrated Developer Environment (IDE). This is similar to using Eclipse or IntelliJ IDEA as an IDE. However Cloud 9 runs in the cloud, on a EC2 machine and can be accessed through the web browser.
No installation is needed and when working with it, you are already in the correct network and using the correct AWS credentials needed for our workshop. 

{{% notice tip %}}
If you want to learn more about Cloud 9 and how it works you can visit the [official Getting Started with Cloud 9 pages](https://console.aws.amazon.com/cloud9/home/product?ad=c&cp=bn&p=c9#) for further information
{{% /notice %}}

### Access your personal Cloud 9 environment
Check the list of credentials for a link to your personal Cloud 9 environment or use the AWS Console to navigate to Cloud 9 and click on **Open IDE** 

![Cloud91](/images/mfe/cloud9_1.jpg)

Your IDE Opens and you can see the main window layout. It looks like a "regular" IDE running on your computer but its running in your browser. Click on the (+) icon and **Open a new Terminal**

![Cloud92](/images/mfe/cloud9_2.jpg)

In the next chapter we will **prepare the environment**

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

### Install eksctl

In this section we will install the eksctl tool to communicate from Cloud9 to the EKS cluster.
Go to your Cloud9 IDE and open a new terminal and run the following commands.

Download and extract the latest release of eksctl with the following command.
```
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
```

Move the extracted binary to /usr/local/bin.
```
sudo mv /tmp/eksctl /usr/local/bin
```

Test that your installation was successful with the following command.
```
eksctl version
```

Add the permission to the EKS cluster for the MVISION Cloud role.
```
eksctl create iamidentitymapping --cluster mcafee-workshop-eksctl --arn <put your own McAfeeServiceRole arn here> --group system:masters --username admin
```

Example:
```
eksctl create iamidentitymapping --cluster mcafee-workshop-eksctl --arn arn:aws:iam::248338443305:role/McAfeeServiceRole --group system:masters --username admin
```
