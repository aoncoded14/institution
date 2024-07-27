from django.urls import path, include
from django.contrib import admin
from users.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Define urlpatterns as a list
urlpatterns = [
    path('admin/', admin.site.urls),
    path("users/user/register/", CreateUserView.as_view(), name="register"),
    path("users/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("users/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("users-auth/", include("rest_framework.urls")),
]
