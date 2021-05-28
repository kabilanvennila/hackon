from django.db import models


# Create your models here.

class Api(models.Model):
    country=models.CharField(max_length=40)
    year=models.IntegerField()
    sex=models.CharField(max_length=10)
    population=models.IntegerField()
    countper100k=models.FloatField()
    generation=models.CharField(max_length=20)

    def __str__(self):
        return self.id    