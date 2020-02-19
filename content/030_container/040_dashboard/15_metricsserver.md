---
title: "Deploy the Metrics Server"
date: 2018-08-07T08:30:11-07:00
weight: 15
tags:
  - beginner
---

To collect resource monitoring data and metrics and to display those in the Kubernetes Dashboard we can install the official **Kubernetes Metrics Server**. The Kubernetes Metrics Server runs in the Kubernetes system namespace and continuously collects data. More detail can be found in   [the official documentation](https://github.com/kubernetes-sigs/metrics-server)

This is how the dashboard looks when the Metrics Server is installed:
![dashmetrics](/images/mfe/dashwithmetrics.jpg?classes=border,shadow)

We first need to clone the repository to download the deployment files:
```
cd ~/environment
git clone https://github.com/kubernetes-sigs/metrics-server.git
cd metrics-server

```

Now can deploy the latest version of the Metric Server with the following command:
```
kubectl create -f deploy/kubernetes/
```

Now that this is installed in our cluster, let's connect to the Kubernetes Dashboard and see whats going on

