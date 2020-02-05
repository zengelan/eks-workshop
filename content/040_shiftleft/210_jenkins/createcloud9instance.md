---
title: "Create an EC2 Instance for Jenkins"
date: 2018-08-07T08:30:11-07:00
weight: 40
draft: false
tags:
  - mfesesummit2020
  
---
In this lab, we will be using Cloud9 to access our EC2 instances and install Jenkins.

## About Cloud9

AWS Cloud9 allows developers to access EC2 servers in order to write, run, and debug code through the browser.  In short, Cloud9 is an SSH front-end to a Linux EC2 instance.  This is ideal for a lab environment because it will provide a consistent experience across operating system platforms.



## Create Cloud9 Environment on New EC2 Instance

1. Expand the AWS Services menu and click on Cloud9 under the Developer Tools Section.

2. Click the ![Create_Environment](/static/images/shiftleft/createenvironment.png?classes=border,shadow) button.

3. Configure the Cloud9 envionment to use a new t3.small instance with Amazon Linux as shown below.  You can use any name you like for this environment.

    ![Cloud9_Environment_Settings](/static/images/shiftleft/cloud9environment.png)?classes=border,shadow


