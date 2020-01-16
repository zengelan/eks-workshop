---
title: "Lab 3 - Hard"
chapter: false
weight: 60
tags:
  - beginner
  - MFESummit2020
  - shiftleft
  - boubker
---


## Hard difficulty
This time its for the experts. Show off how good you are in defining secure and compliance cloud infrastructure by getting the template named `fixme_hard_cloudformation.json` to deploy

The lab steps are similar to Lab 1 and Lab 2, but there are more difficult errors with this deployment.

1. Log into jenkins: https://jenkins.sesummit20.net/jenkins

2. Go to the Jenkins home page. Click on project folder that has your codeword (example: bravado)

3. Find the fixme_hard_cloudformation.json, investigate why the build failed (check the `Console` view)

4. Log into MVISION Cloud shared tenant and use the incidents view to find the issues associated with this template

5. Open the template in your Cloud 9 IDE by navigating to `cd ~/environment/SESummit2020/ShiftLeft` 

6. Make the appropriate changes and save the file

7. Commit the code changes to your local copy of the repo with the command ``git commit -a -m "made updates"``

8. Push the changes back to central repository with ``git push`` (this will automatically trigger a new build in jenkins afer a few seconds)

9. Check the build in jenkins to see if it succeeds, 

10. if not then investigate why it fails, fix the issue and check in the code changes again 










<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

{{%expand "Need help?" (expand to see more) %}}
 [Download solution](/labfiles/fixme_hard_cloudformation_solution.json) 
{{%/expand%}}