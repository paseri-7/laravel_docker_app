<?php

namespace App\Http\Services;

use App\Models\Post;

class PostService
{
    // public function createPost($text,$image, $user_id)
    public function createPost($text, $user_id)
    {
        // テキストと画像を使ってデータベースに投稿を作成するロジックを実装する
        // Postモデルを使ってデータベースに新しい投稿を作成する
        $post = new Post();
        $post->text = $text;

        // 画像の保存先のパス
        // $newPath ='img/' . $image->getClientOriginalName();

        // 画像を移動する
        // $image->move(public_path('img/'), $image->getClientOriginalName());

        // $post->post_image = $newPath;
        $post->user_id = $user_id;
        $post->created_at = now();
        $post->updated_at = now();
        $post->save();

        return $post;
    }
}
