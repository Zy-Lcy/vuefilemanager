<?php

namespace Tests\Feature\Share;

use App\Models\File;
use App\Models\Folder;
use App\Models\Share;
use App\Models\User;
use App\Models\Zip;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use App\Services\SetupService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Storage;
use Tests\TestCase;

class ShareEditorTest extends TestCase
{
    use DatabaseMigrations;

    public function __construct()
    {
        parent::__construct();
        $this->setup = app()->make(SetupService::class);
    }

    /**
     * @test
     */
    public function it_zip_shared_multiple_files()
    {
        Storage::fake('local');

        $this->setup->create_directories();

        $user = User::factory(User::class)
            ->create();

        $folder = Folder::factory(Folder::class)
            ->create([
                'user_id' => $user->id
            ]);

        collect([0, 1])
            ->each(function ($index) use ($folder, $user) {

                $file = UploadedFile::fake()
                    ->create(Str::random() . "-fake-file-$index.pdf", 1000, 'application/pdf');

                Storage::putFileAs("files/$user->id", $file, $file->name);

                File::factory(File::class)
                    ->create([
                        'filesize'  => $file->getSize(),
                        'folder_id' => $folder->id,
                        'user_id'   => $user->id,
                        'basename'  => $file->name,
                        'name'      => "fake-file-$index.pdf",
                    ]);
            });

        $share = Share::factory(Share::class)
            ->create([
                'item_id'      => $folder->id,
                'user_id'      => $user->id,
                'type'         => 'folder',
                'is_protected' => false,
            ]);

        $this->postJson("/api/zip/public/$share->token", [
            'items' => File::all()->pluck('id')
        ])->assertStatus(201);

        $this->assertDatabaseHas('zips', [
            'user_id'      => $user->id,
            'shared_token' => $share->token,
        ]);

        Storage::assertExists("zip/" . Zip::first()->basename);
    }

    /**
     * @test
     */
    public function it_try_zip_non_shared_file_with_already_shared_multiple_files()
    {
        $user = User::factory(User::class)
            ->create();

        $folder = Folder::factory(Folder::class)
            ->create([
                'user_id' => $user->id
            ]);

        File::factory(File::class)
            ->create([
                'folder_id' => $folder->id,
                'user_id'   => $user->id,
            ]);

        File::factory(File::class)
            ->create([
                'user_id' => $user->id,
            ]);

        $share = Share::factory(Share::class)
            ->create([
                'item_id'      => $folder->id,
                'user_id'      => $user->id,
                'type'         => 'folder',
                'is_protected' => false,
            ]);

        $this->postJson("/api/zip/public/$share->token", [
            'items' => File::all()->pluck('id')
        ])->assertStatus(403);
    }

    /**
     * @test
     */
    public function it_zip_shared_folder()
    {
        Storage::fake('local');

        $this->setup->create_directories();

        $user = User::factory(User::class)
            ->create();

        $root = Folder::factory(Folder::class)
            ->create([
                'user_id' => $user->id
            ]);

        $children = Folder::factory(Folder::class)
            ->create([
                'user_id'   => $user->id,
                'parent_id' => $root->id
            ]);

        collect([0, 1])
            ->each(function ($index) use ($children, $user) {

                $file = UploadedFile::fake()
                    ->create(Str::random() . "-fake-file-$index.pdf", 1000, 'application/pdf');

                Storage::putFileAs("files/$user->id", $file, $file->name);

                File::factory(File::class)
                    ->create([
                        'filesize'  => $file->getSize(),
                        'folder_id' => $children->id,
                        'user_id'   => $user->id,
                        'basename'  => $file->name,
                        'name'      => "fake-file-$index.pdf",
                    ]);
            });

        $share = Share::factory(Share::class)
            ->create([
                'item_id'      => $children->id,
                'user_id'      => $user->id,
                'type'         => 'folder',
                'is_protected' => false,
            ]);

        $this->getJson("/api/zip-folder/$children->id/public/$share->token")
            ->assertStatus(201);

        $this->assertDatabaseHas('zips', [
            'user_id'      => $user->id,
            'shared_token' => $share->token,
        ]);

        Storage::assertExists("zip/" . Zip::first()->basename);
    }

    /**
     * @test
     */
    public function it_try_zip_non_shared_folder()
    {
        Storage::fake('local');

        $this->setup->create_directories();

        $user = User::factory(User::class)
            ->create();

        $folder = Folder::factory(Folder::class)
            ->create([
                'user_id' => $user->id
            ]);

        $share = Share::factory(Share::class)
            ->create([
                'user_id'      => $user->id,
                'type'         => 'folder',
                'is_protected' => false,
            ]);

        $this->getJson("/api/zip-folder/$folder->id/public/$share->token")
            ->assertStatus(403);
    }
}
