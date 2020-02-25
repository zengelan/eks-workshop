---
title: "Shift-Left Lab"
chapter: false
weight: 40
tags:
  - beginner
  - AWSWorkshop2020
  - shiftleft
  
---
![ShiftLeft](/images/mfe/shiftleft.png?classes=border,shadow)

## What is "Shift-Left"?

Traditional software development models have lumped most changes and improvements into large releases each of which has a planning, coding, testing, and release schedule.  Releases would often be several months or years apart which means that customers would have to wait a long time for features or bug fixes even though the code is already done.

Shift-left mentality changes this model in a few key ways:

1.  Small improvements and bug fixes are added continuously.
2.  Planning, coding, testing, and releases are continous processes that can lead to several releases per day.
3.  The development cycle is driven by automation (AKA the CI/CD pipeline) rather than people processes.


## About the lab with Jenkins

This lab is a scenario where you will be an engineer working on applications running in the cloud (AWS). We provided you with Continuous Integration / Continuous Delivery (CI/CD) tools like AWS CodeCommit, AWS CloudFormation and Jenkins. In this lab you will learn the basics of these tools and how to easily add infrastructure-as-code (CloudFormation)security to an existing CI/CD pipeline:

1.	Learn how CI tools like Jenkins work to quickly automate the process of transforming source code to a deployment
2.	Configure and enable the MVISION Cloud plugin for Jenkins 
3.  Set up secure configuration policies in MVISION Cloud
3.	Observe what happens when you try to build infrastructure-as-code that violates your configuration policies.
4.	Fix problems in infrastructure-as-code (CloudFormation) templates so that they can be deployed successfully.  We have provided you with three templates of varying difficulty:

    Lab1:  Easy – Deploy an EC2 instance 

    Lab2:  Medium – Deploy an S3 bucket

    Lab3:  Hard – Deploy a database (RDS)



 
