---
title: "Connect MVISION Cloud to AWS"
chapter: false
weight: 300
---

MVISION Cloud utilizes AWS' comprehensive set of APIs to provide security for IaaS services such as EC2 and S3.  Later sections of this workshop will provide details on the details of the security provided, the following describes the functionality of MVISION Cloud for AWS at a high level:

![MVISION Cloud](/images/mfe/mvcforAWS.png?classes=border,shadow)

In order to provide this security, your MVISION Cloud tenant will need access to various components of your AWS environment.  Let's get started on creating a role.

#### Determine your MVISION Cloud AWS Account ID

1.  From the MVISION Cloud dashboard, click the configuration wheel and click **service management**.

  ![Enter Service Management](/images/mfe/clickservicemanagement.png?classes=border,shadow)

2.  Click **Add Service Instance**, select AWS, and provide a name for the instance when promted ("AWS" will work just fine)

3.  On the **Account Settings** screen make a note of your **MVISION Cloud AWS Account ID** and **External ID** then select the checkboxes shown below then click **next**.

  ![Enter Service Management](/images/mfe/mvcsetup01.png?classes=border,shadow)

4.  Acknowlege the pre-requisites and click **next**

5.  You will be presented with a page to enter you AWS Role ARNs.  Leave this browser tab where it is and we will come back to it later.

#### Create an AWS Role for MVISION Cloud

1.  Login to your AWS account and select **IAM** from the services menu.

2.  From IAM, navigate to Roles and search for "mcafee"

  ![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup02.png?classes=border,shadow)

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup03.png?classes=border,shadow)

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup04.png?classes=border,shadow)

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup05.png?classes=border,shadow)

#### Configure MVISION Cloud to use the new AWS Role

1.  Return to the MVISION Cloud configuration screen.

2.  Enter the new Role ARN you recorded in the previous step and provide a friendly name such as the one shown below, click **add** and then click **Authenticate Accounts**
![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup06.png?classes=border,shadow)

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup07.png?classes=border,shadow)

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup08.png?classes=border,shadow)

7.  Review all of the information and click **Save**

![MVISION Cloud for AWS Summary](/images/mfe/mvcsetup09.png?classes=border,shadow)

#### Congratulations MVISION Cloud is now configured and ready for use with AWS!