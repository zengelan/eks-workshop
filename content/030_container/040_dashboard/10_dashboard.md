---
title: "Deploy the Official Kubernetes Dashboard"
date: 2018-08-07T08:30:11-07:00
weight: 10
tags:
  - beginner
---

The official Kubernetes Dashboard is not deployed by default, but there are
instructions in [the official documentation](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

The Kubernetes Dashboard is a tool with a lot of focus currently and which wraps a comfortable UI around the kubernetes control commands and monitoring tools. We will use it throughout the lab as its a great tool to visualize whats going on.

We can deploy the dashboard easily with the following command:
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta8/aio/deploy/recommended.yaml
```

This results in the following output:
![dashinstalloutput](/images/mfe/dashinstalloutput.jpg?classes=border,shadow)

The command above is a great example on how dynamic the kubernetes and conatiner tools are built. By specifying a URL that point to a configuration (in YAML format here) the tool automatically downlaod the specifications and deploys a full application including all required infrastructure. 

The file `/kubernetes/dashboard/v2.0.0-beta8/aio/deploy/recommended.yaml` iss tored on GitHub, a Code Collaboration tool, so when the develoeprs check in a new version or make any changes to the infrastructure, re-executing this command will automatically update the application and infrastructure.


Please continue on the next page
