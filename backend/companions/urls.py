from django.conf.urls import url
from companions import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^companions/$', views.CompanionList.as_view()),
    url(r'^companions/desired_mate$', views.DesiredMateList.as_view()),
    url(r'^companions/personality$', views.PersonalityList.as_view()),
    url(r'^companions/mating_season$', views.MatingSeasonList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
