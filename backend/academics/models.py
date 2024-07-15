from django.db import models
from user_management.models import Student

class Course(models.Model):
    course_name = models.CharField(max_length=255)
    course_description = models.TextField()
    credits = models.IntegerField()

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrollment_date = models.DateField()
