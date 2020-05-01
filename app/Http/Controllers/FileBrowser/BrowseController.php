<?php

namespace App\Http\Controllers\FileBrowser;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use App\FileManagerFolder;
use App\FileManagerFile;
use App\Share;

class BrowseController extends Controller
{

    /**
     * Get trashed files
     *
     * @return Collection
     */
    public function trash()
    {
        // Get user id
        $user_id = Auth::id();

        // Get folders and files
        $folders_trashed = FileManagerFolder::onlyTrashed()
            ->with(['trashed_folders'])
            ->where('user_id', $user_id)
            ->get(['parent_id', 'unique_id', 'name']);

        $folders = FileManagerFolder::onlyTrashed()
            ->where('user_id', $user_id)
            ->whereIn('unique_id', filter_folders_ids($folders_trashed))
            ->get();

        // Get files trashed
        $files_trashed = FileManagerFile::onlyTrashed()
            ->where('user_id', $user_id)
            ->whereNotIn('folder_id', array_values(array_unique(recursiveFind($folders_trashed->toArray(), 'unique_id'))))
            ->get();

        // Collect folders and files to single array
        return collect([$folders, $files_trashed])->collapse();
    }

    /**
     * Get user shared items
     *
     * @return Collection
     */
    public function shared()
    {
        // Get user
        $user_id = Auth::id();

        // Get shared folders and files
        $folder_ids = Share::where('user_id', $user_id)
            ->where('type', 'folder')
            ->pluck('item_id');

        $file_ids = Share::where('user_id', $user_id)
            ->where('type', '!=', 'folder')
            ->pluck('item_id');

        // Get folders and files
        $folders = FileManagerFolder::with(['parent', 'shared:token,id,item_id,permission,protected'])
            ->where('user_id', $user_id)
            ->whereIn('unique_id', $folder_ids)
            ->get();

        $files = FileManagerFile::with(['parent', 'shared:token,id,item_id,permission,protected'])
            ->where('user_id', $user_id)
            ->whereIn('unique_id', $file_ids)
            ->get();

        // Collect folders and files to single array
        return collect([$folders, $files])->collapse();
    }

    /**
     * Get directory with files
     *
     * @param Request $request
     * @param $unique_id
     * @return Collection
     */
    public function folder(Request $request, $unique_id)
    {
        // Get user
        $user_id = Auth::id();

        // Get folder trash items
        if ($request->query('trash')) {

            // Get folders and files
            $folders = FileManagerFolder::onlyTrashed()
                ->where('user_id', $user_id)
                ->with('parent')
                ->where('parent_id', $unique_id)
                ->get();

            $files = FileManagerFile::onlyTrashed()
                ->where('user_id', $user_id)
                ->with('parent')
                ->where('folder_id', $unique_id)
                ->get();

            // Collect folders and files to single array
            return collect([$folders, $files])->collapse();
        }

        // Get folders and files
        $folders = FileManagerFolder::with(['parent', 'shared:token,id,item_id,permission,protected'])
            ->where('user_id', $user_id)
            ->where('parent_id', $unique_id)
            ->get();

        $files = FileManagerFile::with(['parent', 'shared:token,id,item_id,permission,protected'])
            ->where('user_id', $user_id)
            ->where('folder_id', $unique_id)
            ->get();

        // Collect folders and files to single array
        return collect([$folders, $files])->collapse();
    }

    /**
     * Get user folder tree
     *
     * @return array
     */
    public function navigation_tree() {

        $folders = FileManagerFolder::with('folders:id,parent_id,unique_id,name')
            ->where('parent_id', 0)
            ->where('user_id', Auth::id())
            ->get(['id', 'parent_id', 'unique_id', 'name']);

        return [
            [
                'unique_id' => 0,
                'name'      => __('vuefilemanager.home'),
                'location'  => 'base',
                'folders'  => $folders,
            ]
        ];
    }

    /**
     * Search files
     *
     * @param Request $request
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function search(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'query' => 'required|string',
        ]);

        // Return error
        if ($validator->fails()) abort(400, 'Bad input');

        // Get user
        $user_id = Auth::id();

        // Search files id db
        $searched_files = FileManagerFile::search($request->input('query'))
            ->where('user_id', $user_id)
            ->get();
        $searched_folders = FileManagerFolder::search($request->input('query'))
            ->where('user_id', $user_id)
            ->get();

        // Collect folders and files to single array
        return collect([$searched_folders, $searched_files])->collapse();
    }

    /**
     * Get file record
     *
     * @param $unique_id
     * @return mixed
     */
    public function file_detail($unique_id)
    {
        // Get user id
        $user_id = Auth::id();

        return FileManagerFile::with(['shared:token,id,item_id,permission,protected'])
            ->where('user_id', $user_id)
            ->where('unique_id', $unique_id)
            ->firstOrFail();
    }
}