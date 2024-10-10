<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
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
        $categories = Category::where('parent_id', 0)
            ->with('children')
            ->select(['id', 'name'])
            ->get();

        return Inertia::render('Posts/Create', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:100',
            'description' => 'required|max:180',
            'category' => 'required|max:20',
            'content' => 'required',
            'subcategory' => Rule::requiredIf(function() use ($request)  {
                if($request->has('category'))
                {
                    $category = Category::whereName($request->category)->first();
                    return (bool)$category?->children->count();
                }else{
                    return false;
                }
            })
        ]);

        $post = auth()->user()->posts()->create([
            'slug' => Str::slug($request->title),
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->has('subcategory') && !is_null($request->subcategory) ? Category::where('name', $request->subcategory)->first()?->id : Category::where('name', $request->category)->first()?->id,
            'content' => $request->content,
            'status' => $request->status,
            'featured' => $request->featured ?? false
        ]);

        return redirect(route('admin.posts.show', ['post' => $post]));
    }

    public function show(Post $post){
        $categories = Category::where('parent_id', 0)->with('children')->get();
        $image = $post->image ? route('storage.images', ['filename' => $post->image]) : '';

        $post = [
            'id' => $post->id,
            'slug' => $post->slug,
            'title' => $post->title,
            'description' => $post->description,
            'category_id' => $post->category_id,
            'content' => $post->content,
            'status' => $post->status,
            'featured' => $post->featured,
            'category' => [
                'id' => $post->category->parent ? $post->category->parent->id : $post->category->parent_id,
                'name' => $post->category->parent ? $post->category->parent->name : $post->category->name
            ],
            'subcategory' => [
                'id' => $post->category->id,
                'name' => $post->category->name
            ],
            'subcategories' => $post->category?->parent?->children
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
            'description' => 'required|max:180',
            'category' => 'required|max:20',
            'content' => 'required',
            'subcategory' => Rule::requiredIf(function() use ($request)  {
                return $request->has('category') && Category::where('slug', Str::slug($request->category))->count();
            })
        ]);

        Post::whereFeatured(true)->update(['featured' => false]);

        $post->update([
            'slug' => Str::slug($request->title),
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->has('subcategory') ? Category::where('name', $request->subcategory)->first()?->id : Category::where('name', $request->category)->first()?->id,
            'content' => $request->content,
            'status' => $request->status,
            'featured' => $request->featured ?? false
        ]);

        return redirect(route('admin.posts.show', ['post' => $post]));
    }

    public function updateImage(Post $post, Request $request){
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,svg,webp',
        ]);

        // Remove previous image if it exists
        // Remove previous images with the same name (excluding extension)
        if ($post->image) {
            $oldImageNameWithoutExtension = pathinfo($post->image, PATHINFO_FILENAME);
            $oldImages = Storage::files("/images");
            foreach ($oldImages as $oldImage) {
                if (str_starts_with(basename($oldImage), $oldImageNameWithoutExtension)) {
                    Storage::delete($oldImage);
                }
            }
        }

        $image = $request->file('image');
        $imageName = time().'.'.$image->getClientOriginalExtension();

        // Store the image securely in the storage/app/public/images directory
        $path = $image->storeAs('/images', $imageName);

        $post->update([
            'image' => $imageName // Store the path in the database
        ]);

        return redirect(route('admin.posts.show', ['post' => $post]));
    }

    public function post_public_view($category, $slug){
        $post = Post::query()
            ->where(function ($query) {
                $query->where('status', 'published')
                    ->orWhere('status', 'draft');
            })
            ->with(['category', 'user'])
            ->whereHas('category', function($query) use ($category) {
                $query->where('slug', Str::slug($category));
            })
            ->where('slug', $slug)
            ->select('id', 'slug' ,'title', 'description', 'category_id', 'content', 'image', 'created_at', 'user_id') // Select necessary fields
            ->first();

        if (!$post) {
            abort(404);
        }

        $categories = Category::where('parent_id', 0)->with('children')->get();

        $post = [
            'id' => $post->id,
            'slug' => $post->slug,
            'title' => $post->title,
            'description' => $post->description,
            'image' => $post->image ? route('storage.images', ['filename' => $post->image]) : '',
            'posted_at' => $post->created_at->diffForHumans(),
            'posted_by' => $post->user->name,
            'category_id' => $post->category_id,
            'content' => $post->content,
            'category' => [
                'id' => $post->category->id,
                'name' => $post->category->name
            ],
            'user' => [
                'name' => $post->user->name,
                'email' => $post->user->email
            ],
            'created_at' => $post->created_at
        ];

        return Inertia::render("Posts/View", [
            'categories' =>  $categories,
            'post' => $post
        ]);
    }

    public function postsByCategory(Category $category)
    {
        $posts = $category->posts->take(3)->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'description' => $post->description,
                'image' => $post->image ? route('storage.images', ['filename' => $post->image]) : '',
                'slug' => $post->slug
            ];
        });

        return response()->json([
            'posts' => $posts
        ]);
    }

    public function test()
    {
        return Inertia::render('Test');
    }
}
