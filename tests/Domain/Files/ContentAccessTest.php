<?php
namespace Tests\Domain\Files;

use Storage;
use Tests\TestCase;
use App\Users\Models\User;
use Illuminate\Support\Str;
use Laravel\Sanctum\Sanctum;
use Domain\Files\Models\File;
use Domain\Folders\Models\Folder;
use Illuminate\Http\UploadedFile;

class ContentAccessTest extends TestCase
{
    /**
     * @test
     */
    public function it_get_public_user_avatar()
    {
        $avatar = UploadedFile::fake()
            ->image('fake-avatar.jpg');

        Storage::putFileAs('avatars', $avatar, 'fake-avatar.jpg');

        $this->get('avatars/fake-avatar.jpg')
            ->assertStatus(200);

        Storage::assertExists('avatars/fake-avatar.jpg');
    }

    /**
     * @test
     */
    public function it_get_public_system_image()
    {
        $system = UploadedFile::fake()
            ->image('fake-logo.jpg');

        Storage::putFileAs('system', $system, 'fake-logo.jpg');

        $this->get('system/fake-logo.jpg')
            ->assertStatus(200);

        Storage::assertExists('system/fake-logo.jpg');
    }

    /**
     * @test
     */
    public function it_get_private_user_file()
    {
        $user = User::factory(User::class)
            ->create();

        $file = UploadedFile::fake()
            ->create(Str::random() . '-fake-file.pdf', 1200, 'application/pdf');

        Storage::putFileAs("files/$user->id", $file, $file->name);

        File::factory(File::class)
            ->create([
                'user_id'  => $user->id,
                'basename' => $file->name,
                'name'     => 'fake-file.pdf',
            ]);

        $this
            ->actingAs($user)
            ->get("file/$file->name")
            ->assertOk();
    }

    /**
     * @test
     */
    public function it_get_private_user_image_thumbnail()
    {
        $user = User::factory(User::class)
            ->create();

        $thumbnail = UploadedFile::fake()
            ->image(Str::random() . '-fake-thumbnail.jpg');

        Storage::putFileAs("files/$user->id", $thumbnail, $thumbnail->name);

        File::factory(File::class)
            ->create([
                'user_id'   => $user->id,
                'thumbnail' => $thumbnail->name,
                'name'      => 'fake-thumbnail.jpg',
            ]);

        $this
            ->actingAs($user)
            ->get("thumbnail/$thumbnail->name")
            ->assertStatus(200);
    }

    /**
     * @test
     */
    public function logged_user_try_to_get_another_private_user_image_thumbnail()
    {
        $users = User::factory(User::class)
            ->count(2)
            ->create();

        $thumbnail = UploadedFile::fake()
            ->image(Str::random() . '-fake-thumbnail.jpg');

        Storage::putFileAs("files/{$users[0]->id}", $thumbnail, $thumbnail->name);

        File::factory(File::class)
            ->create([
                'user_id'   => $users[0]->id,
                'thumbnail' => $thumbnail->name,
                'name'      => 'fake-thumbnail.jpg',
            ]);

        $this->actingAs($users[1])
            ->get("thumbnail/$thumbnail->name")
            ->assertForbidden();
    }

    /**
     * @test
     */
    public function logged_user_try_to_get_another_private_user_file()
    {
        $users = User::factory(User::class)
            ->count(2)
            ->create();

        $file = UploadedFile::fake()
            ->create(Str::random() . '-fake-file.pdf', 1200, 'application/pdf');

        Storage::putFileAs("files/{$users[0]->id}", $file, $file->name);

        File::factory(File::class)
            ->create([
                'user_id'  => $users[0]->id,
                'basename' => $file->name,
                'name'     => 'fake-file.pdf',
            ]);

        $this->actingAs($users[1])
            ->get("file/$file->name")
            ->assertForbidden();
    }

    /**
     * @test
     */
    public function guest_try_to_get_private_user_file()
    {
        $this->get('file/fake-file.pdf')
            ->assertRedirect();
    }

    /**
     * @test
     */
    public function guest_try_to_get_private_user_image_thumbnail()
    {
        $this->get('thumbnail/fake-thumbnail.jpg')
            ->assertRedirect();
    }

    /**
     * @test
     */
    public function guest_try_to_get_private_user_folder()
    {
        $folder = Folder::factory(Folder::class)
            ->create();

        $this->getJson("/api/browse/folders/$folder->id")
            ->assertUnauthorized();
    }
}
