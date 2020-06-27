---
title: "Container CVE Scanning"
chapter: true
weight: 60
tags:
  - beginner
---

# Perform a vulnerability scan on Containers

In this Chapter, we will create a container registry, upload some c ontainer images and then scan those using MVISION Cloud to detect any CVE vulnerabilities in these conatiner images.

![cvelogo](cvelogo.jpg?classes=border,shadow)


IN PROGRESS....

1.Introduction

  -MVISION Cloud provides the ability to run Container Vulnerability Scan (CVS) to help customers prevent weak code from reaching production. Container Vulnerability Scan (CVS) scans your images in CSP registries. It scans all specified images against a known list of vulnerabilities and creates an incident for each image against which the vulnerabilities are found.

-Similar to On-Demand Scans, it appears as an option while creating a new ODS scan. It can be configured to run on-demand or scheduled to run daily, or weekly. Currently, there are no policies to be configured for creating and configuring a scan.

2. Prerequisites

-Read all prerequisites before taking any actions.
-Its highly recommended to create your own Ubuntu Linux image in AWS and/or Azure for this lab and future labs.
Corporate laptops are being forced through a proxy, which in some cases causes certificate issues when running AWS CLI commands needed in this lab.
For Ubuntu, install these updates:
sudo -s 

apt-get update
apt-get install unzip
apt-get install curl
apt-get install groff

apt-get update -y sudo apt-get upgrade -y sudo apt-get dist-upgrade
apt install python3
apt-get install python3-pip
apt-get install iputils-ping
apt-get install ssh

-You have an MVC tenant
-You have an AWS account
-You have AWS CLI v2 (hyperlink https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html) installed (on the Ubuntu VM) and connected to your AWS account. (hyperlink https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration)
You must be familiar with creating  an ECR repo in AWS (Google "how to create an ECR repo")
Note: you must disable ECR vulnerability scanning as you create the ECR repo
Additional notes will be provided within lab steps


![cve_image_1](cve_image_1.png?classes=border,shadow)








