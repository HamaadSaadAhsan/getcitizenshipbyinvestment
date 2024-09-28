<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Post;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $image = $request->file('image');
        $name = $image->getClientOriginalName();
        $path = $image->storeAs('images', $name, 'public');
        
        Image::create([
            'name' => $name,
            'path' => $path,
            'url' => asset("storage/{$path}")
        ]);

        return response()->json([
            'name' => $name,
            'path' => $path,
            'url' => asset("storage/{$path}")
        ]);
    }
}
