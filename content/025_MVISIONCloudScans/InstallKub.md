---
title: "Install Kubernetes Tools"
date: 2020-02-24
weight: 5
---

```
sudo curl --silent --location -o /usr/local/bin/kubectl https://amazon-eks.s3-us-west-2.amazonaws.com/1.14.6/2019-08-22/bin/linux/amd64/kubectl


sudo chmod +x /usr/local/bin/kubectl
```


```
sudo yum -y install jq gettext bash-completion
```

```
for command in kubectl jq envsubst
  do
    which $command &>/dev/null && echo "$command in path" || echo "$command NOT FOUND"
  done
```

```
kubectl completion bash >>  ~/.bash_completion
. /etc/profile.d/bash_completion.sh
. ~/.bash_completion
```


ENTER TEMP CREDS

```
aws eks update-kubeconfig --name ‘mcafee-workshop-eksctl’
```

