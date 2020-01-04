---
title: "Clone the Service Repos"
chapter: false
weight: 40
tags:
  - MFESummit2020
  - frith
---

In this step you are downloading some of the files and tools we need for the lab to your environment. The following commands create a git repository in your environment and fill it with the data from the central repository.

Let's first reset and setup the right configuration for the git command

```
rm ~/.gitconfig
git config --global credential.helper store
```

Now lets clone the `master` branch from the repository, we will be cloning another branch, specific for your student environment later

```
cd ~/environment
git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/SESummit2020 SESummit2020_master
ls -lisah

```

when prompted please enter the GIT / CodeCommit username and password. 
