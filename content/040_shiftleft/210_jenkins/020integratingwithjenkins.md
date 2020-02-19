---
title: "About the MVISION Cloud Plugin"
date: 2018-08-07T08:30:11-07:00
weight: 20
draft: false
tags:
  - mfesesummit2020
  
---

## About the MVISION Cloud Plugin for Jenkins

Jenkins supports hundreds of plugins that do everything from enhance its ability to provide management metrics, utilize various code repositories, enable deployment to IaaS, and even provide Chuck Norris "facts."  Similarly, MVISION Cloud is enabled through the use of a Jenkins plugin.

When enables as part of a project, Jenkins calls an MVISION Cloud API to check any infrastructure-as-code (such as a CloudFormation template) for compliance with policies enabled in the MVISION Cloud Dashboard.  If any deviations are present, Jenkins will stop the build and output a discription of the problem (such leaving wide SSH open) to the build/console log.

![Jenkins with MVISION Cloud](/images/mfe/JenkinswithMVISION.png?classes=border,shadow)

The project now has a new build step:

  1.  Build triggered by code update, timer, or by clicking the "build now" button
  2.  The latest source code is pulled from the code repository (AWS CodeCommit)
  3.  <b><span style="color:red">Infrastructure-as-Code (CloudFormation templates) are checked by MVISION Cloud</span></b>
  4.  Execute build scripts, compile code and test code
  5.  Deploy IaaS templates (such as EC2 instances, security groups, load balancers, etc.)
  6.  Configure the container orchestrator (such as Kubernetes)
  7.  Deploy code into the new infrastructure
  8.  Run test scripts against the new infrastructure and code
  9.  Modify DNS to move users over to the newly deployed infrastructure and code

If non-compliant infrastructure templates are identified, developers receive immediate feedback on the problem:

![Build failed by violation](/images/mfe/failedbuild.png?classes=border,shadow)

![Chuck Norris owns you](/images/mfe/chucknorris.png?classes=border,shadow)