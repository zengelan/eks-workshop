---
title: "Enable"
weight: 10
chapter: true
draft: false
tags:
  - RSA
  - beginner
---

## Enable MVISION Cloud

#### - AWS Settings Configuration
Find your AWS account number we will need this later.
- Log into provided AWS Account 

1. Navigate to Support > Support center 
2. Note your account number. Save this number for later.
 
- Creating an S3 bucket
The CloudTrail logs will be stored in an S3 bucket so we first need to create a bucket.
1. From the AWS console, navigate to S3.
2. Click Create bucket
3. Provide the following:

Bucket name: RSALab-cloudtrail (see http://docs.aws.amazon.com/awscloudt...uirements.html for naming rules)
•	Region: US-East
 
NOTE: 
 
•	On the Set properties page, hit next. We don't need any of this.
•	On the set permissions tab, accept the defaults and hit next
•	Review the bucket settings and select Create Bucket
 
4. Repeat this process and create another bucket called RSALab-userdata
Note: this second bucket will be used for monitoring object level transactions on an S3 bucket.
5. Use this spreadsheet (CloudTrail permissions tab) to create the S3 bucket permissions. Simply enter the account # and bucket name into the B1&2 cells and the permissions will be calculated.
 
6. Select the new CloudTrail bucket. 
 
7. Select the Permissions tab > Bucket Policy and paste the permissions as copied from the boxed area in the spreadsheet  into the editor.
 
Note: This grants the CloudTrail service access to this bucket. This has nothing to do with MVISION Cloud being able to access the customer's AWS account. It's purely internal to AWS at this point. If CloudTrail can't access the S3 bucket it can't write the logs.
Enabling CloudTrail
1. Select CloudTrail from the AWS Services menu
 
2. Click on "Create Trail"
 
3. Complete the following sections
•	Trail name: skyhighdemo##-trail
•	Apply to all regions: Yes
•	Management events: All
•	Data events: "Add S3 Bucket"
 
•	Add the skyhighdemo##-userdata bucket to the list of monitored buckets
•	Storage location: Select the skyhighdemo##-cloudtrail bucket
 
4. The Trail is created



