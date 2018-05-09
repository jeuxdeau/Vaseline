# Generated by Django 2.0.4 on 2018-05-08 11:21

import breeds
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import enumchoicefield.fields
import sex
import size
import weight


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Companion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', enumchoicefield.fields.EnumChoiceField(default=sex.Sex(1), enum_class=sex.Sex, max_length=6)),
                ('age', models.PositiveIntegerField(default=0)),
                ('breed', enumchoicefield.fields.EnumChoiceField(default=breeds.Breeds(12), enum_class=breeds.Breeds, max_length=19)),
                ('size', enumchoicefield.fields.EnumChoiceField(default=size.Size(1), enum_class=size.Size, max_length=6)),
            ],
        ),
        migrations.CreateModel(
            name='DesiredMate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('breed_desired', enumchoicefield.fields.EnumChoiceField(default=breeds.Breeds(12), enum_class=breeds.Breeds, max_length=19)),
                ('sex_desired', enumchoicefield.fields.EnumChoiceField(default=sex.Sex(1), enum_class=sex.Sex, max_length=6)),
                ('size_desired', enumchoicefield.fields.EnumChoiceField(default=size.Size(1), enum_class=size.Size, max_length=6)),
            ],
        ),
        migrations.CreateModel(
            name='MatingSeason',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('season_start', models.DateTimeField()),
                ('season_end', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Personality',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('affinity_with_human', enumchoicefield.fields.EnumChoiceField(default=weight.Weight(1), enum_class=weight.Weight, max_length=5)),
                ('affinity_with_dog', enumchoicefield.fields.EnumChoiceField(default=weight.Weight(1), enum_class=weight.Weight, max_length=5)),
                ('shyness', enumchoicefield.fields.EnumChoiceField(default=weight.Weight(1), enum_class=weight.Weight, max_length=5)),
                ('activity', enumchoicefield.fields.EnumChoiceField(default=weight.Weight(1), enum_class=weight.Weight, max_length=5)),
                ('loudness', enumchoicefield.fields.EnumChoiceField(default=weight.Weight(1), enum_class=weight.Weight, max_length=5)),
                ('aggression', enumchoicefield.fields.EnumChoiceField(default=weight.Weight(1), enum_class=weight.Weight, max_length=5)),
                ('etc', models.TextField(null=True)),
            ],
        ),
        migrations.AddField(
            model_name='companion',
            name='desired_mate',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='companions.DesiredMate'),
        ),
        migrations.AddField(
            model_name='companion',
            name='mating_season',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='companions.MatingSeason'),
        ),
        migrations.AddField(
            model_name='companion',
            name='personality',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='companions.Personality'),
        ),
        migrations.AddField(
            model_name='companion',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_companion', to=settings.AUTH_USER_MODEL),
        ),
    ]
