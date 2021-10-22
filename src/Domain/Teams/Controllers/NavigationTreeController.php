<?php
namespace Domain\Teams\Controllers;

use Domain\Folders\Models\Folder;
use Gate;

class NavigationTreeController
{
    public function __invoke(string $id): array
    {
        $teamFolder = Folder::findOrFail($id)->getLatestParent();

        if (! Gate::any(['can-edit', 'can-view'], [$teamFolder, null])) {
            abort(403, 'Access Denied');
        }

        $folders = Folder::with('folders:id,parent_id,id,name,team_folder')
            ->where('parent_id', $teamFolder->id)
            ->sortable()
            ->get(['id', 'parent_id', 'id', 'name', 'team_folder']);

        return [
            [
                'name'      => $teamFolder->name,
                'folders'   => $folders,
                'isMovable' => true,
            ],
        ];
    }
}
