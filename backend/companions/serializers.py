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
        fields = '__all__'
        read_only_fields = ('like_sent', 'like_received', 'proposal_sent', 'proposal_received', 'message_sent', 'message_received')
 

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
            birth_year = validated_data['birth_year'],
            breed = validated_data['breed'],
            size = validated_data['size'],
            desired_mate = desired_mate,
            personality = personality,
            mating_season = mating_season
        )
        return companion

class CompanionUpdateSerializer(serializers.ModelSerializer):
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
        fields = '__all__'
        read_only_fields = ('like_sent', 'like_received', 'proposal_sent', 'proposal_received', 'message_sent', 'message_received', 'user')

    def update(self, instance, validated_data):
        desired_mate = instance.desired_mate
        personality = instance.personality
        mating_season = instance.mating_season

        desired_mate_data = validated_data.pop('desired_mate')
        personality_data = validated_data.pop('personality')
        mating_season_data = validated_data.pop('mating_season')

        desired_mate.breed = desired_mate_data['breed']
        desired_mate.sex = desired_mate_data['sex']
        desired_mate.size = desired_mate_data['size']
        personality.affinity_with_human = personality_data['affinity_with_human']
        personality.affinity_with_dog = personality_data['affinity_with_dog']
        personality.shyness = personality_data['shyness']
        personality.loudness = personality_data['loudness']
        personality.aggression = personality_data['aggression']
        personality.etc = personality_data['etc']
        mating_season.season_start = mating_season_data['season_start']
        mating_season.season_end = mating_season_data['season_end']
        
        desired_mate.save()
        personality.save()
        mating_season.save()

        instance.name = validated_data['name']
        instance.sex = validated_data['sex']
        instance.birth_year = validated_data['birth_year']
        instance.breed = validated_data['breed']
        instance.size = validated_data['size']
        instance.desired_mate = desired_mate
        instance.personality = personality
        instance.mating_season = mating_season
        
        instance.save()
        return instance

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
        fields = '__all__' 

class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
    
class UserSerializer(serializers.ModelSerializer):
    companion = serializers.PrimaryKeyRelatedField(many=True, queryset=Companion.objects.all())
    profile = ProfileSerializer(required=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'companion', 'profile') 
 
