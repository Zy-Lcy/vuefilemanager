<?php
namespace Domain\Items\Actions;

use Domain\Folders\Models\Folder;
use Domain\Files\Models\File as UserFile;

class MoveFileOrFolderAction
{
    /**
     * Move folder or file to new location
     */
    public function __invoke($request, string $to_id): void
    {
        foreach ($request->items as $item) {
            // Move folder
            if ($item['type'] === 'folder') {
                Folder::find($item['id'])
                    ->update(['parent_id' => $to_id]);
            }

            // Move file
            if ($item['type'] !== 'folder') {
                UserFile::find($item['id'])
                    ->update(['folder_id' => $to_id]);
            }
        }
    }
}