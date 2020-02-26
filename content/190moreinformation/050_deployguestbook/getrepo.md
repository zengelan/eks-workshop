---
title: "Get the application files"
date: 2020-01-09
weight: 3
---

##Prerequisite
To begin this section, you'll need to clone the following repository for local access to deployment files:

```
cd ~/environment
git clone https://github.com/zengelan/guestbook-example ${HOME}/environment/guestbook-example
cd ${HOME}/environment/guestbook-example
ls -lisah

```

The Guestbook application uses a simple, multi-tier web application using Kubernetes and Docker. There is a Web frontend and a Redis database backend to store data. It writes its data to a Redis master instance and reads data from multiple Redis slave instances.

You can also browse the GitHub repo with your browser to get additional information : https://github.com/zengelan/guestbook-example

And you can check out the official Kubernetes example around this app here: https://kubernetes.io/docs/tutorials/stateless-application/guestbook/

