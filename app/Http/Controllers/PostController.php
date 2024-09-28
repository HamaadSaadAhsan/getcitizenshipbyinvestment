<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Str;

class PostController extends Controller
{
    public function index(){
        $posts = Auth::user()->posts()
            ->with('category')
            ->select('id', 'slug' ,'title', 'description', 'category_id', 'content' ,'status') // Select necessary fields
            ->get() // Get the collection
            ->map(function($post) {
                return [
                    'id' => $post->id,
                    'slug' => $post->slug,
                    'title' => $post->title,
                    'description' => $post->description,
                    'category_id' => $post->category_id,
                    'content' => $post->content,
                    'status' => $post->status,
                    'category' => [
                        'id' => $post->category->id,
                        'name' => $post->category->name
                    ]
                ];
            });
        return Inertia::render("Posts/Index", [
            'posts' => $posts
        ]);
    }

    public function create(){
        $categories = Category::where('parent_id', 0)->select(['id', 'name'])->get();
        return Inertia::render('Posts/Create', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:100',
            'description' => 'required|max:500',
            'category' => 'required|max:20',
            'content' => 'required'
        ]);

        $post = auth()->user()->posts()->create([
            'slug' => Str::slug($request->title),
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => Category::where('name', $request->category)->first()?->id,
            'content' => $request->content,
            'status' => $request->status
        ]);

        return redirect(route('admin.posts.show', ['post' => $post]));
    }

    public function show(Post $post){
        $categories = Category::where('parent_id', 0)->select(['id', 'name'])->get();
        $image = $post->image ? route('storage.images', ['filename' => $post->image]) : '';
        $post = [
            'id' => $post->id,
            'slug' => $post->slug,
            'title' => $post->title,
            'description' => $post->description,
            'category_id' => $post->category_id,
            'content' => $post->content,
            'status' => $post->status,
            'category' => [
                'id' => $post->category->id,
                'name' => $post->category->name
            ]
        ];

        return Inertia::render('Posts/Post', [
            'post' => $post,
            'image' => $image,
            'categories' => $categories
        ]);
    }

    public function update(Post $post, Request $request){
        $request->validate([
            'title' => 'required|max:100',
            'description' => 'required|max:500',
            'category' => 'required|max:20',
            'content' => 'required'
        ]);

        $post->update([
            'slug' => Str::slug($request->title),
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => Category::where('name', $request->category)->first()?->id,
            'content' => $request->content,
            'status' => $request->status
        ]);

        return redirect(route('admin.posts.show', ['post' => $post]));
    }

    public function updateImage(Post $post, Request $request){
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,svg',
        ]);

        // Remove previous image if it exists
        if ($post->image) {
            Storage::delete($post->image); // Delete the old image from storage
        }

        $image = $request->file('image');
        $imageName = time().'.'.$image->extension();

        // Store the image securely in the storage/app/public/images directory
        $path = $image->storeAs('/images', $imageName);

        $post->update([
            'image' => $imageName // Store the path in the database
        ]);

        return redirect(route('admin.posts.show', ['post' => $post]));
    }

    public function post_public_view($category, $slug){
        $post = Post::where('status', 'published')
            ->whereHas('category', function($query) use ($category) {
                $query->where('name', $category);
            })
            ->where('slug', $slug)
            ->with('category')
            ->select('id', 'slug' ,'title', 'description', 'category_id', 'content', 'image', 'created_at', 'user_id') // Select necessary fields
            ->first();

        if (!$post) {
            abort(404);
        }   

        $post = [
            'id' => $post->id,
            'slug' => $post->slug,
            'title' => $post->title,
            'description' => $post->description,
            'image' => route('storage.images', ['filename' => $post->image]),
            'posted_at' => $post->created_at->diffForHumans(),
            'posted_by' => $post->user->name,
            'category_id' => $post->category_id,
            'content' => $post->content,
            'category' => [
                'id' => $post->category->id,
                'name' => $post->category->name
            ]
        ];

        $categories = Category::where('parent_id', 0)->select(['id', 'name'])->get();

        return Inertia::render("Posts/View", [
            'categories' =>  Category::where('parent_id', 0)->select(['id', 'name'])->get(),
            'post' => $post
        ]);
    }
}
