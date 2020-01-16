---
title: "Deploy our Redis Master"
date: 2020-01-09
weight: 5
---


The Guestbook application uses a simple, multi-tier web application using Kubernetes and Docker. There is a Web frontend and a Redis database backend to store data. It writes its data to a Redis master instance and reads data from multiple Redis slave instances.

This is redis-master-deployment.yaml for our backend db service. <font color=red>There is no need to copy this content since it is included in the repo clone in your environment</font>. Step 1 will deploy the below configuration using a relative path.

{{< output >}}
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
{{< /output >}}

The Manifest file, included above, specifies a deployment controller that runs a single replica Redis master Pod. We will write this description to the kubernetes api using kubectl, and kubernetes will ensure our preferences are met as the application is deployed.

The containers listen on port 6379, and native service discovery will be used to locate the running containers and communicate with them.


1. Launch a terminal window in the directory you downloaded the manifest files

2. Apply the Redis Master Deployment from the redis-master-deployment.yaml file:

```
  kubectl apply -f ~/environment/guestbook-example/redis-master-deployment.yaml
```

3. Query the list of Pods to verify that the Redis Master Pod is running:

```
  kubectl get pods
```
4. The response should be similar to this:

```
  NAME                            READY     STATUS    RESTARTS   AGE
  redis-master-1068406935-3lswp   1/1       Running   0          28s
```

5. Run the following command to view the logs from the Redis Master Pod. Replace ``<PODNAME>`` with the name of the pod from the output of the previous command.

```
  kubectl logs -f <POD-NAME>
```

<b>Note</b>: Replace <font color="red">POD-NAME</font> with the name of your Pod

