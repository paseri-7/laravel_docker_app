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
        Schema::create('users', function (Blueprint $table) {
            $table->id()->comment('ユーザID');
            $table->string('name', 255)->unique()->nullable()->comment('ユーザ名');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('profile_image', 255)->nullable()->comment('プロフィール画像');
            $table->string('password')->nullable()->comment('パスワード');
            $table->string('comment', 255)->nullable()->comment('コメント');
            $table->timestamp('created_at')->nullable()->comment('ユーザ作成日');
            $table->timestamp('updated_at')->nullable()->comment('ユーザ更新日');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
        Schema::dropIfExists('users');
    }
};
