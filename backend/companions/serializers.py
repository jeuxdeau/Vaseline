from django.contrib.auth.models import User
from rest_framework import fields, serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.relations import PrimaryKeyRelatedField
from companions.models import Companion, DesiredMate, Personality, PersonalityDesiredMate, MatingSeason, Like, Proposal, Message, Profile, File
import sys, os
sys.path.insert(0, os.getcwd()+'/companions/model')
from breeds import *

class PersonalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Personality
        fields = '__all__'

class PersonalityDesiredMateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalityDesiredMate
        fields = '__all__'

class MatingSeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatingSeason
        fields = '__all__'

class DesiredMateSerializer(serializers.ModelSerializer):
    personality = PersonalityDesiredMateSerializer(required=True)
    breed = fields.MultipleChoiceField(choices=BreedsDesiredMate)
    class Meta:
        model = DesiredMate
        fields = '__all__'

    def create(self, validated_data):
        personality_data = validated_data.pop('personality')
        personality = PersonalityDesiredMateSerializer.create(PersonalityDesiredMateSerializer(), personality_data)
        desired_mate = DesiredMate.objects.create(
            breed = validated_data['breed'],
            sex = validated_data['sex'],
            size = validated_data['size'],
            personality = personality,
        )
        return desired_mate


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'

class CompanionSerializer(serializers.ModelSerializer):
    desired_mate = DesiredMateSerializer(required=True)
    personality = PersonalitySerializer(required=True)
    mating_season = MatingSeasonSerializer(required=True)
    media = serializers.PrimaryKeyRelatedField(many=True, queryset=File.objects.all())
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
        media_data = validated_data.pop('media')
        media = FileSerializer.create(FileSerializer(), media_data)
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
        personality_desired_mate = desired_mate.personality
        personality = instance.personality
        mating_season = instance.mating_season

        desired_mate_data = validated_data.pop('desired_mate')
        personality_desired_mate_data = desired_mate_data.pop('personality')
        personality_data = validated_data.pop('personality')
        mating_season_data = validated_data.pop('mating_season')

        desired_mate.breed = desired_mate_data['breed']
        desired_mate.sex = desired_mate_data['sex']
        desired_mate.size = desired_mate_data['size']

        personality_desired_mate.affinity_with_human = personality_desired_mate_data['affinity_with_human']
        personality_desired_mate.affinity_with_dog = personality_desired_mate_data['affinity_with_dog']
        personality_desired_mate.shyness = personality_desired_mate_data['shyness']
        personality_desired_mate.loudness = personality_desired_mate_data['loudness']
        personality_desired_mate.aggression = personality_desired_mate_data['aggression']
        personality_desired_mate.etc = personality_desired_mate_data['etc']

        personality.affinity_with_human = personality_data['affinity_with_human']
        personality.affinity_with_dog = personality_data['affinity_with_dog']
        personality.shyness = personality_data['shyness']
        personality.loudness = personality_data['loudness']
        personality.aggression = personality_data['aggression']
        personality.etc = personality_data['etc']
        mating_season.season_start = mating_season_data['season_start']
        mating_season.season_end = mating_season_data['season_end']

        personality_desired_mate.save()
        desired_mate.personality = personality_desired_mate
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
        read_only_fields = ('granted',)

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ('date_sent',)

class CompanionTotalInfoSerializer(serializers.ModelSerializer):
    message_sent = MessageSerializer(read_only=True, many=True)
    message_received = MessageSerializer(read_only=True, many=True)
    like_sent = LikeSerializer(read_only=True, many=True)
    like_received = LikeSerializer(read_only=True, many=True)
    proposal_sent = ProposalSerializer(read_only=True, many=True)
    proposal_received = ProposalSerializer(read_only=True, many=True)
    class Meta:
        model = Companion
        fields = ('id', 'message_sent', 'message_received', 'like_sent', 'like_received', 'proposal_sent', 'proposal_received')

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        read_only_fields = ('user',)

class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

    def create(self, validated_data):
        username = validated_data.pop('username')
        password = validated_data.pop('password')
        user = User.objects.create_user(username=username, password=password)
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    companion = serializers.PrimaryKeyRelatedField(many=True, queryset=Companion.objects.all())
    profile = ProfileSerializer(required=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'companion', 'profile')

class UserUpdateSerializer(serializers.ModelSerializer):
    profile = ProfileUpdateSerializer(required=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'profile')
        read_only_fields = ('username',)

    def update(self, instance, validated_data):
        # if password input is null, no change
        if validated_data['password'] is None:
            password = validated_data['password']
            instance.set_password(password)
        profile_data = validated_data['profile']
        profile = instance.profile
        profile.nickname = profile_data['nickname']
        profile.first_address = profile_data['first_address']
        profile.second_address = profile_data['second_address']
        profile.age = profile_data['age']
        profile.gender = profile_data['gender']
        profile.email = profile_data['email']
        profile.save()

        instance.profile = profile
        instance.save()
        return instance

class UserTotalInfoSerializer(serializers.ModelSerializer):
    companion = CompanionTotalInfoSerializer(read_only=True, many=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'companion')
