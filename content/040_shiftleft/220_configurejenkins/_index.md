---
title: "Configure Jenkins"
date: 2018-08-07T08:30:11-07:00
weight: 20
draft: false
tags:
  - mfesesummit2020
  
---

## Jenkins Configuration Basics

Now that we have access to our Jenkins server, we need to configure a few items to get it up and running and talking to MVISION Cloud.  In this section we will accomplish the following:

1. **Locate and connect to your Jenkins instance** - An EC2 instance with Jenkins running on it has been preloaded into your AWS EC2 environment.  We'll need to find it's IP to get started.

2. **Configure Jenkins IP address** - Jenkins needs to know its IP address to write correct URLs and hyperlinks

3. **Provide MVISION Cloud credentials** - Jenkins inherits access to AWS because it is running on an EC2 instance assigned an IAM role.
  However it need to be provided credentials for your MVISION Cloud tenant in order to make the API calls necessary to submit infrastructre-as-code (CloudFormation) files for inspection

4. **Enable MVISION Cloud on projects** - A trio of Jenkins projects have been preconfigured with all the steps necessary to build three different CloudFormation templates however they need to be configured to do the configuration check with MVISION Cloud.

#### Let's get started in the next section!