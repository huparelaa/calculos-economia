from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('equivalencias/', include('equivalencias.urls')),
    path('valorPyF/', include('valorPyF.urls')),
]
