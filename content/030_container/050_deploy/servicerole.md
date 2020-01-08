---
title: "Deploy Web Frontend"
date: 2020-01-08
weight: 29
---

The guestbook application has a web frontend serving the HTTP requests written in PHP. It is configured to connect to the redis-master Service for write requests and the redis-slave service for Read requests. Note that the configuration deploys 3 replicas for the web frontend application.

This is web-frontend-deployment.yaml for our Guestbook application. There is no need to copy this content since it is included in the repo clone in your environment. Step 1 will deploy the below configuration using a relative path.

```
apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: frontend
  labels:
    app: guestbook
spec:
  selector:
    matchLabels:
      app: guestbook
      tier: frontend
  replicas: 3
  template:
    metadata:
      labels:
        app: guestbook
        tier: frontend
    spec:
      containers:
      - name: php-redis
        image: gcr.io/google-samples/gb-frontend:v4
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        env:
        - name: GET_HOSTS_FROM
          value: dns
          # Using `GET_HOSTS_FROM=dns` requires your cluster to
          # provide a dns service. As of Kubernetes 1.3, DNS is a built-in
          # service launched automatically. However, if the cluster you are using
          # does not have a built-in DNS service, you can instead
          # access an environment variable to find the master
          # service's host. To do so, comment out the 'value: dns' line above, and
          # uncomment the line below:
          # value: env
        ports:
        - containerPort: 80
```

1. Apply the frontend Deployment from the frontend-deployment.yaml file:

```
  kubectl apply -f <Will to provide relative path>/application/guestbook/frontend-deployment.yaml
```

2. Query the list of Pods to verify that the three frontend replicas are running:

```
  kubectl get pods -l app=guestbook -l tier=frontend
```

3. The response should be similar to this:

```
  NAME                        READY     STATUS    RESTARTS   AGE
  frontend-3823415956-dsvc5   1/1       Running   0          54s
  frontend-3823415956-k22zn   1/1       Running   0          54s
  frontend-3823415956-w9gbt   1/1       Running   0          54s
```  
