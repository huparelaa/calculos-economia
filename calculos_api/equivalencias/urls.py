from django.urls import path
from equivalencias import views
urlpatterns = [
    path("sum/", views.sum_numbers, name="sum-numbers"),
    path("efectivaX_a_efectivaY/", views.efectivaX_a_efectivaY, name="efectivaX_a_efectivaY"),
    path("getEquivalencias/", views.getEquivalencias, name="getEquivalencias"),
]
