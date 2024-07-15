from django.db import models
from user_management.models import User

class Library(models.Model):
    library_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)

class Book(models.Model):
    library = models.ForeignKey(Library, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    isbn = models.CharField(max_length=13, unique=True)
    quantity = models.IntegerField()

class BookPurchase(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    purchase_date = models.DateTimeField()
    quantity = models.IntegerField()
