<?php
namespace Domain\Teams\Controllers;

use Domain\Teams\Actions\CheckMaxTeamMembersLimitAction;
use Domain\Teams\Models\TeamFolderMember;
use Illuminate\Http\Response;
use Domain\Folders\Models\Folder;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Routing\ResponseFactory;
use Domain\Teams\Requests\ConvertIntoTeamFolderRequest;
use Domain\Teams\Actions\InviteMembersIntoTeamFolderAction;
use Domain\Teams\Actions\SetTeamFolderPropertyForAllChildrenAction;

class ConvertFolderIntoTeamFolderController extends Controller
{
    public function __construct(
        public InviteMembersIntoTeamFolderAction $inviteMembers,
        public CheckMaxTeamMembersLimitAction $checkMaxTeamMembersLimit,
        public SetTeamFolderPropertyForAllChildrenAction $setTeamFolderPropertyForAllChildren,
    ) {
    }

    public function __invoke(
        ConvertIntoTeamFolderRequest $request,
        Folder $folder
    ): ResponseFactory|Response {
        // Check if user didn't exceed max team members limit
        ($this->checkMaxTeamMembersLimit)($request->input('invitations'), $folder->owner);

        // Update root team folder
        $folder->update([
            'team_folder' => 1,
            'parent_id'   => null,
        ]);

        // Mark all children folders as team folder
        ($this->setTeamFolderPropertyForAllChildren)($folder, true);

        // Attach owner into members
        TeamFolderMember::create([
            'parent_id'  => $folder->id,
            'user_id'    => $folder->user_id,
            'permission' => 'owner',
        ]);

        // Invite team members
        ($this->inviteMembers)($request->input('invitations'), $folder);

        return response($folder, 201);
    }
}
