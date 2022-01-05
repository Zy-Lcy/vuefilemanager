<?php
namespace App\Limitations\Engines;

use App\Users\Models\User;
use App\Limitations\LimitationEngine;

class FixedBillingLimitationEngine implements LimitationEngine
{
    public function canUpload(User $user, int $fileSize = 0): bool
    {
        // Get used capacity
        $usedPercentage = get_storage_percentage(
            used: $user->usedCapacity + $fileSize,
            maxAmount: $user->limitations->max_storage_amount,
        );

        // Check if storage usage exceed predefined capacity
        return ! ($usedPercentage >= 100)
         ;
    }

    public function canDownload(User $user): bool
    {
        return true;
    }

    public function canCreateFolder(User $user): bool
    {
        return true;
    }
}
