from .models import Patient
from django.shortcuts import render
from .serializers import PatientSerializer
from rest_framework.generics import ListCreateAPIView
# Create your views here.

class PatientView(ListCreateAPIView):
    
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
