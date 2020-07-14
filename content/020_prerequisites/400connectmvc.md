---
title: "Connect MVISION Cloud to AWS"
chapter: false
weight: 300
---

MVISION Cloud utilizes AWS' comprehensive set of APIs to provide security for IaaS services such as EC2 and S3.  Later sections of this workshop will provide details on the details of the security provided, the following describes the functionality of MVISION Cloud for AWS at a high level:

![MVISION Cloud](/images/mfe/mvcforAWS.png?classes=border,shadow)

In order to provide this security, your MVISION Cloud tenant will need access to various components of your AWS environment.  Let's get started on creating a role.

#### Determine your MVISION Cloud AWS Account ID

### MVISION Cloud URL ###

1. Login to the MVISION Cloud Dashboard at https://www.myshn.net/

2. From the MVISION Cloud dashboard, click the configuration wheel and click **service management**.

  ![Enter Service Management](/images/mfe/MVC-add-service.png?classes=border,shadow)

3.  Click **Add Service Instance**, select AWS, and provide a name for the instance when promted ("AWS" will work just fine)

4.  On the **Account Settings** screen make a note of your **MVISION Cloud AWS Account ID** and **External ID** then select the checkboxes shown below then click **next**.

  ![Enter Service Management](/images/mfe/mvc-activation.png?classes=border,shadow)

5.  Acknowlege the pre-requisites and click **next**

6.  You will be presented with a page to enter you AWS Role ARNs.  Leave this browser tab where it is and we will come back to it later.

#### Create an AWS Role for MVISION Cloud

1.  Login to your AWS account and select **IAM** from the services menu.

2.  From IAM, navigate to Roles and search for "mcafee". Select "McAfeeServiceRole".

  ![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup02.png?classes=border,shadow)

  On the Summary page for the Role, select the "Trust Relationships" tab and then click "Edit trust relationship".

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup03.png?classes=border,shadow)

Within the JSON formatted permissions, modify the Account ID and External ID as shown in the screenshot below. The Account ID and External ID are available on the MVISION Cloud page.

Once finished, click Update Trust Policy button.


#### Use the following JSON with an AWS policy to provide MVISION Cloud services access to EKS. Attach them to your "McAfeeServiceRole" IAM role. 
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "SkyhighEKS",
            "Effect": "Allow",
            "Action": [
                "logs:DescibeLogGroups",
                "logs:DescribeLogStreams",
                "eks:DescribeCluster",
                "eks:ListClusters",
                "logs:FilterLogEvents"
            ],
            "Resource": "*"
        }
    ]
}

```
![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup04.png?classes=border,shadow)

Once back at the Summary page for the Role, copy the "Role ARN" value. You will use this value momentarily within MVISION Cloud.

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup05.png?classes=border,shadow)

#### Configure MVISION Cloud to use the new AWS Role

1.  Return to the MVISION Cloud configuration screen.

2.  Enter the new Role ARN you recorded in the previous step and provide a friendly name such as the one shown below, click **add** and then click **Authenticate Accounts**
![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup06.png?classes=border,shadow)

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup07.png?classes=border,shadow)

Please note, you will get a warning Regarding Non Critical Errors as shown below. It is safe to "Continue with Error". 

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup08.png?classes=border,shadow)

3. Optionally add an email address where you would like to receive notifications for policy incidents and click next.
![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup18.png?classes=border,shadow)

4.  Review all of the information and click **Save**

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup09.png?classes=border,shadow)

#### Congratulations MVISION Cloud is now configured and ready for use with AWS!
