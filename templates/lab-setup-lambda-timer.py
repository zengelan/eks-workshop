#################
#### NOTE
#### this is just for testing and debugging, once any changes were made, copy&paste the code into the yaml file
#### that will be used as cloud formation template to deploy this function
#### file name: lab-setup-lambda-timer.yaml
#### it is executed as inline code
#################
import certifi
import urllib3
import os

u = os.environ.get('URL')
h = urllib3.PoolManager(cert_reqs='CERT_REQUIRED',ca_certs=certifi.where())
r = h.request('GET', u + os.environ.get('SCRIPTLIST'))
if not r.status == 200:
    print("Could not download script list file")
    exit(1)
sl = r.data.decode('utf-8').split("\n")
for s in sl:
    print("Downloading source from '{}'".format(s))
    try:
        src = h.request('GET', u + s).data.decode('utf-8')
    except Exception as e:
        print("Could not download file ", e)
        continue
    print("Downloaded source from '{}' with '{}' bytes".format(s, len(src)))
    print("Executing script in file '{}'".format(s))
    try:
        exec(src)
    except Exception as e:
        print("Could not execute script in file ", e)
        continue
    print("Fininshed executing script in file '{}'".format(s))
