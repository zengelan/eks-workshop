import boto3

def enable_eks_logging(eks_name, eks_region):
    client = boto3.session.Session(region_name=eks_region).client('eks')
    response = client.update_cluster_config(name=eks_name,
                                            logging={'clusterLogging': [
                                                {'types': ['api', 'audit', 'authenticator', 'controllerManager',
                                                           'scheduler'], 'enabled': True}]
                                            }
                                            )
    print("repsonse: {}".format(response))
    return

def get_all_eks():
    eks_all = dict()
    for region in ['us-east-1', 'us-east-2', 'us-west-2']:
        eks = boto3.session.Session(region_name=region).client('eks')
        paginator = eks.get_paginator('list_clusters')
        for res in paginator.paginate():
            for cluster in res.get('clusters'):
                rng = eks.list_nodegroups(clusterName=cluster)
                rin = eks.describe_cluster(name=cluster)
                rdetail = rin.get('cluster')
                rdetail["region"] = region
                rdetail["nodegroups"] = rng.get('nodegroups', 'n/a')
                rdetail["logging"] = rdetail.get('logging').get('clusterLogging')[0].get('enabled')
                key = "{}/{}".format(region, cluster)
                eks_all[key] = rdetail
    return eks_all

if __name__ == '__main__':
    whoami = boto3.session.Session().client('sts').get_caller_identity()
    print("Logged in as {}".format(whoami))
    # 1 get all eks clusters
    print("Loading all EKS clusters")
    all_eks = get_all_eks()
    print("Found {} clusters with names: {}".format(len(all_eks.keys()), all_eks.items()))
    for key, cluster in all_eks.items():
        if not cluster.get("logging"):
            enable_eks_logging(cluster.get("name"), cluster.get("region"))
            print("Enabled logging on cluster {}".format(key))
    print("Done")