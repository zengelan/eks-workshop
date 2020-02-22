---
title: "Connect MVISION Cloud to AWS"
chapter: false
weight: 300
---

MVISION Cloud utilizes AWS' comprehensive set of APIs to provide security for IaaS services such as EC2 and S3.  Later sections of this workshop will provide details on the details of the security provided, the following describes the functionality of MVISION Cloud for AWS at a high level:

In order to provide this security, your MVISION Cloud tenant will need access to various components of your AWS environment.  Let's get started on creating a role.

#### Determine your MVISION Cloud AWS Account ID

1.  From the MVISION Cloud dashboard, click the configuration wheel and click **service management**.

  ![Enter Service Management](/images/mfe/clickservicemanagement.png?classes=border,shadow)

2.  Click **Add Service Instance**, select AWS, and provide a name for the instance when promted ("AWS" will work just fine)

3.  On the **Account Settings** screen make a note of your **MVISION Cloud AWS Account ID** and **External ID** then select the checkboxes shown then click **next**.

  ![Enter Service Management](/images/mfe/awsselections.png?classes=border,shadow)

4.  Acknowlege the pre-requisites and click **next**

5.  You will be presented with a page to enter you AWS Role ARNs.  Leave this browser tab where it is and we will come back to it later.

#### Create an AWS Role for MVISION Cloud

1.  Login to your AWS account and select **IAM** from the services menu.

2.  From IAM, navigate to Roles and click **Create Role**

  ![MVISION Cloud for AWS Summary](/images/mfe/1add_role.png?classes=border,shadow)

3.  Select **Another AWS account** and check the **Require External ID** option.  Enter your **Account ID** and **External ID** information that you recorded from MVISION Cloud earlier.  Then click **Next: Permissions**

  ![Create AWS Role 1](/images/mfe/createawsrole1.png?classes=border,shadow)

4.  In the seach box, enter "administrator" and select the AdministratorAccess checkbox and click **Next: Tags**

  ![MVISION Cloud for AWS Summary](/images/mfe/administratoraccess.png?classes=border,shadow)

  {{% notice Important %}}
  In a production environment you would provide much more granular controls, however since this is a lab environment we don't want to restrict MVISION Cloud from doing anything it needs to.
  {{% /notice %}}

5.  Click **Next: Review**

6.  Provide a name for the new role such as the one below and the click **Create role**
  ![MVISION Cloud for AWS Summary](/images/mfe/clickcreaterole.png?classes=border,shadow)

7.  Back at the AWS Roles screen, enter the name of the role you just created in the search box and click its name.

8.  Record the Role ARN Shown there.

  ![Copy Role ARN](/images/mfe/copyrolearn.png?classes=border,shadow)

#### Configure MVISION Cloud to use the new AWS Role

1.  Return to the MVISION Cloud configuration screen.

2.  Enter the new Role ARN you recorded in the previous step and provide a friendly name such as the one shown below, click **add** and then click **Authenticate Accounts**
  ![Copy Role ARN](/images/mfe/enterarn.png?classes=border,shadow)

3.  Wait while MVISION Cloud authenticates the account and click **Done** when promtped.

4.  Click the button to select the receiver account, and click the account number of the AWS account you just connected.
  ![Copy Role ARN](/images/mfe/selectreceiveraccount.png?classes=border,shadow)
  
5.  Tick the box to allow MVISION Cloud to automatically create permissions needed for Real-Time monitoring and click **Next**.

6.  Select or enter any email addresses that you would like to receive automatic email notification of violations and click **Next**.

7.  Review all of the information and click **Save**

#### Congratulations MVISION Cloud is now configured and ready for use with AWS!