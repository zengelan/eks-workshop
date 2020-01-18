---
title: "Scale the Frontend Services"
date: 2020-01-08
weight: 50
---

Scaling up or down is easy because your servers are defined as a Service that uses a Deployment controller.

1. Query the existing number of Pods by running the following command:
```
  kubtcl get pods
```  

2. Run the following command to scale up the number of frontend Pods:

```
  kubectl scale deployment frontend --replicas=10
```

3. Query the list of Pods to verify the number of frontend Pods running:

```
  kubectl get pods
```

4. The response should look similar to this:

```
  
  NAME                           READY   STATUS    RESTARTS   AGE
  frontend-59d9d8c865-72tln      1/1     Running   0          81m
  frontend-59d9d8c865-8ndfg      1/1     Running   0          51m
  frontend-59d9d8c865-9tz7s      1/1     Running   0          8s
  frontend-59d9d8c865-c6dxs      1/1     Running   0          8s
  frontend-59d9d8c865-rgbrl      1/1     Running   0          8s
  frontend-59d9d8c865-svb7d      1/1     Running   0          8s
  frontend-59d9d8c865-tptzq      1/1     Running   0          8s
  frontend-59d9d8c865-tswlf      1/1     Running   0          8s
  frontend-59d9d8c865-wbjmv      1/1     Running   0          8s
  frontend-59d9d8c865-x6f75      1/1     Running   0          8s
  redis-master-596696dd4-2hfmp   1/1     Running   0          2d4h
  redis-slave-6bb9896d48-2wbsj   1/1     Running   0          2d4h
  redis-slave-6bb9896d48-8zl2r   1/1     Running   0          2d4h
```  

5. Browse to Guestbook application using the DNS name of your Load Balancer.  Continue refreshing the page to witness the values change for the pod running the webserver and the instance that the pod runs on. This demonstrates the dynamic nature of the Web server that is being connected to, as well as the EC2 server pool that spans across multiple Availability Zones (AZ).
In the guestbook perform some operations and reloads and see how the POD name and instance ID change between requests. 
![microservices](/images/mfe/guestbook.png?classes=border,shadow)

6. Once you've completed step 5, you can scale in the number of pods to the inital value of 1.

```
  kubectl scale deployment frontend --replicas=1
```  
