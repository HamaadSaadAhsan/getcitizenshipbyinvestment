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
    public function index(){

        $categories = Category::where('parent_id', 0)->with('children')->get();
        $featuredNews = News::where('is_featured', true)->first();
        $topStories = News::where('is_featured', false)->inRandomOrder()->take(5)->get();

        $citizenshipCategory = Category::where('name', 'Citizenship')->first();
        $citizenshipPosts = Post::where('category_id', $citizenshipCategory?->id)->orderBy('created_at', 'desc')->take(2)->get();

        return Inertia::render('Home/Index', [
            'categories' => $categories,
            'featuredNews' => $featuredNews,
            'topStories' => $topStories,
            'citizenshipPosts' => $citizenshipPosts
        ]);
    }
}
