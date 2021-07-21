<?php
namespace Domain\Items\Controllers;

use Auth;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Domain\Items\Requests\MoveItemRequest;
use Domain\Items\Actions\MoveFileOrFolderAction;

class MoveFileOrFolderController extends Controller
{
    /**
     * Move item for authenticated master|editor user
     */
    public function __invoke(
        MoveItemRequest $request,
        MoveFileOrFolderAction $moveFileOrFolder,
    ): Response {
        abort_if(
            is_demo_account(Auth::user()?->email),
            204,
            'Done.'
        );

        ($moveFileOrFolder)(
            $request,
            $request->input('to_id')
        );

        return response('Done!', 204);
    }
}