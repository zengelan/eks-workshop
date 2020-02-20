---
title: "Configure Jenkins"
date: 2018-08-07T08:30:11-07:00
weight: 20
draft: false
tags:
  - mfesesummit2020
  
---

## Jenkins Configuration Basics

Now that we have access to our Jenkins server, we need to configure a few items to get it up and running and talking to MVISION Cloud:

1. **Configure Jenkins IP address** - Jenkins needs to know its IP address to write correct URLs and hyperlinks
2. **Provide MVISION Cloud Credentials** - Jenkins inherits access to AWS because it is running on an EC2 instance assigned an IAM role.  However it need to be provided credentials for your MVISION Cloud tenant in order to make the API calls necessary to submit infrastructre-as-code (CloudFormation) files for inspection
3. **Enable Jenkins Projects** - A trio of Jenkins projects have been preconfigured with all the steps necessary to build three different CloudFormation templates however they need to be enabled before they can be used.


