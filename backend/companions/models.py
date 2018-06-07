# sys.path.insert : import Breeds, Sex, Size class in model module
from django.db import models
from enumchoicefield import ChoiceEnum, EnumChoiceField
from django.core.validators import MaxValueValidator, MinValueValidator
import sys, os
sys.path.insert(0, os.getcwd()+'/companions/model')
from breeds import *
from sex import *
from size import *
from multiselectfield import MultiSelectField
import datetime

#Profile of User
class Profile(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    nickname = models.CharField(null=False, blank=False, max_length=15)
    first_address = models.CharField(null=False, blank=False, max_length=100)
    second_address = models.CharField(null=False, blank=False, max_length=100)
    age = models.PositiveIntegerField(default=0)
    gender = EnumChoiceField(Sex, default=Sex.male)
    email = models.CharField(null=False, blank=False, max_length=30)

#Personality for My Companion
class Personality(models.Model):
    affinity_with_human = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    affinity_with_dog = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    shyness = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    activity = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    loudness = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    aggression = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    etc = models.TextField(null=True)

#Personality for DesiredMate
class PersonalityDesiredMate(models.Model):
    affinity_with_human = models.IntegerField(default=0, validators=[MaxValueValidator(5), MinValueValidator(0)])
    affinity_with_dog = models.IntegerField(default=0, validators=[MaxValueValidator(5), MinValueValidator(0)])
    shyness = models.IntegerField(default=0, validators=[MaxValueValidator(5), MinValueValidator(0)])
    activity = models.IntegerField(default=0, validators=[MaxValueValidator(5), MinValueValidator(0)])
    loudness = models.IntegerField(default=0, validators=[MaxValueValidator(5), MinValueValidator(0)])
    aggression = models.IntegerField(default=0, validators=[MaxValueValidator(5), MinValueValidator(0)])
    etc = models.TextField(null=True)

#Mating Season for Companion (Using DateField)
class MatingSeason(models.Model):
    season_start = models.DateField(null=False)
    season_end = models.DateField(null=False)

#DesiredMate (Can select many breeds)
class DesiredMate(models.Model):
    breed = MultiSelectField(choices = BreedsDesiredMate, default = ['beagle', 'sapsal'])
    sex = EnumChoiceField(SexDesiredMate, default=SexDesiredMate.male)
    size = EnumChoiceField(SizeDesiredMate, default=SizeDesiredMate.small)
    personality = models.OneToOneField(PersonalityDesiredMate, on_delete=models.CASCADE)

#Companion
class Companion(models.Model):
    user = models.ForeignKey('auth.User', related_name='companion', on_delete=models.CASCADE)
    name = models.CharField(null=False, blank=False, max_length=15)
    sex = EnumChoiceField(Sex, default=Sex.male)
    birth_year = models.PositiveIntegerField(default=2018)
    breed = models.CharField(choices = Breeds, default = 'beagle', max_length=100)
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
    date_sent = models.DateTimeField(default=datetime.datetime.now)
    is_read = models.BooleanField(default=False)

class File(models.Model):
    file = models.FileField(blank=False, null=False)
    remark = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)