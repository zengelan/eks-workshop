---
title: "Login and Configure Jenkins"
date: 2018-08-07T08:30:11-07:00
weight: 40
draft: false
tags:
  - mfesesummit2020
  
---
In this section, we will login and connect to a basic installation of Jenkins which as been preinstalled in your AWS lab environment.

## Locate your Jenkins instance

When logged in to your AWS account, navigate to EC2 in the US-WEST-2 (Oregon) region:

![Cloud9_Environment_Settings](/images/shiftleft/findjenkins1.png)?classes=border,shadow
You will find two EC2 t2.micro instances created in this region.  One will have a name that refers to Cloud9 (Amazon's web-based Integrated Development Environmen) and one other without a name.  The one without a name is your Jenkins instance, which you can verify by the name of the security group (which will refer to Jenkins).

Locate and record the public IP address for you Jenkins instance:

![Cloud9_Environment_Settings](/images/shiftleft/findjenkins2.png)?classes=border,shadow