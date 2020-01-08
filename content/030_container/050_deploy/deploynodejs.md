---
title: "Deploy Redis Master Service"
date: 2020-01-08
weight: 10
---

The guestbook applications needs to communicate to the Redis master to write its data. You need to apply a Service to proxy the traffic to the Redis master Pod. A Service defines a policy to access the Pods.

```
apiVersion: v1
kind: Service
metadata:
  name: redis-master
  labels:
    app: redis
    role: master
    tier: backend
spec:
  ports:
  - port: 6379
    targetPort: 6379
  selector:
    app: redis
    role: master
    tier: backend
```
1. Apply the Redis Master Service from the following redis-master-service.yaml file:

```
  kubectl apply -f <Will to provide relative URL>/application/guestbook/redis-master-service.yaml
```

2. Query the list of Services to verify that the Redis Master Service is running:

```
  kubectl get service
```

3. The response should be similar to this:

```
  NAME           TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
  kubernetes     ClusterIP   10.0.0.1     <none>        443/TCP    1m
  redis-master   ClusterIP   10.0.0.151   <none>        6379/TCP   8s
```

<b>Note</b>: This manifest file creates a Service named redis-master with a set of labels that match the labels previously defined, so the Service routes network traffic to the Redis master Pod.
