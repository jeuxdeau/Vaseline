from django.db import models
from enumchoicefield import ChoiceEnum, EnumChoiceField
# age is positive Integer

class Sex(ChoiceEnum):
    male = 'MALE'
    female = 'FEMALE'
class Breeds(ChoiceEnum):
    beagle = 'BEAGLE'
    maltese = 'MALTESE' 
class Size(ChoiceEnum):
    small = 'SMALL' 
    medium = 'MEDIUM' 
    large = 'LARGE'

class Companion(models.Model):
   # user id? user?
    user = models.ForeignKey('auth.User', related_name='my_companion', on_delete=models.CASCADE)
    name = EnumChoiceField(Sex, default=Sex.male)
    age = models.PositiveIntegerField(default=0)
    breed = EnumChoiceField(Breeds, default=Breeds.beagle)
    size = EnumChoiceField(Size, default=Size.small)
