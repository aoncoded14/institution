from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"] #Fields we want to serialize when accepting and returning new user
        extra_kwargs = {"password": {"write_only": True}} #Accept password when creating user but not return it.

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user
