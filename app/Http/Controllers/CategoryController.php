<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show($slug)
    {
        $category = Category::firstWhere('slug', $slug);

        if(!$category){
            abort(404);
        }

        $categories = Category::where('parent_id', 0)->with('children')->get();
        return Inertia::render("Category/View", [
            'categories' => $categories,
            'category' => $category
        ]);
    }

    public function list(Request $request){
        $categories = Category::where('parent_id', 0)->with('children')->get();

        $categories = $categories->map(function ($category){
           return [
               'name' => $category->name,
               'value' => $category->slug
           ];
        });

        return response()->json([
            'categories' => $categories
        ]);
    }
}
