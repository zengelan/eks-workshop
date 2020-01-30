def download_and_exec(url=None):
    if not url:
        url='https://'
    exec(open("filename.py").read())