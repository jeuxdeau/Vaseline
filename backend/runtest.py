import promtest
import requests
from time import sleep
from random import randint

def get_id(users_json, uname):
    for user_json in users_json:
        if user_json["username"] == uname:
            return user_json["id"]
    print('Cannot find user {0}! Did you run "python3 manage.py shell < inittest.py"?'.format(uname))
    exit(1)

def get_json_or_error(link):
    sleep(0.05)
    try:
        res = requests.get(link).json()
        return res
    except Exception:
        print("ERROR: Cannot get {0}".format(link))
        exit(1)

userN = 10
user_pairs = promtest.create_users(userN)
# get id of each user
print("1. Getting users list.")
users_json = get_json_or_error("http://localhost:8000/api/users/")
users = [ (uname, upwd, get_id(users_json, uname)) for (uname, upwd) in user_pairs ]
print(users)

print("******************************************************************************************************************")
print("Test 1 success")

