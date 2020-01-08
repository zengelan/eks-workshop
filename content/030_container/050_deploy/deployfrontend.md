---
title: "Deploy Web Frontend Service"
date: 2020-01-08
weight: 30
---

The redis-slave and redis-master Services you applied are only accessible within the container cluster because the default type for a Service is ClusterIP. ClusterIP provides a single IP address for the set of Pods the Service is pointing to. This IP address is accessible only within the cluster.

If you want guests to be able to access your guestbook, you must configure the frontend Service to be externally visible, so a client can request the Service from outside the container cluster. For the purposes of this training, you will be manually configuring an Elastic Load Balancer (ELB) using the AWS Console. Though this can all be done progamatically using code, it will be good hands on experience to configure the ELB and Target Group in this training session. The steps to do this will follow in an upcoming section within this exercise.

This is web-frontend-service.yaml for our Guestbook application. There is no need to copy this content since it is included in the repo clone in your environment. Step 1 will deploy the below configuration using a relative path.

```
apiVersion: v1
kind: Service
metadata:
  name: frontend
  labels:
    app: guestbook
    tier: frontend
spec:
  # comment or delete the following line if you want to use a LoadBalancer
  type: NodePort 
  # if your cluster supports it, uncomment the following to automatically create
  # an external load-balanced IP for the frontend service.
  # type: LoadBalancer
  ports:
  - port: 80
  selector:
    app: guestbook
    tier: frontend
```

1. Apply the frontend Service from the frontend-service.yaml file:

```
  kubectl apply -f <Will to provide relative path>/application/guestbook/frontend-service.yaml
```

2. Query the list of Services to verify that the frontend Service is running:

```
  kubectl get services
```

3. The response should be similar to this:

```
  NAME           TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)        AGE
  frontend       NodePort    10.0.0.112   <none>       80:31323/TCP   6s
  kubernetes     ClusterIP   10.0.0.1     <none>        443/TCP        4m
  redis-master   ClusterIP   10.0.0.151   <none>        6379/TCP       2m
  redis-slave    ClusterIP   10.0.0.223   <none>        6379/TCP       1m
```  
