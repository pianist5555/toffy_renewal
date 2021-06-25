from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
from oneLine import views
router.register('wisesaying', views.WiseSayingView, 'wisesaying')
from tfgame import views
router.register('tfgame', views.TfgameView, 'tfgame')
from tfnote import views
router.register('tfnote', views.TfnoteView, 'tfnote')

app_patterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
urlpatterns = [
    path('cms/', include(app_patterns)),
]
