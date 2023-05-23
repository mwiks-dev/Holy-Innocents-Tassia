from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('swiper/', views.swiper_view, name='swiper'),

]