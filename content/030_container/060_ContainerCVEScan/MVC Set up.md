### Configure a Container Vulnerability Scan
Perform the following activities to configure a Container Vulnerability Scan:

1. Go to: MVISION Cloud dashboard > Policy > Vulnerabilities > Actions > Create Container Vulnerability Policy
2. Name: Basic-CVE-Policy (or whatever you would like), then Next
3. Create this policy > 
![cve_10](cve_10.jpg?classes=border,shadow)

Then click Next
4. Leave this page at default
![cve_11](cve_11.jpg?classes=border,shadow)

Click Next
5. Review and Save
![cve_12](cve_12.jpg?classes=border,shadow)

6. Choose Policy > On-Demand Scan.
7. Click Actions > Container Vulnerability.
8. The Scan Creation Wizard is displayed. On the General Info page enter the following:
- Scan Type. Select Container Vulnerability.
- Name. Enter a unique identifier so that you can rerun the scan later.
- Description. Enter an optional description for the scan. 
- Service Instance. Select the cloud service instance you want to scan.
![cve_13](cve_13.jpg?classes=border,shadow)

9. Click Next. 
10. Select the policy you just created
![cve_14](cve_14.jpg?classes=border,shadow)

Click Next
11. On the Configure Scan page, configure the scope of your scan.
- Images:
- Image Scope
- Full. Scans all images every time the scan is run. (Select this one)
- Incremental. Scan only those images that have added/modified since the last successful scan. 
- Scan Dates. Select All, to scan all dates. Or select Last X Days to limit the scan to the specified time period. 
- Repositories: 
- All Repositories.  All AWS ECR repositories will be scanned (Select this one)
- Include Specific Repositories. To include specific repositories for scan, enter the applicable repositories using the following choices. 
- Manually enter Repositories. Manually enter the repositories in the textbox which needs to be scanned. You can enter multiple repositories separated by a space, or comma. Copy paste the complete "Image URI" from the ECR repo. For example, the 
![cve_15](cve_15.jpg?classes=border,shadow)

- Vulnerability Severity Levels. Vulnerability Severity Levels specifies the severity of the CVEs to be reported in the incidents. CVE severities have the following classifications: 
- High, Medium, or Low. If level High is selected, it implies that all the CVEs with a severity classification of High and above will be reported in the generated incidents. Similarly, selecting level Low reports all the CVEs above Low including Medium, High, and above in the generated incidents.

- Accounts:
- Accounts to Scan
- All Accounts. Scan all accounts. (Select this one)
- Include Specific Accounts. To include only specific accounts, click Edit and select the applicable Account checkbox. 
- Exclude Specific Accounts. To exclude only specific accounts, click Edit and select the applicable Account checkbox.
![cve_16](cve_16.jpg?classes=border,shadow)

7. Click Next. 
8. On the Schedule Scan page, select the schedule to run your scan and click Next:
- None (On-Demand Only). Run the scan once now. (Select this one)
- Daily. Run the scan once a day. Configure the time and time zone. 
- Weekly. Run the scan once a week. Configure the day, time, and time zone.
![cve_17](cve_17.jpg?classes=border,shadow)

9. On the Review and Activate page, review your settings for the On-Demand Scan, and click Save.  
10. Run the Scan.
11. On the successful completion of scan, you can view the policy incident violations on the Policy Incidents page. (The incidents you receive may differ from the image below)
![cve_18](cve_18.jpg?classes=border,shadow)

NOTE: An incident is generated per image. So, if there are three images specified in the scan, then three incidents might be generated. But, if the Common Vulnerabilities and Exposures (CVEs) found in an image are below the selected Vulnerability Severity Level, then those are not be included in the generated incidents. Also, if an image doesn't have a CVE or is above the selected Severity Levels, no incident are generated for that image.

### Minimum Permissions in AWS

The following minimum permissions are needed in the RoleARN policy JSON:

- "ecr:GetAuthorizationToken",
- "ecr:ListImages",
- "ecr:BatchGetImage",
- "ecr:DescribeImages",
- "ecr:DescribeRepositories",
- "ecr:GetRepositoryPolicy",
- "ecr:BatchCheckLayerAvailability",
- "ecr:GetDownloadUrlForLayer",
- "ec2:DescribeRegions"

Any existing RoleARN policy can be modified and the corresponding RoleARN can be linked with CVS scans.
