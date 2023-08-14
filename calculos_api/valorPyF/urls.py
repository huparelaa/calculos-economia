from django.urls import path
from valorPyF import views
urlpatterns = [
    path("valorFuturo/", views.valorFuturo, name="valorFuturo"),
    path("valorPresente/", views.valorPresente, name="valorPresente"),
    path("calcX/", views.calcX, name="calcX")
]
