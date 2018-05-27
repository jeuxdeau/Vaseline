from django.contrib import admin
from .models import Companion, DesiredMate, Personality, PersonalityDesiredMate, MatingSeason, Like, Proposal, Message, Profile

admin.site.register(Companion)
admin.site.register(DesiredMate)
admin.site.register(Personality)
admin.site.register(PersonalityDesiredMate)
admin.site.register(MatingSeason)
admin.site.register(Like)
admin.site.register(Proposal)
admin.site.register(Message)
admin.site.register(Profile)
