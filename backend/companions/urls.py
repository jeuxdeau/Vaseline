from django.conf.urls import url
from companions import views
from rest_framework.urlpatterns import format_suffix_patterns
from .views import FileView

urlpatterns = [
    url(r'^api/sign_up/$', views.UserListAndSignUp.as_view()),
    url(r'^api/companions/$', views.CompanionList.as_view()),
    url(r'^api/companions/desired_mate$', views.DesiredMateList.as_view()),
    url(r'^api/companions/personality$', views.PersonalityList.as_view()),
    url(r'^api/companions/mating_season$', views.MatingSeasonList.as_view()),
    url(r'^api/likes/$', views.LikeList.as_view()),
    url(r'^api/proposals/$', views.ProposalList.as_view()),
    url(r'^api/messages/$', views.MessageList.as_view()),
    url(r'^api/users/$', views.UserListAndSignUp.as_view()),
    url(r'^api/users/profiles/$', views.ProfileList.as_view()),
    url(r'^api/upload/$', FileView.as_view(), name='file-upload'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
