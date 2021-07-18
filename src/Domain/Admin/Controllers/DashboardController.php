<?php
namespace Domain\Admin\Controllers;

use Domain\Settings\Models\User;
use ByteUnits\Metric;
use Domain\SetupWizard\Services\StripeService;
use Laravel\Cashier\Subscription;
use App\Http\Controllers\Controller;
use Domain\Admin\Resources\UsersCollection;

class DashboardController extends Controller
{
    ;

    public function __construct(
        private StripeService $stripe
    ) {}

    /**
     * Get data for dashboard
     *
     * @return array
     */
    public function index()
    {
        // Get total premium users
        $premium_users = Subscription::whereStripeStatus('active')
            ->count();

        // Get total storage usage
        $storage_usage = Metric::bytes(
            \DB::table('files')->sum('filesize')
        )->format();

        return [
            'license'             => get_setting('license'),
            'app_version'         => config('vuefilemanager.version'),
            'total_users'         => User::count(),
            'total_used_space'    => $storage_usage,
            'total_premium_users' => $premium_users,
        ];
    }

    /**
     * Get the newest users
     *
     * @return UsersCollection
     */
    public function newbies()
    {
        return new UsersCollection(
            User::sortable(['created_at' => 'desc'])
                ->paginate(10)
        );
    }
}
