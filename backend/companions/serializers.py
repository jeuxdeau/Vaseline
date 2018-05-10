from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.relations import PrimaryKeyRelatedField
from companions.models import Companion, DesiredMate, Personality, MatingSeason

class DesiredMateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesiredMate
        fields = '__all__'

class PersonalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Personality
        fields = '__all__'

class MatingSeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatingSeason
        fields = '__all__'

class CompanionSerializer(serializers.ModelSerializer):
    desired_mate = DesiredMateSerializer(required=True)
    personality = PersonalitySerializer(required=True)
    mating_season = MatingSeasonSerializer(required=True)
    
    class Meta:
        model = Companion
        fields = ('user', 'name', 'age', 'breed', 'size', 'desired_mate', 'personality', 'mating_season')

    def create(self, validated_data):
        desired_mate_data = validated_data.pop('desired_mate')
        desired_mate = DesiredMateSerializer.create(DesiredMateSerializer(), desired_mate_data)
        personality_data = validated_data.pop('personality')
        personality = PersonalitySerializer.create(PersonalitySerializer(), personality_data)
        mating_season_data = validated_data.pop('mating_season')
        mating_season = MatingSeasonSerializer.create(MatingSeasonSerializer(), mating_season_data)

        companion, created = Companion.objects.create(desired_mate=desired_mate, personality=personality, mating_season=mating_season)
        return companion

