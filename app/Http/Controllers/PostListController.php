<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;
use App\Http\Services\PostListService;
use Illuminate\Http\Request;

class PostListController extends Controller
{
    /**
     * Display a listing of the post lists
     */
    public function index()
    {
        $postListServices = new PostListService();
        $posts = $postListServices->index();
        return Inertia::render('PostList', ['posts' => $posts]);
    }
}