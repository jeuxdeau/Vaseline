from django.conf.urls import url
from companions import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^companions/$', views.CompanionList.as_view()),
    url(r'^companions/desiredmate$', views.DesiredMateList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
