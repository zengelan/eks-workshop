#################
#### NOTE
#### this is just for testing and debugging, once any changes were made, copy&paste the code into the yaml file
#### that will be used as cloud formation template to deploy this function
#### file name: lab-setup-lambda-timer.yaml
#### it is executed as inline code
#################
import urllib3
import os
import logging
import boto3

l = logging.getLogger()
l.setLevel(logging.INFO)
def handler(e,c):
    u = os.environ.get('URL')
    h = urllib3.PoolManager(cert_reqs='CERT_REQUIRED', ca_certs=os.environ.get('CACERTS'))
    h = urllib3.PoolManager() ### TODO: delete me in YAML file
    r = h.request('GET', u + os.environ.get('SCRIPTLIST'))
    if not r.status == 200:
        l.info("Could not download script list file")
        exit(1)
    sl = r.data.decode('utf-8').split("\n")
    for s in sl:
        l.info("Downloading source from '{}'".format(s))
        try:
            src = h.request('GET', u + s).data.decode('utf-8')
        except Exception as e:
            l.exception("Could not download file")
            continue
        l.info("Downloaded source from '{}' with '{}' bytes".format(s, len(src)))
        l.info("Executing script in file '{}'".format(s))
        try:
            exec(src, globals(), locals())
        except Exception as e:
            l.exception("Could not execute script in file")
            continue
        l.info("Fininshed executing script in file '{}'".format(s))
