from django.urls import path
from . import views

urlpatterns = [
    path("minutes/", views.MinuteListCreate.as_view(), name="minute-list"),
    path("minutes/delete/<int:pk>/", views.MinuteDelete.as_view(), name="delete-minute"),
]
