from rest_framework import status
from rest_framework.decorators import api_view
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import generics
from companions.models import Companion, DesiredMate, Personality, PersonalityDesiredMate, MatingSeason, Like, Proposal, Message, Profile, File, RepresentCompanion
from rest_framework.response import Response
from django.contrib.auth.models import User
from companions.serializers import CompanionSerializer, CompanionUpdateSerializer, DesiredMateSerializer, PersonalitySerializer, PersonalityDesiredMateSerializer, MatingSeasonSerializer, LikeSerializer, ProposalSerializer, MessageSerializer, UserSignUpSerializer, UserSerializer, UserPasswordUpdateSerializer, UserProfileUpdateSerializer, UserTotalInfoSerializer, ProfileSerializer, FileSerializer, RepresentCompanionSerializer, RepresentCompanionUpdateSerializer, LikeUpdateSerializer, ProposalUpdateSerializer, MessageUpdateSerializer, ProfileAddressSerializer, UserAddressSerializer, CompanionAddressSerializer
from datetime import datetime
from rest_framework import permissions, status
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.http import QueryDict
from rest_framework.exceptions import NotFound, ValidationError
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView

class CompanionList(generics.ListCreateAPIView):
    queryset = Companion.objects.all()
    serializer_class = CompanionSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        companion_serializer = CompanionSerializer(data=request.data)
        if companion_serializer.is_valid():
            companion_serializer.save()
        else:
            return Response(companion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(companion_serializer.data, status = status.HTTP_201_CREATED)

class DesiredMateList(generics.ListCreateAPIView):
    queryset = DesiredMate.objects.all()
    serializer_class = DesiredMateSerializer

class PersonalityList(generics.ListAPIView):
    queryset = Personality.objects.all()
    serializer_class = PersonalitySerializer

class PersonalityDesiredMateList(generics.ListAPIView):
    queryset = PersonalityDesiredMate.objects.all()
    serializer_class = PersonalityDesiredMateSerializer

class MatingSeasonList(generics.ListAPIView):
    queryset = MatingSeason.objects.all()
    serializer_class = MatingSeasonSerializer

class LikeList(generics.ListCreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class ProposalList(generics.ListCreateAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer

class MessageList(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class LikeDetail(generics.RetrieveUpdateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeUpdateSerializer

class ProposalDetail(generics.RetrieveUpdateAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalUpdateSerializer

class MessageDetail(generics.RetrieveUpdateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageUpdateSerializer

class UserListAndSignUp(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, format=None):
        # Check same username
        if User.objects.filter(username=request.data['username']).exists():
            raise ValidationError
        user_data = QueryDict('', mutable=True)
        user_data.update({'username':request.data['username'], 'password':request.data['password']})
        user_signup_serializer = UserSignUpSerializer(data=user_data)
        if user_signup_serializer.is_valid():
            user_signup_serializer.save()
        else:
            return Response(user_signup_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        username = request.data['username']
        user = User.objects.get(username=username)
        companion_data = request.data.pop('companion')
        companion_data.update({'user':user.id})
        companion_serializer = CompanionSerializer(data=companion_data)
        if companion_serializer.is_valid():
            companion_serializer.save()
        else:
            return Response(companion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        companion = Companion.objects.get(user=user.id)
        print("111111111")
        represent_companion_data = QueryDict('', mutable=True)
        print("22222222222")
        represent_companion_data.update({"user":user.id, "represent_companion":companion.id})
        print("333333333333")
        print(represent_companion_data)
        represent_companion_serializer = RepresentCompanionSerializer(data=represent_companion_data)
        print("444444444444")
        if represent_companion_serializer.is_valid():
            print("5555")
            represent_companion_serializer.save()
        else:
            print("66666666666")
            return Response(represent_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print("!!!!!!!!!!!!!!!!")
        profile_data = request.data.pop('profile')
        profile_data.update({'user':user.id})
        profile_serializer = ProfileSerializer(data=profile_data)
        if profile_serializer.is_valid():
            profile_serializer.save()
        else:
            return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_201_CREATED)

class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileDetail(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class CompanionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Companion.objects.all()
    serializer_class = CompanionUpdateSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserPasswordUpdateDetail(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserPasswordUpdateSerializer

class UserProfileUpdateDetail(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileUpdateSerializer

class UserTotalInfoDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserTotalInfoSerializer

class RepresentCompanionList(generics.ListAPIView):
    queryset = RepresentCompanion.objects.all()
    serializer_class = RepresentCompanionSerializer

class RepresentCompanionUpdateDetail(generics.RetrieveUpdateAPIView):
    queryset = RepresentCompanion.objects.all()
    serializer_class = RepresentCompanionUpdateSerializer

class FileView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        file_serializer = FileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FileList(generics.ListAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer

class CompanionAddressList(generics.ListAPIView):
    queryset = Companion.objects.all()
    serializer_class = CompanionAddressSerializer

