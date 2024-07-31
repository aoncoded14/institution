from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Minute

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User(username=validated_data['username'])
        user.set_password(validated_data["password"])
        user.save()
        return user

class MinuteSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Minute
        fields = ["id", "title", "content", "created_at", "author"]
