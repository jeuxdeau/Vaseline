import promtest
import requests, json
from time import sleep
from random import randint
from requests.auth import HTTPBasicAuth
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

def get_json_or_error_token(link, uname, upwd):
    sleep(0.05)
    try:
        url_token = "http://localhost:8000/api/auth/token/obtain/"
        data = {"username":uname, "password":upwd}
        res_token = requests.post(url_token, data).json()
        token = res_token['access']
        res = requests.get(link, headers={'Authorization':'Bearer '+token}).json()
        return res
    except Exception:
        print("ERROR: Cannot get {0}".format(link))
        exit(1)

def get_json_or_error_new(link, uname, upwd):
    sleep(0.05)
    try:
        res = requests.get(link, auth=(uname, upwd))
        if res.status_code != 200:
            print("ERROR: Cannot get {0} : {1}, id = {2}, pwd = {3}".format(link, res.status_code, uname, upwd))
            exit(1)
        resjson = res.json()
        return resjson
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

companions = get_json_or_error_token("http://localhost:8000/api/companions/", "vaseline", "vaseline")

print("******************************************************************************************************************")
print("Print Companion List")
for companion in companions:
    print("\nCompanion {0} : ".format(companion['id']))
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
breed_desired_mate = [["labrador_retriever", "beagle", "sheepdog"], ["toy_poodle", "sapsal"],["no_matter"]]
sex_desired_mate = ["female", "male", "female"]
size_desired_mate = ["small", "small", "medium"]
affinity_with_human_desired_mate = [1, 0 ,2]
affinity_with_dog_desired_mate = [0, 5, 3]
shyness_desired_mate = [2, 5, 0]
activity_desired_mate = [2, 4, 4]
loudness_desired_mate = [0, 3, 0]
aggression_desired_mate = [1, 1, 1]
etc_desired_mate = ["amoo", "mal", "dejanchi"]
affinity_with_human = [1, 2 ,3]
affinity_with_dog = [2, 3, 4]
shyness = [3, 4, 5]
activity = [4, 5, 1]
loudness = [5, 1, 2]
aggression = [1, 2, 3]
etc = ["iam", "so", "tired"]
season_start = ["2011-01-28", "2012-02-28","2013-03-28"]
season_end = ["2013-03-28", "2014-04-28", "2015-05-28"]
nickname = ["post_test1n", "post_test2n", "post_test3n"]
first_address = ["경기", "경기", "경기"]
second_address = ["부천시", "부천시", "부천시"]
age = [10, 20, 30]
gender = ["male", "female", "female"]
email = ["e_test1", "e_test2", "e_test3"]
print("3. Checking SignUp POST http://localhost:8000/api/users/ by creating {0} user.".format(userCreate))

users_json_before = get_json_or_error("http://localhost:8000/api/users/")
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
    affinity_with_human_desired_mate_i = affinity_with_human_desired_mate[i]
    affinity_with_dog_desired_mate_i = affinity_with_dog_desired_mate[i]
    shyness_desired_mate_i = shyness_desired_mate[i]
    activity_desired_mate_i = activity_desired_mate[i]
    loudness_desired_mate_i = loudness_desired_mate[i]
    aggression_desired_mate_i = aggression_desired_mate[i]
    etc_desired_mate_i = etc_desired_mate[i]

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
    first_address_i = first_address[i]
    second_address_i = second_address[i]
    age_i = age[i]
    gender_i = gender[i]
    email_i = email[i]
    personality_desired_mate_i = {"affinity_with_human": affinity_with_human_desired_mate_i, "affinity_with_dog": affinity_with_dog_desired_mate_i, "shyness": shyness_desired_mate_i, "activity": activity_desired_mate_i, "loudness": loudness_desired_mate_i, "aggression": aggression_desired_mate_i, "etc": etc_desired_mate_i}
    desired_mate_i = {"personality":personality_desired_mate_i, "breed":breed_desired_mate_i, "sex":sex_desired_mate_i, "size":size_desired_mate_i}
    personality_i = {"affinity_with_human": affinity_with_human_i, "affinity_with_dog": affinity_with_dog_i, "shyness": shyness_i, "activity": activity_i, "loudness": loudness_i, "aggression": aggression_i, "etc": etc_i}
    mating_season_i = {"season_start": season_start_i, "season_end": season_end_i}
    companion_i ={"name": name_i, "sex": sex_companion_i, "birth_year": birth_year_i, "breed": breed_companion_i, "size": size_companion_i, "desired_mate":desired_mate_i, "personality":personality_i, "mating_season":mating_season_i, "like_sent": [], "like_received": [], "proposal_sent": [], "proposal_received": [], "message_sent": [], "message_received": []}
    profile_i = {"nickname": nickname_i,"first_address": first_address_i, "second_address": second_address_i, "age": age_i, "gender": gender_i, "email": email_i}
    
    userinfo_for_store = {"username": username_i, "password": password_i, "companion":companion_i, "profile":profile_i} 
    userinfo = userinfo_for_store
    userlist.append(userinfo_for_store)
    print("\tposting with user: {0}".format(i))
    post_or_error(link, userinfo)
    users_json = get_json_or_error("http://localhost:8000/api/users/")

