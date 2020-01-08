---
title: "Deploy Web Frontend"
date: 2020-01-08
weight: 29
---

The guestbook application has a web frontend serving the HTTP requests written in PHP. It is configured to connect to the redis-master Service for write requests and the redis-slave service for Read requests. 

This is web-frontend-deployment.yaml for our Guestbook application. There is no need to copy this content since it is included in the repo clone in your environment. Step 1 will deploy the below configuration using a relative path.

```
apiVersion: apps/v1 #  for k8s versions before 1.9.0 use apps/v1beta2  and before 1.8.0 use extensions/v1beta1
kind: Deployment
metadata:
  name: frontend
spec:
  selector:
    matchLabels:
      app: guestbook
      tier: frontend
  replicas: 1
  template:
    metadata:
      labels:
        app: guestbook
        tier: frontend
    spec:
      containers:
      - name: php-redis
        image: zengelan/gb_frontend:latest
        imagePullPolicy: Never
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        env:
        - name: GET_HOSTS_FROM
          value: dns
          # If your cluster config does not include a dns service, then to
          # instead access environment variables to find service host
          # info, comment out the 'value: dns' line above, and uncomment the
          # line below:
          # value: env
        ports:
        - containerPort: 80
```

1. Apply the frontend Deployment from the frontend-deployment.yaml file:

```
  kubectl apply -f ~/environment/guestbook-example/frontend-deployment.yaml
```

2. Query the list of Pods to verify that the three frontend replicas are running:

```
  kubectl get pods -l app=guestbook -l tier=frontend
```

3. The response should be similar to this:

```
  NAME                        READY     STATUS    RESTARTS   AGE
  frontend-3823415956-dsvc5   1/1       Running   0          54s
```  
