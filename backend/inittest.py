from django.contrib.auth.models import User
from companions.models import DesiredMate, Personality, PersonalityDesiredMate, MatingSeason, Companion, Profile, Like, Proposal, Message
import promtest
import json
import requests

print("MAKE SUPERUSER")
superuser = User.objects.create_user('vaseline', password='vaseline')
superuser.is_superuser = True
superuser.is_staff=True
superuser.save()
print("superuser's username : vaseline")
print("superuser's password : vaseline")
N=10
print("---------------")
for (username, pwd) in promtest.create_users(N):
    print("\t{0}'s password : ".format(username)+pwd)
    user = User.objects.create_user(username, password=pwd)
    user.save()
    print("\tCreated user {0}".format(username))

for (affinity_with_human, affinity_with_dog, shyness, activity, loudness, aggression, etc) in promtest.create_personality(2*N+1):
    personality = Personality.objects.create(affinity_with_human=affinity_with_human, affinity_with_dog=affinity_with_dog, shyness=shyness, activity=activity, loudness=loudness, aggression=aggression, etc=etc)
    print("\tCreated Personality {0}".format(personality))

for (affinity_with_human, affinity_with_dog, shyness, activity, loudness, aggression, etc) in promtest.create_personality_desired_mate(2*N+1):
    personality = PersonalityDesiredMate.objects.create(affinity_with_human=affinity_with_human, affinity_with_dog=affinity_with_dog, shyness=shyness, activity=activity, loudness=loudness, aggression=aggression, etc=etc)
    print("\tCreated PersonalityDesiredMate {0}".format(personality))

for i in range(1, 2*N+1):
    personality = PersonalityDesiredMate.objects.get(pk=i)
    desired_mate = DesiredMate.objects.create(personality=personality)
    print("\tCreated DesiredMate {0}".format(desired_mate))

for (season_start, season_end) in promtest.create_mating_season(2*N+1):
    mating_season = MatingSeason.objects.create(season_start=season_start, season_end=season_end)
    print("\tCreated MatingSeason {0}".format(mating_season))

for (i, name, birth_year) in promtest.create_companions(2*N+1):
    print(i)
    j = i
    if(j>N):
        j = i-N
    companion = Companion.objects.create(user=User.objects.get(pk=j), name=name, birth_year=birth_year, desired_mate=DesiredMate.objects.get(pk=i), personality=Personality.objects.get(pk=i), mating_season=MatingSeason.objects.get(pk=i))
    print("\tCreated Companion {0}".format(companion))


for (i, nickname, first_address, second_address, age, email) in promtest.create_profiles(N+1):
    profile = Profile.objects.create(user=User.objects.get(pk=i), nickname=nickname, first_address=first_address, second_address=second_address, age=age, email=email)
    print("\tCreated Profile {0}".format(profile))

for (sender, receiver) in promtest.create_likes(N+1):
    like_sender = Companion.objects.get(pk=sender)
    like_receiver = Companion.objects.get(pk=receiver)
    like = Like.objects.create(sender=like_sender, receiver=like_receiver)
    print("\tCreated Like {0}".format(like))
    
for (sender, receiver, granted) in promtest.create_proposals(N+1):
    proposal_sender = Companion.objects.get(pk=sender)
    proposal_receiver = Companion.objects.get(pk=receiver)
    proposal = Proposal.objects.create(sender=proposal_sender, receiver=proposal_receiver, granted=granted)
    print("\tCreated Proposal {0}".format(proposal))

for (sender, receiver, message, date_sent) in promtest.create_messages(N+1):
    message_sender = Companion.objects.get(pk=sender)
    message_receiver = Companion.objects.get(pk=receiver)
    message = Message.objects.create(sender=message_sender, receiver=message_receiver, message=message, date_sent=date_sent)
    print("\tCreated Message {0}".format(message))

print("Initialization Successful!")
