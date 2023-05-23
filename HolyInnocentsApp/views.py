from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return render(request, 'home.html')

def swiper_view(request):
    items = ['https://media.istockphoto.com/id/1442195546/photo/the-twilight-sun-the-bible-and-the-holy-cross-of-jesus-christ.webp?b=1&s=170667a&w=0&k=20&c=GUfPyAvhPY3hqiPrbFfSpWtamTL5L58Ars61OjcyhLE=', 
             'https://images.unsplash.com/photo-1514286969571-5142af56b991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 
             'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60']  # Example data
    return render(request, 'swiper.html', {'items': items})
