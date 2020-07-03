---
title: "Locate and connect to your Jenkins Instance"
date: 2018-08-07T08:30:11-07:00
weight: 10
draft: false
tags:
  - mfesesummit2020
  
---
In this section, we will locate and connect to a basic installation of Jenkins which as been preinstalled in your AWS lab environment.

## Find your Jenkins instance

When logged in to your AWS account, navigate to EC2 in the US-WEST-2 (Oregon) region:

![Jenkins Instance](/images/mfe/findjenkins1.png?classes=border,shadow)
You will find EC2 t2.micro instance created in this region with the name jenkins-instance. 

**Locate and record the public IP address for you Jenkins instance (it will be different from the IP address below):**

![Jenkins' IP Address](/images/mfe/findjenkins2.png?classes=border,shadow)

## Connect to Jenkins

In a new browser tab or window, navigate to http://YOUR-JENKINS-IP-ADDRESS:8080 and you should be presented with a login screen:

![Jenkins Signin](/images/mfe/jenkinssignin.png?classes=border,shadow)

{{% notice Important %}}
Ensure you are not using HTTPS, some browsers will default to this.  If you wish to secure your Jenkins instance later by following the instructions [from the Jenkins Wiki.](https://wiki.jenkins.io/pages/viewpage.action?pageId=135468777)
{{% /notice %}}

## Login to Jenkins

Use the following credentials to login to your Jenkins instance:

  Username: **admin**
  Password: **McAfee123!**

You should be presented with a Jenkins home screen similar to the one below:

![Jenkins Signin](/images/mfe/jenkinshome.png?classes=border,shadow)

#### Continue to the next section to start configuring Jenkins
