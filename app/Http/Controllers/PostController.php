<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;
use App\Http\Services\PostService;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the post lists
     */
    public function index(Request $request)
    {
        $postServices = new PostService();

        // テキストを取得
        $text = $request->input('text');
        // ユーザIDを取得
        $user_id = $request->input('id');
        // 画像を取得
        if($request->hasFile('image')) {
            $image = $request->file('image');
        }else {
            $image = null;
        }

        $postServices->createPost($text, $image, $user_id);
        
        return response()->json(['message' => '投稿が作成されました']);
    }
}