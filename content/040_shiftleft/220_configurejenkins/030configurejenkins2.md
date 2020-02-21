---
title: "Configuring MVISION Cloud Credentials"
date: 2018-08-07T08:30:11-07:00
weight: 20
draft: false
tags:
  - mfesesummit2020
  
---

## Provide MVISION Cloud credentials to Jenkins

The MVISION Cloud Plugin for Jenkins works by calling the an MVISION Cloud API and submitting code for inspection against defined policies.  The credentials you provide to Jenkins tells MVISION which set of policies (located in a tenant) to use.

Jenkins uses stores credentials modularly, with usernames, passwords, API keys, etc, being in a dedicated credential manager which are then referenced globally.  For instance, here will use one set of MVISION Cloud credentials that will be used for three different projects.  We have already precreated the credential set for you, but it needs to be modified with your MVISION Cloud credentials to link to your own MVISION Cloud tenant and policies.

Follow the steps below to update the MVISION Cloud credentials that Jenkins will use:

From the Jenkins homepage, click "Credentials":

![Credentials](/images/mfe/jenkinscredentials.png?classes=border,shadow)

Find and click the credential set that has "MVC Prod SE Summit 2020" in the name:

![MVC Credential](/images/mfe/clickcredential.png?classes=border,shadow)

Note that the details screen for the credentials shows the jobs that are using it, then click "update":

![Jenkins URL](/images/mfe/clickupdate.png?classes=border,shadow)

Replace the username and password fields with the credentials you were provided for you MVISION Cloud tenant (do not change the ID) and click "save":

![Jenkins URL](/images/mfe/updatecredentials.png?classes=border,shadow)

