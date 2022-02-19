<?php
namespace Domain\UploadRequest\Controllers\FileAccess;

use Domain\Files\Actions\DownloadFileAction;
use Domain\Sharing\Actions\ProtectShareRecordAction;
use Domain\Sharing\Actions\VerifyAccessToItemWithinAction;
use Domain\Traffic\Actions\RecordDownloadAction;
use Domain\UploadRequest\Models\UploadRequest;
use Gate;
use Domain\Files\Models\File;
use Illuminate\Http\Response;
use Domain\Sharing\Models\Share;
use Domain\Files\Resources\FileResource;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/**
 * Get shared file record
 */
class GetFileFromUploadRequestController
{
    public function __construct(
        private DownloadFileAction $downloadFile,
        private RecordDownloadAction $recordDownload,
    ) {
    }

    public function __invoke(
        string $filename,
        UploadRequest $uploadRequest
    ): BinaryFileResponse {
        // Get file
        $file = File::where('user_id', $uploadRequest->user_id)
            ->where('basename', $filename)
            ->firstOrFail();

        // Store user download size
        ($this->recordDownload)(
            file_size: (int) $file->getRawOriginal('filesize'),
            user_id: $uploadRequest->user_id,
        );

        // Finally, download file
        return ($this->downloadFile)($file, $uploadRequest->user_id);
    }
}
