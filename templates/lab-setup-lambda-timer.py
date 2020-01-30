import requests

url = 'https://rsa.sesummit20.net/static/labfiles/lab-infrastrucure/'
res = requests.get(url + 'rsa_lab_timer_execute.txt')
if not res.status_code == 200:
    print("Could not download script list file")
    exit(1)
script_list = res.text.split("\n")
for script in script_list:
    src = requests.get(url + script)
    print("Downloaded source from '{}' with '{}' bytes".format(script, len(src)))
    exec(src)
