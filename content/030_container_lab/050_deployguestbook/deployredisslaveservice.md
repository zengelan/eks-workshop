---
title: "Deploy Redis Slave Service"
date: 2020-01-08
weight: 25
---

The guestbook application needs to communicate to Redis slaves to read data. To make the Redis slaves discoverable, you need to set up a Service. A Service provides transparent load balancing to a set of Pods.

This is redis-slave-service.yaml for our backend db service. <font color=red>There is no need to copy this content since it is included in the repo clone in your environment</font>. Step 1 will deploy the below configuration using a relative path.

```
apiVersion: v1
kind: Service
metadata:
  name: redis-slave
  labels:
    app: redis
    role: slave
    tier: backend
spec:
  ports:
  - port: 6379
  selector:
    app: redis
    role: slave
    tier: backend
```

1. Apply the Redis Slave Service from the following redis-slave-service.yaml file:

```
  kubectl apply -f ~/environment/guestbook-example/redis-slave-service.yaml
```

2. Query the list of Services to verify that the Redis slave service is running:

```
  kubectl get services
```

3. The response should be similar to this:

```
  NAME           TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
  kubernetes     ClusterIP   10.0.0.1     <none>        443/TCP    2m
  redis-master   ClusterIP   10.0.0.151   <none>        6379/TCP   1m
  redis-slave    ClusterIP   10.0.0.223   <none>        6379/TCP   6s
```