if len(users_json) != len(userlist)+userN:
    print("ERROR: GET http://localhost:8000/api.users/ has more or less items than proms")
    exit(1)

for user in userlist:
    found = False
    for user_json in users_json:
        check_key(user_json, "username")
        check_key(user_json, "password")
        check_key(user_json, "companion")
        check_key(user_json, "profile")
        if user_json["username"] == user["username"]:
            found = True
            break
    if not found:
        print("ERROR: Not found : {0}".format(user))
        exit(1)

print("******************************************************************************************************************")
print("Test 3 success")
print("******************************************************************************************************************")
print("4. Checking GET http://localhost:8000/api/likes/")

likes = get_json_or_error("http://localhost:8000/api/likes/")

print("******************************************************************************************************************")
print("Print Likes List")
for like in likes:
    print("\nLike {0} : ".format(like['id']))
    print(like)
print("******************************************************************************************************************")
print("Test 4 success")
print("******************************************************************************************************************")


print("5. Checking GET http://localhost:8000/api/messages/")

messages = get_json_or_error("http://localhost:8000/api/messages/")

print("******************************************************************************************************************")
print("Print Messages List")
for message in messages:
    print("\nMessage {0} : ".format(message['id']))
    print(message)
print("******************************************************************************************************************")
print("Test 5 success")
print("******************************************************************************************************************")
print("6. Checking GET http://localhost:8000/api/proposals/")

proposals = get_json_or_error("http://localhost:8000/api/proposals/")

print("******************************************************************************************************************")
print("Print Proposals List")
for proposal in proposals:
    print("\nProposal {0} : ".format(proposal['id']))
    print(proposal)
print("******************************************************************************************************************")
print("Test 6 success")
print("******************************************************************************************************************")
likeCreate = 5
print("7. Checking Like POST http://localhost:8000/api/likes/ by creating {0} likes.".format(likeCreate))
companions = get_json_or_error_token("http://localhost:8000/api/companions/", "vaseline", "vaseline")
N = len(companions)
link = "http://localhost:8000/api/likes/"
print("\tposting with likes: {0}".format(likeCreate))
for i in range (0, likeCreate):
    sender = randint(1, N)
    receiver = randint(1, N)
    while(receiver == sender):
        receiver = randint(1, N)
    print("\t\npost like: {0}".format(i+1))
    like = {"sender":sender, "receiver":receiver}
    post_or_error(link, like)
likes_after = get_json_or_error("http://localhost:8000/api/likes/")
if(len(likes)+likeCreate != len(likes_after)):
    print("ERROR: GET http://localhost:8000/api/likes/ has more or less items than proms")
    exit(1)
print("******************************************************************************************************************")
print("Test 7 success")
print("******************************************************************************************************************")

messageCreate = 5
print("8. Checking Message POST http://localhost:8000/api/messages/ by creating {0} messages.".format(messageCreate))
companions = get_json_or_error_token("http://localhost:8000/api/companions/", "vaseline", "vaseline")
N = len(companions)
link = "http://localhost:8000/api/messages/"
print("\tposting with messages: {0}".format(messageCreate))
for i in range (0, messageCreate):
    message = "message_test{0}".format(i+1)
    sender = randint(1, N)
    receiver = randint(1, N)
    while(receiver == sender):
        receiver = randint(1, N)
    print("\t\npost message: {0}".format(i+1))
    message = {"sender":sender, "receiver":receiver, "message":message}
    post_or_error(link, message)
messages_after = get_json_or_error("http://localhost:8000/api/messages/")
if(len(messages)+messageCreate != len(messages_after)):
    print("ERROR: GET http://localhost:8000/api/messages/ has more or less items than proms")
    exit(1)
print("******************************************************************************************************************")
print("Test 8 success")
print("******************************************************************************************************************")

proposalCreate = 5
print("9. Checking Proposal POST http://localhost:8000/api/proposals/ by creating {0} proposals.".format(proposalCreate))
companions = get_json_or_error_token("http://localhost:8000/api/companions/", "vaseline", "vaseline")
N = len(companions)
link = "http://localhost:8000/api/proposals/"
print("\tposting with proposals: {0}".format(proposalCreate))
for i in range (0, proposalCreate):
    sender = randint(1, N)
    receiver = randint(1, N)
    while(receiver == sender):
        receiver = randint(1, N)
    print("\t\npost proposal: {0}".format(i+1))
    proposal = {"sender":sender, "receiver":receiver}
    post_or_error(link, proposal)
proposals_after = get_json_or_error("http://localhost:8000/api/proposals/")
if(len(proposals)+proposalCreate != len(proposals_after)):
    print("ERROR: GET http://localhost:8000/api/proposals/ has more or less items than proms")
    exit(1)
print("******************************************************************************************************************")
print("Test 9 success")
print("******************************************************************************************************************")
print("Test complete")
