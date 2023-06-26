from django.db import models
from django.db.models.query import QuerySet
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):


    
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User , on_delete= models.CASCADE, related_name='blog_posts'
    )
    category = models.CharField(max_length=120, default='Nothing', null=True)
    #category = models.ForeignKey(Category, on_delete=models.CASCADE, default='Uncategorized')
    thumbnail = models.ImageField(upload_to='images/' , default='default.jpg')
    publishDate = models.DateTimeField(default = timezone.now)
    body = models.TextField()

    def __str__(self):
        return self.title
    
    objects = models.Manager()
