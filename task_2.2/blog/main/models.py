from django.db import models


# Create your models here.
class Post(models.Model):
    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posty"

    title = models.CharField(max_length=150, verbose_name="Tytuł")
    content = models.TextField(verbose_name="Treść")
    add_date = models.DateField(auto_now_add=True, verbose_name="Data dodania")
    author = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="post")

    def __str__(self):
        return f"{self.title} - {self.author.username}"
