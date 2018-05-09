from django.contrib import admin
from .models import Companion
from .models import DesiredMate
from .models import Personality
from .models import MatingSeason

admin.site.register(Companion)
admin.site.register(DesiredMate)
admin.site.register(Personality)
admin.site.register(MatingSeason)
