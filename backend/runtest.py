import promtest
import requests, json
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

def post_or_error(link, data):
    sleep(0.05)
    try:
        print(data)
        res = requests.post(link, json=data)
        if res.status_code != 201:
            print("ERROR: Cannot post {0}".format(link))
            exit(1)
    except Exception:
        print("ERROR: Cannot post {0}".format(link))
        exit(1)

def check_key(user_json, key):
    if key not in user_json:
        print("{0} not in {1}.".format((key, user_json)))
        exit(1)

userN = 10
user_pairs = promtest.create_users(userN)
print("******************************************************************************************************************")
print("1. Getting users list (Checking GET http://localhost:8000/api/users/).")
users_json = get_json_or_error("http://localhost:8000/api/users/")
users = [ (uname, upwd, get_id(users_json, uname)) for (uname, upwd) in user_pairs ]
print("******************************************************************************************************************")
print("Print User List")
for user in users:
    print(user)

print("******************************************************************************************************************")
print("Test 1 success")
print("******************************************************************************************************************")

print("2. Checking GET http://localhost:8000/api/companions/")
companions = get_json_or_error("http://localhost:8000/api/companions/")
print("******************************************************************************************************************")
print("Print User List")
for companion in companions:
    print(companion)
print("******************************************************************************************************************")
print("Test 2 success")
print("******************************************************************************************************************")

link = "http://localhost:8000/api/users/"
userlist = []
userCreate = 3

username = ["post_test_1", "post_test_2", "post_test_3"]
password = ["post_test_1_pw", "post_test_2_pw", "post_test_3_pw"]
name = ["post_test1c", "post_test2c", "post_test3c"]
sex_companion = ["male", "female", "male"]
birth_year = [1995, 1996, 1997]
breed_companion = ["labrador_retriever", "beagle", "sheepdog"]
size_companion = ["small", "medium", "large"]
breed_desired_mate = ["mix", "etc", "sapsal"]
sex_desired_mate = ["female", "male", "female"]
size_desired_mate = ["small", "small", "medium"]
affinity_with_human = [1, 2 ,3]
affinity_with_dog = [2, 3, 4]
shyness = [3, 4, 5]
activity = [4, 5, 1]
loudness = [5, 1, 2]
aggression = [1, 2, 3]
etc = ["iam", "so", "tired"]
season_start = ["2011-01-28T08:18:36.959885Z", "2012-02-28T08:18:36.959885Z","2013-03-28T08:18:36.959885Z"]
season_end = ["2013-03-28T08:18:36.959885Z", "2014-04-28T08:18:36.959885Z", "2015-05-28T08:18:36.959885Z"]
nickname = ["post_test1n", "post_test2n", "post_test3n"]
postal_code = [100, 200, 300]
rough_address = ["r_test1", "r_test2", "r_test3"]
detailed_address = ["d_test1", "d_test2", "d_test3"]
age = [10, 20, 30]
gender = ["male", "female", "female"]
email = ["e_test1", "e_test2", "e_test3"]
print("3. Checking SignUp POST http://localhost:8000/api/users/ by creating {0} user.".format(userCreate))
for i in range(0, userCreate):
    username_i = username[i]
    password_i = password[i]
    name_i = name[i]
    sex_companion_i = sex_companion[i]
    birth_year_i =birth_year[i]
    breed_companion_i = breed_companion[i]
    size_companion_i = size_companion[i]
    breed_desired_mate_i = breed_desired_mate[i]
    sex_desired_mate_i = sex_desired_mate[i]
    size_desired_mate_i = size_desired_mate[i]
    affinity_with_human_i = affinity_with_human[i]
    affinity_with_dog_i = affinity_with_dog[i]
    shyness_i = shyness[i]
    activity_i = activity[i]
    loudness_i = loudness[i]
    aggression_i = aggression[i]
    etc_i = etc[i]
    season_start_i = season_start[i]
    season_end_i = season_end[i]
    nickname_i = nickname[i]
    postal_code_i = postal_code[i]
    rough_address_i = rough_address[i]
    detailed_address_i = detailed_address[i]
    age_i = age[i]
    gender_i = gender[i]
    email_i = email[i]
    
    desired_mate_i = {"breed":breed_desired_mate_i, "sex":sex_desired_mate_i, "size":size_desired_mate_i}
    personality_i = {"affinity_with_human": affinity_with_human_i, "affinity_with_dog": affinity_with_dog_i, "shyness": shyness_i, "activity": activity_i, "loudness": loudness_i, "aggression": aggression_i, "etc": etc_i}
    mating_season_i = {"season_start": season_start_i, "season_end": season_end_i}
    companion_i ={"name": name_i, "sex": sex_companion_i, "birth_year": birth_year_i, "breed": breed_companion_i, "size": size_companion_i, "desired_mate":desired_mate_i, "personality":personality_i, "mating_season":mating_season_i, "like_sent": [], "like_received": [], "proposal_sent": [], "proposal_received": [], "message_sent": [], "message_received": []}
    profile_i = {"nickname": nickname_i, "postal_code": postal_code_i, "rough_address": rough_address_i, "detailed_address": detailed_address_i, "age": age_i, "gender": gender_i, "email": email_i}
    
    userinfo_for_store = {"username": username_i, "password": password_i, "companion":companion_i, "profile":profile_i} 
    userinfo = userinfo_for_store
    userlist.append(userinfo_for_store)
    print("\tposting with user: {0}".format(i))
    post_or_error(link, userinfo)
users_json = get_json_or_error("http://localhost:8000/api/users/")
if len(users_json) != len(userlist)+userN-1:
    print("ERROR: GET http://localhost:8000/api.users/ has more or less items than proms")
    exit(1)

for user in userlist:
    found = False
    for user_json in users_json:
        check_key(user_json, "username")
        check_key(user_json, "password")
        check_key(user_json, "companion")
        check_key(user_json, "profile")
        if user_json["username"] == user["username"] and user_json["password"] == user["password"]:
            found = True
            break
    if not found:
        print("ERROR: Not found : {0}".format(user))
        exit(1)

print("******************************************************************************************************************")
print("Test 3 success")
print("******************************************************************************************************************")

