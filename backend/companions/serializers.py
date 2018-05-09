from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.relations import PrimaryKeyRelatedField
from companions.models import Companion, DesiredMate

class DesiredMateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesiredMate
        fields = '__all__'

class CompanionSerializer(serializers.ModelSerializer):
    #d = DesiredMateSerializer(read_only = True)
    class Meta:
        model = Companion
        fields = ('user', 'name', 'age', 'breed', 'size', 'desired_mate', 'personality', 'mating_season')

