from django.db import models

class Patient(models.Model):

    name = models.CharField(max_length=100)
    age = models.IntegerField(default=0)
    disease = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name