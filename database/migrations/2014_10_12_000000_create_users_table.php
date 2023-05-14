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
            $table->increments('id')->nullable()->comment('ユーザID');
            $table->string('name', 255)->nullable()->comment('ユーザ名');
            $table->string('profile_image', 255)->nullable()->comment('プロフィール画像');
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
        Schema::dropIfExists('users');
    }
};
