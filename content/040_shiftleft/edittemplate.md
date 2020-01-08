---
title: "Edit the template"
chapter: false
weight: 20
tags:
  - beginner
  - MFESummit2020
  - shiftleft
---
## Easy
Start with the template named `fixme_easy_cloudformation.json`
1. Log into jenkins, find the job and start a manual build
1. investigate why the build failed (check the `Console` view)
1. Log into MVISION Cloud shared tenant and use the incidents view to find the issues associated with this template
1. Open the template in your Cloud 9 IDE by navigating to `cd ~/environment/SESummit2020/ShiftLeft` 
1. and make appropriate changes
1. save the file
1. Commit the code changes to your local copy of the repo with the command ``git commit -a -m "made updates"``
1. Push the changes back to central repository with ``git push`` (this will automatically trigger a new build in jenkins afer a few seconds)
1. check the build in jenkins to see if it succeeds, 
1. if not then investigate why it fails, fix the issue and check in the code changes again 
