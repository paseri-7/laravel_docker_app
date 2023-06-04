<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';

    protected $fillable = [
        'id',
        'user_id',
        'text',
        'profile_image',
        'parent_tweet_id',
        'created_at',
        'updated_at',
    ];

    // 他の関数やリレーションシップの定義があればここに追加します
}
