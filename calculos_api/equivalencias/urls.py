from django.urls import path
from equivalencias import views
urlpatterns = [
    path("sum/", views.sum_numbers, name="sum-numbers"),
    path("nominal_a_efectiva/", views.convertir_nominal_a_efectiva, name="nominal-a-efectiva")
]
