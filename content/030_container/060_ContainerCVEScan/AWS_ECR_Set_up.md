### Push instructions to ECR

**Option 1: Create the ECR repositories using the AWS UI**

Reminder: make sure the AWS vulnerability scanning was disabled when you created your ECR repo. If not, delete the repo and recreate.

![cve_image_1](cve_image_1.jpg?classes=border,shadow)

**Option 2: Create the ECR repositories using the AWS cli**

aws ecr create-repository --repository-name myapp2 --image-scanning-configuration scanOnPush=false --region us-west-1

Note: This command will fail if you are using aws cli version 1

_**Retag the container**_

1.  Find your push commands from your ECR container
![push1](push1.jpg?classes=border,shadow)

2.  Use Docker to re-tag your images
![cve_4](cve_4.jpg?classes=border,shadow)

- The 'highlighted' text will come from your ECR push commands.
- Find the docker repository name and tag using the docker images command.
![cve_5](cve_5.jpg?classes=border,shadow)

Use this to push the image to your ECR  repo:
![cve_6](cve_6.jpg?classes=border,shadow)

Your ECR repo should now look like something like this:
![cve_7](cve_7.jpg?classes=border,shadow)


Optional further reading:

- In this example above, we created a single repository for all images. 
- In this image below, we could create one repository for each image. 
- Best practices suggest to create a single repository for each project as its shown here below:
- The repository name is exactly the same name used for docker hub to keep it simple
![cve_8](cve_8.jpg?classes=border,shadow)

Example:

- docker tag vulnerables/web-dvwa:latest 975673024271.dkr.ecr.us-west-1.amazonaws.com/vulnerables/web-dvwa:latest
- docker push 975673024271.dkr.ecr.us-west-1.amazonaws.com/vulnerables/web-dvwa:latest
- Outcome: You can see that a single image could have multiple tags.
![cve_9](cve_9.jpg?classes=border,shadow)

to shorten the cli command above you could also create a variable: 

- example from ubuntu cli: ECRUSWEST1="975673024271.dkr.ecr.us-west-1.amazonaws.com"
- docker push $ECRUSWEST1/vulnerables/web-dvwa:latest
- Please take the time to understand how repositories and tagging works as its part of a larger workflow your customers might ask you about.
