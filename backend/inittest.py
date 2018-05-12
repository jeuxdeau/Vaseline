from django.contrib.auth.models import User
import promtest
import json
import requests

# First of all, it initializes debt information.

for i in range(1,10):
    username = "test{0}".format(i)
    try:
        user = User.objects.get(username = username)
        user.delete()
        print("\tDeleted user {0}".format(username))
    except User.DoesNotExist:
        # no problem.
        continue

print("---------------")
for (username, pwd) in promtest.create_users(10):
    user = User.objects.create_user(username, password=pwd)
    user.save()
    print("\tCreated user {0}".format(username))

print("Initialization Successful!")
