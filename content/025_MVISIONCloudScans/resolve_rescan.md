---
title: "Resolve Incidents and Rescan"
date: 2020-02-24
weight: 30
---

Now let's fix some of these issues! First, log into your AWS tenant and head to the S3 service. Within here, see if you can successfully remove public access (unrestricted access) and enable bucket encryption. A hint screenshot is below.

![AR](/images/mvcscan/cspmresolve06.png?classes=border,shadow)

To resolve the Pod Security Policy issue we reviewed earlier, we need to put on our DevOps hat and head to Cloud9. Pull up the Cloud 9 terminal and run the following command.

```
kubectl get psp
```

You should get an output similar to the following:

![AR](/images/mvcscan/cspmresolve01.png?classes=border,shadow)


Now run:

```
kubectl edit psp
```

This will pull up the following screen, allowing you to edit the file with Vi commands. Here is a quick cheatsheet on Vi commands, but further information is available here:
insert Vi page

Press the Insert key on your keyboard to modify. Once modified, press the Insert key to stop modifying.

![AR](/images/mvcscan/cspmresolve02.png?classes=border,shadow)

Here is what the modification should look like.

![AR](/images/mvcscan/cspmresolve03.png?classes=border,shadow)

![AR](/images/mvcscan/cspmresolve04.png?classes=border,shadow)

Make sure you no longer see --- INSERT --- at the bottom of the screen, which lets you know you are no longer modifying.

Then press the following keys in order to issue a command to write and quit:

1. :
2. w
3. q

Now that we've updated our bucket and our PSP policy, let's kick off another CSPM scan

![AR](/images/mvcscan/cspmresolve05.png?classes=border,shadow)

![cspm2](/images/mvcscan/cspmscan02.png?classes=border,shadow)

![dlp8](/images/mvcscan/dlpscan08.png?classes=border,shadow)

![cspm2](/images/mvcscan/cspmrescan01.png?classes=border,shadow)

![dlp8](/images/mvcscan/cspmrescan01.png?classes=border,shadow)
