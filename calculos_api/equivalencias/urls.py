from django.urls import path
from equivalencias import views
urlpatterns = [
    path("sum/", views.sum_numbers, name="sum-numbers"),
]
