---
title: "Lab 3 - Hard"
chapter: false
weight: 60
tags:
  - beginner
  - MFESummit2020
  - shiftleft
  
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

10. If not then investigate why it fails, fix the issue and check in the code changes again

{{% notice tip %}}
MVISION Cloud DevSecOps / Shift-Left scan performs a config audit check against config audit policies to ensure compliance and best practices. However it does not check for plausibility or correct syntax of the cloudformation template. So you might be in a situation where there are not problems detected by MVISION Cloud, but the template still doesn't deploy or is rolled back by CloudFormation. If this happens, check out the CloudFormation console for more details and a detailed error description
{{% /notice %}}

{{%expand "Need help?" %}}
Here is how an RDS object can be described and information about the parameters: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-storageencrypted 
{{%/expand%}}


{{%expand "Need more help?" %}}
Not all Instances Classes support and RDS service. This means that you cannot successfully deploy a Cloud Formation template when the configuration is not plausible. Check out common instance classes for RDS here. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html
For our lab, please don't use any of the really large instance types. Rather try with `"DBInstanceClass": "db.t2.small"`  
{{%/expand%}} 


## When the build succeeded

Investigate the console output from the build and check out which resources were deployed
Look in the CloudFormation console for the relevant region for detail on the deployed assets and stages: https://us-west-1.console.aws.amazon.com/cloudformation/home?region=us-west-1
if the stack failed find out why and try to fix it in the CloudFormation template
