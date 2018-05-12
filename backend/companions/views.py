from rest_framework import status
from rest_framework.decorators import api_view
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import generics
from companions.models import Companion, DesiredMate, Personality, MatingSeason, Like, Proposal, Message, Profile
from rest_framework.response import Response
from django.contrib.auth.models import User
from companions.serializers import CompanionAllSerializer, CompanionPostSerializer, DesiredMateSerializer, PersonalitySerializer, MatingSeasonSerializer, LikeSerializer, ProposalSerializer, MessageSerializer, UserPostSerializer, UserAllSerializer, ProfileSerializer
from datetime import datetime
from rest_framework import permissions, status
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.http import QueryDict
from rest_framework.exceptions import NotFound, ValidationError

class CompanionList(generics.ListAPIView):
    queryset = Companion.objects.all()
    serializer_class = CompanionAllSerializer
    #permission_classes = (permissions.IsAuthenticated,)

class DesiredMateList(generics.ListAPIView):
    queryset = DesiredMate.objects.all()
    serializer_class = DesiredMateSerializer

class PersonalityList(generics.ListAPIView):
    queryset = Personality.objects.all()
    serializer_class = PersonalitySerializer

class MatingSeasonList(generics.ListAPIView):
    queryset = MatingSeason.objects.all()
    serializer_class = MatingSeasonSerializer

class LikeList(generics.ListAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class ProposalList(generics.ListAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer

class MessageList(generics.ListAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class UserListAndSignUp(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserAllSerializer

    def post(self, request, format=None):
        if User.objects.filter(username=request.data['username']).exists():
            raise ValidationError
        user_data = QueryDict('', mutable=True)
        user_data.update({'username':request.data['username'], 'password':request.data['password']})
        user_post_serializer = UserPostSerializer(data=user_data)
        if user_post_serializer.is_valid():
            user_post_serializer.save()
        else:
            Response(user_post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        username = request.data['username']
        user = User.objects.get(username=username)
        companion_data = request.data.pop('companion')
        companion_data.update({'user':user.id})
        companion_post_serializer = CompanionPostSerializer(data=companion_data)
        if companion_post_serializer.is_valid():
            companion_post_serializer.save()
        else:
            Response(companion_post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        profile_data = request.data.pop('profile')
        profile_data.update({'user':user.id})
        profile_serializer = ProfileSerializer(data=profile_data)
        if profile_serializer.is_valid():
            profile_serializer.save()
        else:
            Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_201_CREATED)

class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
