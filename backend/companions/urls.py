from django.conf.urls import url
from companions import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^api/companions/$', views.CompanionList.as_view()),
    url(r'^api/companions/(?P<pk>[0-9]+)/$', views.CompanionDetail.as_view()),
    url(r'^api/companions/desired_mate$', views.DesiredMateList.as_view()),
    url(r'^api/companions/personality$', views.PersonalityList.as_view()),
    url(r'^api/companions/personality_desired_mate$', views.PersonalityDesiredMateList.as_view()),
    url(r'^api/companions/mating_season$', views.MatingSeasonList.as_view()),
    url(r'^api/likes/$', views.LikeList.as_view()),
    url(r'^api/proposals/$', views.ProposalList.as_view()),
    url(r'^api/messages/$', views.MessageList.as_view()),
    url(r'^api/users/$', views.UserListAndSignUp.as_view()),
    url(r'^api/users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^api/total/(?P<pk>[0-9]+)/$', views.UserTotalInfoDetail.as_view()),
    url(r'^api/users/update/(?P<pk>[0-9]+)/$', views.UserUpdateDetail.as_view()),
    url(r'^api/profiles/$', views.ProfileList.as_view()),
    url(r'^api/profiles/(?P<pk>[0-9]+)/$', views.ProfileDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
