from django.db import models

# Create your models here.
from django.db import models


class Student(models.Model):
    firstname = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)
    emailid = models.EmailField(max_length=70)
    mobilenumber = models.CharField(max_length=12)
    currentcity = models.CharField(max_length=80)
    qualification = models.CharField(max_length=80)
    qualification_dept = models.CharField(max_length=80)
    yearpassedout = models.IntegerField()
    college_name = models.CharField(max_length=80)
    college_university = models.CharField(max_length=80)
    college_location = models.CharField(max_length=80)
    sslc_marks = models.IntegerField()
    hsc_marks = models.IntegerField()
    degree_marks = models.IntegerField()
    arrears_count = models.IntegerField()
    gender = models.CharField(max_length=80)

    def __str__(self):
        return (f"{self.firstname} {self.lastname}")
