<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Str;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Seed Categories
        $categories = ['World', 'Politics', 'Technology', 'Science', 'Health', 'Sports', 'Entertainment', 'Business'];
        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category,
                'slug' => Str::slug($category),
                'parent_id' => (bool) true,
                'is_visible_on_nav' => (bool) true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

         // Seed Featured News
         DB::table('news')->insert([
            'title' => 'Breaking: Major Scientific Discovery',
            'slug' => Str::slug('Breaking: Major Scientific Discovery'),
            'summary' => 'Scientists announce a groundbreaking discovery that could revolutionize our understanding of the universe.',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'category_id' => DB::table('categories')->where('name', 'Science')->first()->id,
            'is_featured' => true,
            'tags' => 'science, discovery, universe', // Added tags field
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Seed Top Stories
        $topStories = [
            'New Climate Policy Announced',
            'Tech Giant Launches Revolutionary Product',
            'Global Economic Summit Concludes',
            'Breakthrough in Renewable Energy',
            'International Space Mission Takes Off',
        ];

        foreach ($topStories as $story) {
            DB::table('news')->insert([
                'title' => $story,
                'slug' => Str::slug($story),
                'summary' => 'This is a summary of the ' . $story . ' article.',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'category_id' => DB::table('categories')->inRandomOrder()->first()->id,
                'is_featured' => false,
                'tags' => 'top story', // Added tags field
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
