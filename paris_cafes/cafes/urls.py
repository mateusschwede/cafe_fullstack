from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CafeteriaViewSet

router = DefaultRouter()
router.register(r'cafeterias', CafeteriaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]