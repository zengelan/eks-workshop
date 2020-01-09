---
title: "Lab 1"
chapter: false
weight: 20
tags:
  - beginner
  - MFESummit2020
  - shiftleft
  - boubker
---
## Easy
Start with the template named `fixme_easy_cloudformation.json`

1. Log into jenkins: https://jenkins.sesummit20.net/jenkins

2. Go to the Jenkins home page. Click on project folder that has your codeword (example: bravado)

![](/images/mfe/2_login.png)
![](/images/mfe/2_config.png)

3. Find the fixme_easy_cloudformation.json, investigate why the build failed (check the `Console` view)

![](/images/mfe/3_audit.png)

4. Log into MVISION Cloud shared tenant and use the incidents view to find the issues associated with this template

![](/images/mfe/4_login.png)

5. Open the template in your Cloud 9 IDE by navigating to `cd ~/environment/SESummit2020/ShiftLeft` 

![](/images/mfe/5_login.png)

6. Make the appropriate changes and save the file

7. Commit the code changes to your local copy of the repo with the command ``git commit -a -m "made updates"``

8. Push the changes back to central repository with ``git push`` (this will automatically trigger a new build in jenkins afer a few seconds)

9. Check the build in jenkins to see if it succeeds, 

10. if not then investigate why it fails, fix the issue and check in the code changes again 
