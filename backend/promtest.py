from random import randint

def create_users(N):
    ls = []
    for i in range(1, N):
        ls.append(("user{0}".format(i+1), "user{0}passwd".format(i+1)))
    return ls

def create_personality(N):
    ls = []
    for i in range(1, N):
        ls.append((randint(1,5), randint(1,5), randint(1,5), randint(1,5), randint(1,5), randint(1,5), "etc{0}".format(i)))
    return ls

def create_personality_desired_mate(N):
    ls = []
    for i in range(1, N):
        ls.append((randint(0,5), randint(0,5), randint(0,5), randint(0,5), randint(0,5), randint(0,5), "etc{0}".format(i)))
    return ls

def create_mating_season(N):
    ls = []
    for i in range(1, N):
        ls.append(("2018-05-2{0}".format(randint(1,9)), "2018-06-0{0}".format(randint(1,9))))
    return ls

def create_companions(N):
    ls = []
    for i in range(1, N):
        ls.append((i, "companion{0}".format(i), randint(1995, 2018)))
    return ls

def create_profiles(N):
    ls = []
    for i in range(1, N):
        ls.append((i, "nickname{0}".format(i), "first_address{0}".format(i), "second_address".format(i), randint(10,30), "email".format(i)))
    return ls

def create_likes(N):
    ls = []
    for i in range(1, N):
        ls.append((i, randint(1, N-1)))
    return ls

def create_proposals(N):
    ls = []
    for i in range(1, N):
        ls.append((i, randint(1, N-1), False))
    return ls

def create_messages(N):
    ls = []
    for i in range(1, N):
        ls.append((i, randint(1, N-1), "message{0}".format(i), "2018-05-12T08:52:3{0}Z".format(randint(1,9))))
    return ls
