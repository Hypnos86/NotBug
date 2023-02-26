from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from main.models import Post
from main.forms import PostForm, RegisterForm


def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('main:welcome')
    else:
        form = RegisterForm()
    return render(request, 'main/register_form.html', {'form': form})


def welcome(request):
    posts = Post.objects.all().order_by("add_date")
    return render(request, 'main/welcome.html', {'posts': posts})


@login_required()
def home(request):
    posts = Post.objects.all().order_by("add_date")
    return render(request, 'main/home.html', {'posts': posts})


@login_required()
def add_post(request):
    form = PostForm(request.POST or None)

    if request.method == 'POST':
        if form.is_valid():
            instance = form.save(commit=False)
            instance.author = request.user
            form.save()
            return redirect('main:home')
    return render(request, 'main/post_form.html', {'form': form, 'new': True})


@login_required()
def edit_post(request, id):
    post = get_object_or_404(Post, pk=id)
    form = PostForm(request.POST or None, instance=post)

    if request.method == 'POST':
        if form.is_valid():
            instance = form.save(commit=False)
            instance.author = request.user
            form.save()
            return redirect('main:home')
    return render(request, 'main/post_form.html', {'form': form, 'new': False})


def read_post(request, id):
    post = get_object_or_404(Post, pk=id)
    return render(request, 'main/read_post.html', {'post': post})
