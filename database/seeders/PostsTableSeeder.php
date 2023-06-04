<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            [
                'id' => 1,
                'user_id' => 1,
                'text' => 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                'post_image' => '/img/bird.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'user_id' => 1,
                'text' => 'bbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                'post_image' => '/img/bird.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
