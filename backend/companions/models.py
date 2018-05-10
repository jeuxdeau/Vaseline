# sys.path.insert : import Breeds, Sex, Size, Weight class in model module
from django.db import models
from enumchoicefield import ChoiceEnum, EnumChoiceField
import sys, os
sys.path.insert(0, os.getcwd()+'/companions/model')
from breeds import *
from sex import *
from size import *
from weight import *

class DesiredMate(models.Model):
    breed_desired = EnumChoiceField(Breeds, default=Breeds.beagle)
    sex_desired = EnumChoiceField(Sex, default=Sex.male)
    size_desired = EnumChoiceField(Size, default=Size.small)

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
    user = models.ForeignKey('auth.User', related_name='my_companion', on_delete=models.CASCADE)
    name = EnumChoiceField(Sex, default=Sex.male)
    age = models.PositiveIntegerField(default=0)
    breed = EnumChoiceField(Breeds, default=Breeds.beagle)
    size = EnumChoiceField(Size, default=Size.small)
    desired_mate = models.OneToOneField(DesiredMate, on_delete=models.CASCADE)
    personality = models.OneToOneField(Personality, on_delete=models.CASCADE)
    mating_season = models.OneToOneField(MatingSeason, on_delete=models.CASCADE)
