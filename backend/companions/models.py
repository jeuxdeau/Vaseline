# sys.path.insert : import Breeds, Sex, Size, Weight class in model module
from django.db import models
from enumchoicefield import ChoiceEnum, EnumChoiceField
import sys, os
sys.path.insert(0, os.getcwd()+'/companions/model')
from breeds import *
from sex import *
from size import *
from weight import *

class Profile(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    nickname = models.CharField(null=False, blank=False, max_length=15)
    postal_code = models.PositiveIntegerField(default=0)
    rough_address = models.CharField(null=False, blank=False, max_length=100)
    detailed_address = models.CharField(null=False, blank=False, max_length=100)
    age = models.PositiveIntegerField(default=0)
    gender = EnumChoiceField(Sex, default=Sex.male)
    email = models.CharField(null=False, blank=False, max_length=30)

class DesiredMate(models.Model):
    breed = EnumChoiceField(Breeds, default=Breeds.beagle)
    sex = EnumChoiceField(Sex, default=Sex.male)
    size = EnumChoiceField(Size, default=Size.small)

class Personality(models.Model):
    affinity_with_human = EnumChoiceField(Weight, default=Weight.one)
    affinity_with_dog = EnumChoiceField(Weight, default=Weight.one)
    shyness = EnumChoiceField(Weight, default=Weight.one)
    activity = EnumChoiceField(Weight, default=Weight.one)
    loudness = EnumChoiceField(Weight, default=Weight.one)
    aggression = EnumChoiceField(Weight, default=Weight.one)
    etc = models.TextField(null=True)

class MatingSeason(models.Model):
    season_start = models.DateTimeField()
    season_end = models.DateTimeField()

class Companion(models.Model):
    user = models.ForeignKey('auth.User', related_name='companion', on_delete=models.CASCADE)
    name = models.CharField(null=False, blank=False, max_length=15)
    sex = EnumChoiceField(Sex, default=Sex.male)
    age = models.PositiveIntegerField(default=0)
    breed = EnumChoiceField(Breeds, default=Breeds.beagle)
    size = EnumChoiceField(Size, default=Size.small)
    desired_mate = models.OneToOneField(DesiredMate, on_delete=models.CASCADE)
    personality = models.OneToOneField(Personality, on_delete=models.CASCADE)
    mating_season = models.OneToOneField(MatingSeason, on_delete=models.CASCADE)

class Like(models.Model):
    sender = models.ForeignKey(Companion, related_name='like_sent', on_delete=models.CASCADE)
    receiver = models.ForeignKey(Companion, related_name='like_received', on_delete=models.CASCADE)

class Proposal(models.Model):
    sender = models.ForeignKey(Companion, related_name='proposal_sent', on_delete=models.CASCADE)
    receiver = models.ForeignKey(Companion, related_name='proposal_received', on_delete=models.CASCADE)
    granted = models.BooleanField(default=False)

class Message(models.Model):
    sender = models.ForeignKey(Companion, related_name='message_sent', on_delete=models.CASCADE)
    receiver = models.ForeignKey(Companion, related_name='message_received', on_delete=models.CASCADE)
    message = models.TextField(null=False)
    date_sent = models.DateTimeField()
