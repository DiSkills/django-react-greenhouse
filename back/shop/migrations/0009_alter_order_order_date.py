# Generated by Django 3.2.4 on 2021-07-01 11:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0008_alter_order_order_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_date',
            field=models.DateField(db_index=True, default=datetime.datetime(2021, 7, 1, 11, 13, 35, 731748), verbose_name='Дата для получения заказа'),
        ),
    ]
