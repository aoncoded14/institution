from django.db import models
from user_management.models import User

class RRR(models.Model):
    rrr = models.CharField(max_length=255, unique=True)
    service_type_id = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payer_name = models.CharField(max_length=255)
    payer_email = models.EmailField()
    payer_phone = models.CharField(max_length=15)
    description = models.TextField()
    status = models.CharField(max_length=50, default='pending')
    generated_at = models.DateTimeField(auto_now_add=True)
    payment_date = models.DateTimeField(null=True, blank=True)

class PaymentStatus(models.Model):
    rrr = models.ForeignKey(RRR, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    status_message = models.CharField(max_length=255)
    checked_at = models.DateTimeField(auto_now_add=True)

class TransactionInquiry(models.Model):
    rrr = models.ForeignKey(RRR, on_delete=models.CASCADE)
    details = models.TextField()
    inquired_at = models.DateTimeField(auto_now_add=True)

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rrr = models.ForeignKey(RRR, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField()
    payment_status = models.ForeignKey(PaymentStatus, on_delete=models.CASCADE)
from django.db import models

# Create your models here.
