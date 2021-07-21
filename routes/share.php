<?php

use Domain\Items\Controllers\VisitorDeleteFileOrFolderController;
use Domain\Items\Controllers\VisitorMoveFileOrFolderController;
use Domain\Items\Controllers\VisitorRenameFileOrFolderController;
use Domain\Sharing\Controllers\ShareController;
use Domain\Sharing\Controllers\OGSiteController;
use Domain\Zipping\Controllers\EditorZipFilesController;
use Domain\Files\Controllers\VisitorUploadFilesController;
use Domain\Zipping\Controllers\EditorZipFolderController;
use Domain\Folders\Controllers\VisitorCreateFolderController;
use Domain\Files\Controllers\VisitorGetSingleFileInfoController;
use Domain\Browsing\Controllers\VisitorBrowseFolderContentController;
use Domain\Folders\Controllers\VisitorNavigationFolderTreeController;
use Domain\Browsing\Controllers\VisitorSearchFilesAndFoldersController;
use Domain\Sharing\Controllers\VisitorAuthenticateProtectedShareController;

// Browse functions
Route::group(['prefix' => 'editor'], function () {
    Route::post('/create-folder/{shared}', VisitorCreateFolderController::class);
    Route::post('/upload/{shared}', VisitorUploadFilesController::class);

    Route::patch('/rename/{id}/{shared}', VisitorRenameFileOrFolderController::class);
    Route::post('/remove/{shared}', VisitorDeleteFileOrFolderController::class);
    Route::post('/move/{shared}', VisitorMoveFileOrFolderController::class);
});

// Zip shared items
Route::group(['prefix' => 'zip'], function () {
    Route::get('/folder/{id}/{shared}', EditorZipFolderController::class);
    Route::post('/files/{shared}', EditorZipFilesController::class);
});

// Browse share content
Route::group(['prefix' => 'browse'], function () {
    Route::post('/authenticate/{shared}', VisitorAuthenticateProtectedShareController::class);
    Route::get('/folders/{id}/{shared}', VisitorBrowseFolderContentController::class);
    Route::get('/navigation/{shared}', VisitorNavigationFolderTreeController::class);
    Route::get('/search/{shared}', VisitorSearchFilesAndFoldersController::class);
    Route::get('/file/{shared}', VisitorGetSingleFileInfoController::class);
    Route::get('/share/{shared}', [ShareController::class, 'show']);
});

Route::get('/og-site/{shared}', OGSiteController::class);
