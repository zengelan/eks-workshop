---
title: "Cleanup the applications"
date: 2020-01-08
weight: 90
---

Deleting the Deployments and Services also deletes any running Pods. Use labels to delete multiple resources with one command.

Run the following commands to delete all Pods, Deployments, and Services.
```
  kubectl delete deployment redis-slave
  kubectl delete deployment redis-master
  kubectl delete service -l app=redis
  kubectl delete deployment -l app=guestbook
  kubectl delete service -l app=guestbook

```

The responses should be:

```
  deployment.apps "redis-master" deleted
  deployment.apps "redis-slave" deleted
  service "redis-master" deleted
  service "redis-slave" deleted
  deployment.apps "frontend" deleted    
  service "frontend" deleted
```

You can confirm that the services have been deleted by running:
```
  kubectl get pods
```
```
  kubectl get deployments
```
```
  kubectl get services
```

Don't worry if something is not deleted correctly at this point. We are going to delete the whole EKS cluster after the lab anyway.

Thank You!  This concludes the Container Lab for the Guestbook Application.
