from django.forms import ModelForm
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from main.models import Post


class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = ('title', 'content')
        labels = {'title': 'Tytuł', 'content': 'Treść posta'}
        exclude = ['add_date', 'author']


class RegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
