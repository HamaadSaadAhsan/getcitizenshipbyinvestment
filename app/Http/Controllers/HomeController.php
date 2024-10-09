<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    // Index Page
    public function index()
    {
        $categories = Category::where('parent_id', 0)->with('children')->get();
        $featuredNews = Post::whereFeatured(true)->with(['user', 'category'])->first();
        $topStories = Post::with(['category', 'user'])
        ->whereHas('category', function ($q){
            $q->where('slug', 'immigration-news');
        })
        ->orderBy('created_at', 'DESC')
        ->take(4)
        ->get();

        $moreNews = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'immigration-news');
            })
            ->whereFeatured(false)
            ->orderBy('created_at', 'DESC')
            ->take(8)  // Take the next 8 posts (or however many you want)
            ->skip(4)
            ->get();

        $citizenshipCategory = Category::where('name', 'Citizenship')->first();
        $citizenshipPosts = Post::where('category_id', $citizenshipCategory?->id)
            ->with(['category', 'user'])
            ->orderBy('created_at', 'desc')
            ->take(2)
            ->get();

        $residencePosts = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'residency');
            })
            ->orderBy('created_at', 'DESC')
            ->take(4)
            ->get();

        $digitalNomad = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'digital-nomad');
            })
            ->orderBy('created_at', 'DESC')
            ->take(8)
            ->get();

        $skilledImmigrationPosts = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'skilled-immigration');
            })
            ->orderBy('created_at', 'DESC')
            ->take(9)
            ->get();

        $businessImmigrationPosts = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'business-immigration');
            })
            ->orderBy('created_at', 'DESC')
            ->take(9)
            ->get();

        return Inertia::render('Home/Index', [
            'categories' => $categories,
            'featuredNews' => $featuredNews,
            'topStories' => $topStories,
            'citizenshipPosts' => $citizenshipPosts,
            'residencePosts' => $residencePosts,
            'moreNews' => $moreNews,
            'digitalNomadPosts' => $digitalNomad,
            'skilledImmigrationPosts' => $skilledImmigrationPosts,
            'businessImmigrationPosts' => $businessImmigrationPosts,
            'posts' => session('posts') ?? []
        ]);
    }
}
