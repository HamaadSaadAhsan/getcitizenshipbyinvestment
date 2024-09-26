<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    // Index Page
    public function index(){

        $categories = Category::all();
        $featuredNews = News::where('is_featured', true)->first();
        $topStories = News::where('is_featured', false)->inRandomOrder()->take(5)->get();

        return Inertia::render('Home/Index', [
            'categories' => $categories,
            'featuredNews' => $featuredNews,
            'topStories' => $topStories,
        ]);
    }
}
