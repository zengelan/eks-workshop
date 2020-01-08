---
title: "Access the Dashboard"
date: 2018-08-07T08:30:11-07:00
weight: 30
tags:
  - beginner
  - mfearchitects
  - stuppiello
---

Now we can access the Kubernetes Dashboard

1. In your Cloud9 environment, click **Tools / Preview / Preview Running Application**
1. Scroll to **the end of the URL** and append:

```
/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

Click the following button to show the Kubernetes Dashboard in a new tab/window:
![k8sdashaccess](/images/mfe/k8sdashaccess.jpg?classes=border,shadow)

Open a New Terminal Tab  and enter
```
aws eks get-token --cluster-name ${CODEWORD}-eksctl | jq -r '.status.token'
```

Copy the output of this command and then click the radio button next to
*Token* then in the text field below paste the output from the last command.

![Token page](/images/dashboard-connect.png?classes=border,shadow)

Then press *Sign In*.

If you want to see the dashboard in a full tab, click the **Pop Out** button, like below:
![popout](/images/popout.png?classes=border,shadow)

If you are not seeing the Memory and CPU utilization and your dashboard looks like this:
then please make sure to go through the section  [Deploy the Metrics Server](/030_container/040_dashboard/metricsserver) to deploy the metrics server.
![dashnometrics](/images/mfe/dashnometrics.jpg?classes=border,shadow)

