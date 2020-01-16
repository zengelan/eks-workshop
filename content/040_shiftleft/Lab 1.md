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

2. Go to the Jenkins home page. Click on project folder that has your codeword (example: `bravado`)


![](/images/mfe/2_login.png?classes=border,shadow)
![](/images/mfe/2_config.png?classes=border,shadow)


3. Find the build job named like `<CODEWORD>_ConfigAudit_Easy` and investigate why the build failed (check the `Console` view)


![](/images/mfe/3_audit.png?classes=border,shadow)

1. Log into MVISION Cloud shared tenant and use the incidents view to find the issues associated with this template. Search for your codeword in the search bar to filter your the incidents associated with your lab account. Investigate the details of the incidents. 
https://www.myshn.net

![](/images/mfe/4_login.png?classes=border,shadow)

1. Open the template in your Cloud 9 IDE by navigating to `cd ~/environment/SESummit2020/ShiftLeft` and / or using the file browser on the left side of the Cloud 9 screen to open the file with a double click:
![](/images/mfe/gototemplate.png?classes=border,shadow)

![](/images/mfe/5_login.png?classes=border,shadow)

1. Make the appropriate changes and save the file

1. Commit the code changes to your local copy of the repo with the command ``git commit -a -m "made updates"``

1. Push the changes back to central repository with ``git push`` (this will automatically trigger a new build in jenkins afer a few seconds)

1. Check the build in jenkins to see if it succeeds, 

1. If not then investigate why it fails, fix the issue and check in the code changes again, and investigate the next build

### When the build succeeded
1. Investigate the console output from the build and see that this triggered a new VM to be deployed to Amazon EC2 based on an image (AMI). In the console log in Jenkins you can see the instance id and details about the newly deployed server.
![](/images/mfe/goodbuild.png?classes=border,shadow)
1. Navigate to the EC2 console in the relevant region 
https://us-west-1.console.aws.amazon.com/ec2/v2/home?region=us-west-1
1. Find the virtual machine and inspect the external IP and hostname
![](/images/mfe/gethostname.png?classes=border,shadow)
1. Using your local browser, navigate to the URL/IP of this server using http (port 80) to see what your new server is now sharing with the world. E.g. http://ec2-18-144-85-51.us-west-1.compute.amazonaws.com

{{%expand "What else?" %}}
You can click on the System information links of the web server you deployed to see some details about the system and AWS status and metadata. All machines running in AWS EC2 can retrieve this metadata easily and it can be used to deploy and configure new workloads and elastic scalability pretty easily.
![](/images/mfe/workloadaddtlinfo.png?classes=border,shadow)

You can terminate the instance in the EC2 console or in the CloudFormation console. 
{{%/expand%}}