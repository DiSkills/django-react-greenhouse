# Generated by Django 3.2.4 on 2021-06-29 11:12

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0009_alter_order_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_date',
            field=models.DateField(db_index=True, default=datetime.datetime(2021, 6, 29, 11, 12, 52, 733490), verbose_name='Дата для получения заказа'),
        ),
    ]