from rest_framework import status
from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import generics
from companions.models import Companion, DesiredMate
from rest_framework.response import Response
from django.contrib.auth.models import User
from companions.serializers import CompanionSerializer,DesiredMateSerializer
from datetime import datetime
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt

class CompanionList(generics.ListAPIView):
    queryset = Companion.objects.all()
    serializer_class = CompanionSerializer
    #permission_classes = (permissions.IsAuthenticated,)

class DesiredMateList(generics.ListAPIView):
    queryset = DesiredMate.objects.all()
    serializer_class = DesiredMateSerializer
