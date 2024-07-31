from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer, MinuteSerializer
from .models import Minute

class MinuteListCreate(generics.ListCreateAPIView):
    serializer_class = MinuteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Minute.objects.filter(author=user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class MinuteDelete(generics.DestroyAPIView):
    serializer_class = MinuteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Minute.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
