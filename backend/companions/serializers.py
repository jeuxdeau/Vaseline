from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.relations import PrimaryKeyRelatedField
from companions.models import Companion, DesiredMate, Personality, MatingSeason, Like, Proposal, Message, Profile

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
    like_sent = serializers.PrimaryKeyRelatedField(many=True, queryset=Like.objects.all())
    like_received = serializers.PrimaryKeyRelatedField(many=True, queryset=Like.objects.all())
    proposal_sent = serializers.PrimaryKeyRelatedField(many=True, queryset=Proposal.objects.all())
    proposal_received = serializers.PrimaryKeyRelatedField(many=True, queryset=Proposal.objects.all())
    message_sent = serializers.PrimaryKeyRelatedField(many=True, queryset=Message.objects.all())
    message_received = serializers.PrimaryKeyRelatedField(many=True, queryset=Message.objects.all())

    class Meta:
        model = Companion
        fields = ('user', 'name', 'sex', 'age', 'breed', 'size', 'desired_mate', 'personality', 'mating_season', 'like_sent', 'like_received', 'proposal_sent', 'proposal_received', 'message_sent', 'message_received')
    
    def create(self, validated_data):
        desired_mate_data = validated_data.pop('desired_mate')
        desired_mate = DesiredMateSerializer.create(DesiredMateSerializer(), desired_mate_data)
        personality_data = validated_data.pop('personality')
        personality = PersonalitySerializer.create(PersonalitySerializer(), personality_data)
        mating_season_data = validated_data.pop('mating_season')
        mating_season = MatingSeasonSerializer.create(MatingSeasonSerializer(), mating_season_data)
        companion = Companion.objects.create(
            user = validated_data['user'],
            name = validated_data['name'],
            sex = validated_data['sex'],
            age = validated_data['age'],
            breed = validated_data['breed'],
            size = validated_data['size'],
            desired_mate = desired_mate,
            personality = personality,
            mating_season = mating_season
        )
        return companion

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

class ProposalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proposal
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'nickname', 'postal_code', 'rough_address', 'detailed_address', 'age', 'gender', 'email')
   
class MakeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
    
class UserSerializer(serializers.ModelSerializer):
    companion = serializers.PrimaryKeyRelatedField(many=True, queryset=Companion.objects.all())
    profile = ProfileSerializer(required=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'companion', 'profile') 
    
