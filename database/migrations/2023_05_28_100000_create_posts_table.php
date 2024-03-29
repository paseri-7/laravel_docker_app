<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id()->comment('ツイートid');
            //usersテーブルにおけるidの外部キー
            $table->foreignId('user_id')->nullable()->constrained();
            $table->string('text', 255)->nullable()->comment('テキストコンテンツ');
            // $table->string('post_image', 255)->nullable()->comment('画像コンテンツ');
            $table->integer('parent_tweet_id')->nullable()->comment('元ツイートid');
            $table->timestamp('created_at')->nullable()->comment('ツイート作成日');
            $table->timestamp('updated_at')->nullable()->comment('ツイート更新日');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
