from django.contrib import admin

# Register your models here.

from .models import Student


class StudentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Student._meta.get_fields()]

admin.site.register(Student, StudentAdmin)