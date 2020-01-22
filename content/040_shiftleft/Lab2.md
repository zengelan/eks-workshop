---
title: "Lab 2 - Medium"
chapter: false
weight: 50
tags:
  - beginner
  - MFESummit2020
  - shiftleft
  
---


## Medium difficulty
Now we are making things a bit more complicated, this time, use the template named `fixme_medium_cloudformation.yaml`

The lab2 steps are similar to Lab1.

1. Log into jenkins: https://jenkins.sesummit20.net/jenkins

2. Go to the Jenkins home page. Click on project folder that has your codeword (example: bravado)

3. Find the fixme_medium_cloudformation.yaml, investigate why the build failed (check the `Console` view)

4. Log into MVISION Cloud shared tenant and use the incidents view to find the issues associated with this template

5. Open the template in your Cloud 9 IDE by navigating to `cd ~/environment/SESummit2020/ShiftLeft`


{{% notice tip %}}
You can also edit the file directly in the CodeCommit UI in AWS Console. There you can browser the code repository and directly edit files. The file will be committed as soon as you save it. In the CodeCommit console you can also see all the checkins and branches.
Please make sure to select the right branch, named after your **codeword** or you will be editing someone else's file
https://console.aws.amazon.com/codesuite/codecommit/repositories/SESummit2020/branches?region=us-east-1 
{{% /notice %}}

6. Make the appropriate changes and save the file

7. Commit the code changes to your local copy of the repo with the command ``git commit -a -m "made updates"``

8. Push the changes back to central repository with ``git push`` (this will automatically trigger a new build in jenkins afer a few seconds)

9. Check the build in jenkins to see if it succeeds, 

10. if not then investigate why it fails, fix the issue and check in the code changes again 


### When the build succeeded
1. Investigate the console output from the build and check out which resources were deployed
1. Look in the Cloudformation console for the relevant region for detail on the deployed assets and stages: https://us-west-1.console.aws.amazon.com/cloudformation/home?region=us-west-1

{{%expand "Need help?" %}}
Check out this post for some help and and example
https://stackoverflow.com/a/48417263
{{%/expand%}}
