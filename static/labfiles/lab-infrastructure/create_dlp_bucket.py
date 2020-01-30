import boto3
import logging
import urllib3
import os

logging.basicConfig(level=logging.INFO)
l = logging.getLogger()


def create_bucket(bucket_name, region='us-east-2'):
    try:
        s3_client = boto3.client('s3', region_name=region)
        location = {'LocationConstraint': region}
        s3_client.create_bucket(Bucket=bucket_name,
                                CreateBucketConfiguration=location)
    except Exception as e:
        l.exception(e)
        return False
    return True


def bucket_exists(bucket_name, region='us-east-2'):
    s3 = boto3.client('s3', region_name=region)
    res = s3.list_buckets()
    for b in res.get('Buckets'):
        if b.get('Name').lower() == bucket_name.lower():
            return True
    return False


def put_sample_data(bname):
    h = urllib3.PoolManager(cert_reqs='CERT_REQUIRED', ca_certs=os.environ.get('CACERTS'))
    u = 'https://rsa.sesummit20.net/labfiles/container-lab/dlp-files/'
    if os.environ.get('OS', "") == 'Windows_NT':
        h = urllib3.PoolManager()  ### running on windows
    files = ['10CCNsinhere.docx', '50CCNsinhere.docx', 'CustomersForProcessing_100_records.xls', 'Autopsy.docx',
         'GeneralSurgery.pdf', 'dbbackup_dump.csv']
    for f in files:
        r = h.request('GET', u + f)
        if not r.status == 200:
            l.info("Could not download file")
            continue
        bfile = boto3.resource('s3').Object(bname, f)
        bfile.put(Body=r.data)
        l.info("Added file '{}' with {} bytes to the S3 bucket '{}'".format(f,len(r.data),bname))


# don't use main here as we are invoking from exec(call)
seed = 'rsa2020'
whoami = boto3.session.Session().client('sts').get_caller_identity()
l.info("Logged in as {}".format(whoami))
bname = "mcafee-lab-bucket-{}-datastore-{}".format(whoami.get('Account'), seed)
l.info("Checking if we have a bucket with name: {}".format(bname))
if not bucket_exists(bname):
    l.info("Creating a bucket with name '{}'".format(bname))
    res = create_bucket(bname)
l.info("Downloading sample data and adding it to the bucket")
res = put_sample_data(bname)
l.info("Done with creating the DLP scan bucket")
