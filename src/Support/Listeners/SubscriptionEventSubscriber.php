<?php
namespace Support\Listeners;

use Illuminate\Events\Dispatcher;
use VueFileManager\Subscription\Support\Events\SubscriptionWasCreated;
use VueFileManager\Subscription\Support\Events\SubscriptionWasExpired;
use VueFileManager\Subscription\Support\Events\SubscriptionWasUpdated;

class SubscriptionEventSubscriber
{
    public function handleSubscriptionWasCreated($event)
    {
        $event->subscription->user->limitations()->update([
            'max_storage_amount' => $event->subscription->feature('max_storage_amount'),
            'max_team_members'   => $event->subscription->feature('max_team_members'),
        ]);
    }

    public function handleSubscriptionWasUpdated($event)
    {
        $event->subscription->user->limitations()->update([
            'max_storage_amount' => $event->subscription->feature('max_storage_amount'),
            'max_team_members'   => $event->subscription->feature('max_team_members'),
        ]);
    }

    public function handleSubscriptionWasExpired($event)
    {
        $event->subscription->user->limitations()->update([
            'max_storage_amount' => get_settings('default_max_storage_amount') ?? 5,
            'max_team_members'   => 5,
        ]);
    }

    /**
     * Register the listeners for the subscriber.
     */
    public function subscribe(Dispatcher $events): array
    {
        return [
            SubscriptionWasCreated::class => 'handleSubscriptionWasCreated',
            SubscriptionWasExpired::class => 'handleSubscriptionWasExpired',
            SubscriptionWasUpdated::class => 'handleSubscriptionWasUpdated',
        ];
    }
}
