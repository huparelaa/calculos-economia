from django.http import JsonResponse
from rest_framework.decorators import api_view
import json

diccionario_equivalencias = {
    "mensual": 12, 
    "bimestral": 6, 
    "trimestral": 4, 
    "cuatrimestral": 3, 
    "semestral": 2, 
    "anual": 1
    }

@api_view(["POST"])
def sum_numbers(request):
    try:
        data = json.loads(request.body)
        num1 = float(data.get("num1", 0))
        num2 = float(data.get("num2", 0))
        print(num1)
        result = num1 + num2
        return JsonResponse({"result": result})
    except ValueError:
        return JsonResponse({"error": "Invalid input. Please provide valid numbers."})

@api_view(["GET"])
def getEquivalencias(request):
    try:
        return JsonResponse(diccionario_equivalencias)
    except ValueError:
        return JsonResponse({"error": "Invalid input. Please provide valid numbers."})

@api_view(["POST"])
def efectivaX_a_efectivaY(request):
    try:
        data = json.loads(request.body)
        i1 = float(data.get("i1", 0))
        m1 = float(data.get("m1", 0))
        m2 = float(data.get("m2", 0))

        i2 = ((1+i1)**(m1/m2))-1
        #redondeamos a 4 decimales
        i2 = round(i2, 4)
        return JsonResponse({"result": i2})

    except ValueError:
        return JsonResponse({"error": "Invalid input. Please provide valid numbers."})
