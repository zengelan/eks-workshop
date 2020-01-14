---
title: "Frontend Web ELB Setup"
date: 2020-01-14
weight: 40
---

Now that the Guestbook Applicaion has been deployed to your Kubernetes cluster, we can configure the frontend web server to run as a cluster.  Configuring cluster mode deployment, as opposed to nodeport deployment, will also generate an externally accessible DNS entry which can be used to connect to the frontend web services.

You'll need to configure the frontend-service.yaml file located within your local repository

```
vi ~/environment/guestbook-example/frontend-service.yaml
```

Follow the instructions within the comment lines within the file.  This includes commenting out the line <b>Type: NodePort</b> and uncommenting the line <b>Type: LoadBalancer</b>.  The file should now look like this before saving:

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
  #type: NodePort
  # if your cluster supports it, uncomment the following to automatically create
  # an external load-balanced IP for the frontend service.
  type: LoadBalancer
  ports:
  - port: 80
  selector:
    app: guestbook
    tier: frontend                     
```

Since the frontend web service had already been deployed, you can kill the existing service and redploy the newly modified service that now includes the LoadBalancer. The following commands will execute these steps:
```
kubectl delete service -l app=guestbook
kubectl apply -f ~/environment/guestbook-example/frontend-service.yaml

```

Now that we have a running service that is `type: LoadBalancer` we need to find
the ELB's address.  We can do this by using the `get services` operation of kubectl:

```
kubectl get service frontend
```
This should allow you to see the Public DNS name, allowing you to connect to the frontend web services via browser.
It should look something like this:<font color=red>It may take a few minutes before the External URL appears</font>
```
sesummit20:~/environment $ kubectl get service frontend
NAME       TYPE           CLUSTER-IP      EXTERNAL-IP                                                               PORT(S)        AGE
frontend   LoadBalancer   10.100.218.79   a0340ceb8370411ea812f122fedde54b-1329106542.us-east-1.elb.amazonaws.com   80:32087/TCP   28m
```

In some cases the field isn't wide enough to show the FQDN of the ELB. We can adjust the
output format with this command:
```
kubectl get service -o wide frontend
```
It should look something like this:
```
sesummit20:~/environment $ kubectl get service -o wide frontend
NAME       TYPE           CLUSTER-IP      EXTERNAL-IP                                                               PORT(S)        AGE   SELECTOR
frontend   LoadBalancer   10.100.218.79   a0340ceb8370411ea812f122fedde54b-1329106542.us-east-1.elb.amazonaws.com   80:32087/TCP   28m   app=guestbook,tier=frontend
```

If we wanted to use the data programatically, we can also output via json. This is
an example of how we might be able to make use of json output:
```
ELB=$(kubectl get service frontend -o json | jq -r '.status.loadBalancer.ingress[].hostname')

curl -m3 -v $ELB
```
{{% notice tip %}}
It can take several minutes for the ELB to become healthy and start passing traffic to the frontend pods.
{{% /notice %}}

You should also be able to copy/paste the loadBalancer hostname into your browser and see the application running.
Keep this tab open while we scale the services up on the next page.
