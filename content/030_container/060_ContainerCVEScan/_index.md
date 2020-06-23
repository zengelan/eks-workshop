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

1.Introduction

  -MVISION Cloud provides the ability to run Container Vulnerability Scan (CVS) to help customers prevent weak code from reaching production. Container Vulnerability Scan (CVS) scans your images in CSP registries. It scans all specified images against a known list of vulnerabilities and creates an incident for each image against which the vulnerabilities are found.

-Similar to On-Demand Scans, it appears as an option while creating a new ODS scan. It can be configured to run on-demand or scheduled to run daily, or weekly. Currently, there are no policies to be configured for creating and configuring a scan.

2. Basic Scan Demo

  -This demo provides a quick run through of the simplicity in discovering CVE in Amazon ECR. 
  -Creating a simple vulnerability policy to begin with will help identify features that organizations can decide to white list in the future or continue to monitor. 
  -In this lab, we will review the policies, review ods configuration, review incidents which can help customers to create new policies in the future.

3. Review Policy (in MVC)

  Step 1- log into MVISION Cloud and navigate to dashboard > Policy > Vulnerabilities
  Step 2 - Click on Basic CVE Policy
  (image of CVE Policy)





