from django.urls import path, re_path
from main.views import welcome, home, add_post, edit_post, read_post, register

app_name = 'main'
urlpatterns = [
    path('register/', register, name='register'),
    path('home/', home, name="home"),
    path('add_post/', add_post, name='add_post'),
    re_path('edit_post/(?P<id>\d+)/$', edit_post, name='edit_post'),
    re_path('post/(?P<id>\d+)/$', read_post, name='read_post'),
    path('', welcome, name="welcome"),
]
