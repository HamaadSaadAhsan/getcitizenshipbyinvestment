<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'content',
        'slug',
        'image',
        'featured',
        'category_id',
        'user_id',
        'published_at',
        'views',
        'likes',
        'dislikes',
        'comments',
        'shares',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    // public function comments()
    // {
    //     return $this->hasMany(Comment::class);
    // }

    // public function likes()
    // {
    //     return $this->hasMany(Like::class);
    // }

    // public function dislikes()
    // {
    //     return $this->hasMany(Dislike::class);
    // }

    // public function shares()
    // {
    //     return $this->hasMany(Share::class);
    // }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopeScheduled($query)
    {
        return $query->where('status', 'scheduled');
    }

    public function getImageUrlAttribute()
    {
        return secure_asset('storage/' . $this->image);
    }
}
