---
title: "Access the Dashboard"
date: 2018-08-07T08:30:11-07:00
weight: 20
tags:
  - beginner
---

Since the dashboard is deployed to our private cluster, we need to access it via a proxy.
Kube-proxy is available to proxy our requests to the dashboard service.  In your
workspace, run the following command:
```
kubectl proxy --port=8080 --address='0.0.0.0' --disable-filter=true &
```

This will start the proxy, listen on port 8080, listen on all interfaces, and
will disable the filtering of non-localhost requests.

This command will continue to run in the background of the current terminal's session.

{{% notice warning %}}
We are disabling request filtering, a security feature that guards against XSRF attacks.
This isn't recommended for a production environment, but is useful for our dev environment.
{{% /notice %}}


Now we can access the Kubernetes Dashboard

1. In your Cloud9 environment, click **Tools / Preview / Preview Running Application**
1. Scroll to **the end of the URL** and append the following text, then **hit return** to load the new URL

```
/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```
The Dashboard login page should now show up

{{% notice tip %}}
You might want to open the Kubernetes Dashboard in a new browser tab or window for better visibility. Click the following button to show the Kubernetes Dashboard in a new tab/window:
![k8sdashaccess](/images/mfe/k8sdashaccess.jpg?classes=border,shadow)
{{% /notice %}}

Now lets's get the authentication done

Open a New Terminal Tab and enter
```
aws eks get-token --cluster-name mcafee-workshop-eksctl | jq -r '.status.token'
```

Copy the output of this command and then click the radio button next to
*Token* then in the text field below paste the output from the last command.

![Token page](/images/dashboard-connect.png?classes=border,shadow)


Then press *Sign In*.

***

<!--  something doesn't work with this alternative method, so leaving it out. one option is good enough
{{% expand "Expand here to see another option to get a token to authenticate to the dashboard" %}}

Run the command ``kubectl  get secrets --all-namespaces`` to identify the accounts, then copy the name of the token starting with `kubernetes-dashboard-token-`
and run  the command ````
```bash
kubectl  get secrets --all-namespaces
kubectl --namespace kubernetes-dashboard describe secrets/kubernetes-dashboard-token-...
```
![alttoken.png](/images/mfe/alttoken.png?classes=border,shadow)

from the output copy the token and paste it into the dashboard login page

{{% /expand %}}

***

-->

If you want to see the dashboard in a full tab, click the **Pop Out** button, like below:
![popout](/images/popout.png?classes=border,shadow)



