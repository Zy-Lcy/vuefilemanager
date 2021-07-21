<?php
namespace Tests\Domain\Trash;

use Storage;
use Tests\TestCase;
use App\Users\Models\User;
use Laravel\Sanctum\Sanctum;
use Domain\Files\Models\File;
use Domain\Folders\Models\Folder;
use Illuminate\Http\UploadedFile;

class TrashTest extends TestCase
{
    /**
     * @test
     */
    public function it_restore_items_from_trash()
    {
        $user = User::factory(User::class)
            ->create();

        $attributes = [
            'user_id'    => $user->id,
            'deleted_at' => now(),
        ];

        $folder = Folder::factory(Folder::class)
            ->create($attributes);

        $file = File::factory(File::class)
            ->create($attributes);

        $this
            ->actingAs($user)
            ->postJson('/api/trash/restore', [
                'items' => [
                    [
                        'id'   => $file->id,
                        'type' => 'file',
                    ],
                    [
                        'id'   => $folder->id,
                        'type' => 'folder',
                    ],
                ],
            ])->assertStatus(204);

        $this->assertDatabaseHas('files', [
            'deleted_at' => null,
        ]);

        $this->assertDatabaseHas('folders', [
            'deleted_at' => null,
        ]);
    }

    /**
     * @test
     */
    public function it_dump_trash()
    {
        $user = User::factory(User::class)
            ->create();

        Sanctum::actingAs($user);

        $folder = Folder::factory(Folder::class)
            ->create([
                'user_id' => $user->id,
            ]);

        $image = UploadedFile::fake()
            ->image('fake-image.jpg');

        $this->postJson('/api/upload', [
            'filename'  => $image->name,
            'file'      => $image,
            'folder_id' => null,
            'is_last'   => 'true',
        ])->assertStatus(201);

        $file = File::first();

        $this->postJson('/api/remove', [
            'items' => [
                [
                    'id'           => $file->id,
                    'type'         => 'file',
                    'force_delete' => false,
                ],
                [
                    'id'           => $folder->id,
                    'type'         => 'folder',
                    'force_delete' => false,
                ],
            ],
        ])->assertStatus(204);

        $this->deleteJson('/api/trash/dump')
            ->assertStatus(204);

        $this->assertDatabaseMissing('files', [
            'id' => $file->id,
        ]);

        $this->assertDatabaseMissing('folders', [
            'id' => $folder->id,
        ]);

        $disk = Storage::disk('local');

        $disk->assertMissing(
            "files/$user->id/fake-image.jpg"
        );

        $disk->assertMissing(
            "files/$user->id/thumbnail-fake-image.jpg"
        );
    }
}