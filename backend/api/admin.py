from django.contrib import admin
from .models import Patient
# Register your models here.

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    
    list_display = ('id', 'name','disease', 'age')
    search_fields = ('id', 'name')
    list_filter = ('disease', 'age')
    readonly_fields = ('created_at', 'updated_at')