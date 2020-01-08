---
title: "Deploy our Backend Redis DB (master)"
date: 2020-01-08
weight: 5
---

The Guestbook application uses a simple, multi-tier web application using Kubernetes and Docker. There is a Web frontend and a Redis database backend to store data. It writes its data to a Redis master instance and reads data from multiple Redis slave instances.

```
apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: redis-master
  labels:
    app: redis
spec:
  selector:
    matchLabels:
      app: redis
      role: master
      tier: backend
  replicas: 1
  template:
    metadata:
      labels:
        app: redis
        role: master
        tier: backend
    spec:
      containers:
      - name: master
        image: k8s.gcr.io/redis:e2e  # or just image: redis
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        ports:
        - containerPort: 6379
```

The Manifest file, included above, specifies a deployment controller that runs a single replica Redis master Pod. We will write this description to the kubernetes api using kubectl, and kubernetes will ensure our preferences are met as the application is deployed.

The containers listen on port 6379, and native service discovery will be used to locate the running containers and communicate with them.
