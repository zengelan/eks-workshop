---
title: "Useful Kubectl Commands"
date: 2020-01-08
weight: 60
---

The Kubernetes Controller provides a lot of useful commands. You can bookmark this <a href="https://kubernetes.io/docs/reference/kubectl/cheatsheet/">kubectl Cheat Sheet</a> for common uses of many of the command parameters. 

You can explore many of these commands using the help flag:
```
  kubectl -h
```

1. Review the deployments by type and observe the status of each
```
   kubectl get deployments
```
```
   NAME           READY   UP-TO-DATE   AVAILABLE   AGE
   frontend       1/1     1            1           106m
   redis-master   1/1     1            1           2d4h
   redis-slave    2/2     2            2           2d4h
```
2. Scale out the frontend web services from 1 to 10:

```
   kubectl scale deployment frontend --replicas=10
```

3. Check the deployments after the change to see the number of frontend web services available and ready:
```
   kubectl get deployments
```

4. You should see something like this:

```
   NAME           READY   UP-TO-DATE   AVAILABLE   AGE
   frontend       10/10   10           10          106m
   redis-master   1/1     1            1           2d4h
   redis-slave    2/2     2            2           2d4h
```
5. Scale the frontend web services back to inital value of 1:

```
   kubectl scale deployment frontend --replicas=1
```

6. To get more details about a given resource or resources, you can use the kubectl describe command:

```
   kubectl describe pods
```   
7. Alternatively, you can be more specific by using your specific pod name (use kubectl get pods to get pod names)
```
   kubectl describe pod frontend-59d9d8c865-72tln
```   
8. You can use the above command to get details on pods, nodes, and deployments --which all provide valuable information



9. You can leverage the kubectl log command to get a direct log stream for troubleshooting.

```
   kubectl log -f frontend-59d9d8c865-72tln
```   
