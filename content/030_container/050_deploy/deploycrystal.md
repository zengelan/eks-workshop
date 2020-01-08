---
title: "Deploying Redis Slave"
date: 2020-01-08
weight: 20
---

Deployments scale based off of the configurations set in the manifest file. In this case, the Deployment object specifies <b>two</b> replicas.

If there are not any replicas running, this Deployment would start the two replicas on your container cluster. Conversely, if there are more than two replicas are running, it would scale down until two replicas are running.

```
apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: redis-slave
  labels:
    app: redis
spec:
  selector:
    matchLabels:
      app: redis
      role: slave
      tier: backend
  replicas: 2
  template:
    metadata:
      labels:
        app: redis
        role: slave
        tier: backend
    spec:
      containers:
      - name: slave
        image: gcr.io/google_samples/gb-redisslave:v3
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
        - containerPort: 6379
```

1. Apply the Redis Slave Deployment from the redis-slave-deployment.yaml file:

```
   kubectl apply -f https://k8s.io/examples/application/guestbook/redis-slave-deployment.yaml
```

2. Query the list of Pods to verify that the Redis Slave Pods are running:

```
   kubectl get pods
```

3. The response should be similar to this:

```
   NAME                            READY     STATUS              RESTARTS   AGE
     redis-master-1068406935-3lswp   1/1       Running             0          1m
     redis-slave-2005841000-fpvqc    0/1       ContainerCreating   0          6s
     redis-slave-2005841000-phfv9    0/1       ContainerCreating   0          6s
```

