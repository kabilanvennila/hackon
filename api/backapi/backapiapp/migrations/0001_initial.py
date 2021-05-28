# Generated by Django 3.2.3 on 2021-05-28 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Api',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=40)),
                ('year', models.IntegerField()),
                ('sex', models.CharField(max_length=10)),
                ('population', models.IntegerField()),
                ('countper100k', models.FloatField()),
                ('generation', models.CharField(max_length=20)),
            ],
        ),
    ]
