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


![cve_image_1](cve_image_1.jpg?classes=border,shadow)

-You have docker installed (on the Ubuntu VM) [required to pull/push docker images to the ECR repo]
-You will be pulling vulnerable docker image which have vulnerabilities, examples are provided later in this lab
https://docs.docker.com/get-docker/
https://aws.amazon.com/blogs/compute/authenticating-amazon-ecr-repositories-for-docker-cli-with-credential-helper/
-Add your username to the docker group so that you can run Docker without using sudo: sudo usermod -a -G docker ${USER}
Note: At the time of this lab, the following command was not working as expected:  aws ecr get-login | docker login --username AWS --password-stdin <Account-ID>.dkr.ecr.us-west-2.amazonaws.com
-Use this instead:  aws --region us-west-1 ecr get-login-password | docker login --username AWS --password-stdin <Account-ID>.dkr.ecr.us-west-1.amazonaws.com
-Change your region to appropriate location, and replace '<Account-ID>' with your AWS account ID.
-For more info: https://github.com/aws/aws-cli/issues/4962
-If this does not work, then log into AWS first, then authenticate to docker using the --password option
# Obtain dirty docker images

To obtain a set of dirty images, navigate to https://hub.docker.com/r/vulnerables/web-dvwa to look for some interesting docker images.

For example these images were found to be dirty at the time of this lab:

Pull these images below:

vulnerables/web-dvwa
vulnerables/web-owasp-railsgoat
tomcat:8-jdk8-corretto
bitnami/wordpress:5.2.2-ol-7-r59
Obtain the pull command directly from the Docker hub:

![cve_image_2](cve_image_2.jpg?classes=border,shadow)

At this stage you should have the images, check by running 'docker image ls'

#Push instructions to ECR

Option 1: Create the ECR repositories using the AWS UI

Reminder: make sure the AWS vulnerability scanning was disabled when you created your ECR repo. If not, delete the repo and recreate.

![cve_image_1](cve_image_1.jpg?classes=border,shadow)

Option 2: Create the ECR repositories using the AWS cli

aws ecr create-repository --repository-name myapp2 --image-scanning-configuration scanOnPush=false --region us-west-1

Note: This command will fail if you are using aws cli version 1

Retag the container

1. Find your push commands from your ECR container
