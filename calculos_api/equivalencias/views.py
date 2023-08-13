from django.http import JsonResponse
from rest_framework.decorators import api_view
import json
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
