<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(){
        return Inertia::render("Posts/Index");
    }

    public function create(){
        $categories = Category::where('parent_id', 0)->select(['id', 'name'])->get();
        return Inertia::render('Posts/Create', [
            'categories' => $categories
        ]);
    }
}
