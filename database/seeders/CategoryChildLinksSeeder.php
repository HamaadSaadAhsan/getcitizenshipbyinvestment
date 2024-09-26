<?php


namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Str;

class CategoryChildLinksSeeder extends Seeder
{
    public function run()
    {
        $newsCategory = DB::table('categories')->where('name', 'News')->first();

        if (!$newsCategory) {
            // If 'News' category doesn't exist, create it
            $newsCategory = DB::table('categories')->insertGetId([
                'name' => 'News',
                'slug' => 'news',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        } else {
            $newsCategory = $newsCategory->id;
        }

        $childLinks = [
            'Skilled Immigration',
            'Business Immigration',
            'Digital Nomad'
        ];

        foreach ($childLinks as $link) {
            DB::table('categories')->insert([
                'name' => $link,
                'slug' => Str::slug($link),
                'parent_id' => $newsCategory,
                'is_visible_on_nav' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
