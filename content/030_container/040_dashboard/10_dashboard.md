---
title: "Deploy the Official Kubernetes Dashboard"
date: 2018-08-07T08:30:11-07:00
weight: 10
tags:
  - beginner
  - andreas
  - done
---

The official Kubernetes dashboard is not deployed by default, but there are
instructions in [the official documentation](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

We can deploy the dashboard with the following command:
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta8/aio/deploy/recommended.yaml
```

{{<todo>}}anything else to mention here?{{</todo>}}