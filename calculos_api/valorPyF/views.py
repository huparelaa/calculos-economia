from django.http import JsonResponse
from rest_framework.decorators import api_view
import json

@api_view(["POST"])
def valorFuturo(request):
    try:
        data = json.loads(request.body)
        vp = data.get("vp", 0)
        i = data.get("i", 0)
        n = data.get("n", 0)
        result = vp * (1 + i)**n
        result = round(result, 2) #redondeamos a 2 decimales
        return JsonResponse({"result": result})
    except ValueError:
        return JsonResponse({"error": "Invalid input. Please provide valid numbers."})
    
@api_view(["POST"])
def valorPresente(request):
    try:
        data = json.loads(request.body)
        vf = data.get("vf", 0)
        i = data.get("i", 0)
        n = data.get("n", 0)
        result = vf / (1 + i)**n
        result = round(result, 2) #redondeamos a 2 decimales
        return JsonResponse({"result": result})
    except ValueError:
        return JsonResponse({"error": "Invalid input. Please provide valid numbers."})
    
@api_view(["POST"])
def calcX(request):
    try:
        data = json.loads(request.body)
        #recibimos:
        #[{"valorFp": "VF"/"VP", "cantidadValor": numero, "tasaEfectiva": numero, "periodos": numero, "tipo":"ingreso"/"egreso"   }]

        #si cantidadValor = 0, entonces es un valor a calcular, es la X a calcular

        #sumamos todos los egresos, le restamos los ingresos excepto el de la X, este dividirá todo.

        suma_de_ingresos = 0
        suma_de_egresos = 0
        divisor_ingresos = 0
        informacion = data.get("info")

        for i in informacion:

            if i["cantidadValor"] == 0:
                divisor_ingresos = (1+i["tasaEfectiva"])**i["periodos"]
                continue

            if i["valorFp"] == "VF":
                if i["tipo"] == "ingreso":
                    suma_de_ingresos += i["cantidadValor"] * ((1 + i["tasaEfectiva"])**i["periodos"])

                else:
                    suma_de_egresos += i["cantidadValor"] * ((1 + i["tasaEfectiva"])**i["periodos"])
            else:
                if i["tipo"] == "ingreso":
                    suma_de_ingresos += i["cantidadValor"] / ((1 + i["tasaEfectiva"])**i["periodos"])
                else:
                    suma_de_egresos += i["cantidadValor"] / ((1 + i["tasaEfectiva"])**i["periodos"])

            print(suma_de_egresos)
        
        final_result = (suma_de_egresos - suma_de_ingresos) / divisor_ingresos
        return JsonResponse({"result": round(final_result,2)})
        
    except ValueError:
        return JsonResponse({"error": "Invalid input. Please provide valid numbers."})