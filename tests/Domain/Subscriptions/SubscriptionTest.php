<?php
namespace Tests\Domain\Subscriptions;

use Tests\TestCase;
use App\Users\Models\User;
use Laravel\Sanctum\Sanctum;

class SubscriptionTest extends TestCase
{
    private User $user;

    private array $plan;

    private array $billing;

    public function __construct()
    {
        parent::__construct();

        // Define test user
        $this->user = [
            'email'          => 'howdy@hi5ve.digital',
            'stripe_id'      => 'cus_HgbhvNCbSwV8Qg',
            'card_brand'     => 'visa',
            'card_last_four' => 4242,
        ];

        // Define test plan to subscribe
        $this->plan = [
            'data' => [
                'id'         => 'business-pack',
                'type'       => 'plans',
                'attributes' => [
                    'name'               => 'Business Packs',
                    'description'        => 'When your business start grow up.',
                    'price'              => '$44.99',
                    'capacity'           => 1000,
                    'capacity_formatted' => '1TB',
                    'currency'           => 'USD',
                    'tax_rates'          => [],
                ],
            ],
        ];

        // Define test billing to subscribe
        $this->billing = [
            'billing_address'      => '2794 Alfreda Mount Suite 467 East Crystalberg',
            'billing_city'         => 'Christianfort',
            'billing_country'      => 'SK',
            'billing_name'         => 'Heidi Romaguera PhD',
            'billing_phone_number' => '+421',
            'billing_postal_code'  => '59445',
            'billing_state'        => 'SK',
        ];
    }

    /**
     *
     */
    public function it_get_setup_intent()
    {
        $user = User::factory(User::class)
            ->create();

        $this
            ->actingAs($user)
            ->getJson('/api/user/subscription/setup-intent')
            ->assertStatus(201)
            ->assertJsonFragment([
                'object' => 'setup_intent',
            ]);

        $this->assertDatabaseMissing('users', [
            'stripe_id' => null,
        ]);
    }

    /**
     *
     */
    public function it_upgrade_plan()
    {
        $user = User::factory(User::class)
            ->create($this->user);

        $this
            ->actingAs($user)
            ->postJson('/api/user/subscription/upgrade', [
                'billing' => $this->billing,
                'plan'    => $this->plan,
                'payment' => [
                    'type' => 'stripe',
                ],
            ])->assertStatus(204);

        $this->assertDatabaseHas('subscriptions', [
            'stripe_status' => 'active',
        ]);

        $this->assertDatabaseHas('user_settings', [
            'storage_capacity' => 1000,
        ]);
    }

    /**
     *
     */
    public function it_cancel_subscription()
    {
        $user = User::factory(User::class)
            ->create($this->user);

        Sanctum::actingAs($user);

        $this->postJson('/api/user/subscription/upgrade', [
            'billing' => $this->billing,
            'plan'    => $this->plan,
            'payment' => [
                'type' => 'stripe',
            ],
        ])->assertStatus(204);

        $this->postJson('/api/user/subscription/cancel')
            ->assertStatus(204);

        $this->assertDatabaseMissing('subscriptions', [
            'ends_at' => null,
        ]);
    }

    /**
     *
     */
    public function it_resume_subscription()
    {
        $user = User::factory(User::class)
            ->create($this->user);

        Sanctum::actingAs($user);

        $this->postJson('/api/user/subscription/upgrade', [
            'billing' => $this->billing,
            'plan'    => $this->plan,
            'payment' => [
                'type' => 'stripe',
            ],
        ])->assertStatus(204);

        $this->postJson('/api/user/subscription/cancel')
            ->assertStatus(204);

        $this->postJson('/api/user/subscription/resume')
            ->assertStatus(204);

        $this->assertDatabaseHas('subscriptions', [
            'ends_at' => null,
        ]);
    }

    /**
     *
     */
    public function it_get_user_subscription_details()
    {
        $user = User::factory(User::class)
            ->create($this->user);

        Sanctum::actingAs($user);

        $this->postJson('/api/user/subscription/upgrade', [
            'billing' => $this->billing,
            'plan'    => $this->plan,
            'payment' => [
                'type' => 'stripe',
            ],
        ])->assertStatus(204);

        $this->getJson('/api/user/subscription')
            ->assertStatus(200)
            ->assertExactJson([
                'data' => [
                    'id'         => 'business-pack',
                    'type'       => 'subscription',
                    'attributes' => [
                        'incomplete'         => false,
                        'active'             => true,
                        'canceled'           => false,
                        'name'               => 'Business Packs',
                        'capacity'           => 1000,
                        'capacity_formatted' => '1TB',
                        'slug'               => 'business-pack',
                        'canceled_at'        => format_date(now(), '%d. %B. %Y'),
                        'created_at'         => format_date(now(), '%d. %B. %Y'),
                        'ends_at'            => format_date(now()->addMonth(), '%d. %B. %Y'),
                    ],
                ],
            ]);
    }
}