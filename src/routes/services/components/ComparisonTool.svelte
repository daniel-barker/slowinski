<script>
  import { Check, X, Info } from 'lucide-svelte';

  let selectedPlans = ['medigap', 'advantage'];

  const plans = {
    medigap: {
      name: 'Medicare Supplement (Medigap)',
      features: {
        'Monthly Premium': 'Higher premiums',
        'Deductibles/Copays': 'Most costs covered',
        'Doctor Choice': 'Any Medicare doctor',
        'Referrals Needed': 'No',
        'Out-of-Pocket Limit': 'No annual limit',
        'Prescription Coverage': 'Separate Part D needed',
        'Extra Benefits': 'No additional benefits',
        'Network Restrictions': 'No network restrictions',
        'Travel Coverage': 'Coverage anywhere in US'
      }
    },
    advantage: {
      name: 'Medicare Advantage',
      features: {
        'Monthly Premium': 'Lower/zero premiums',
        'Deductibles/Copays': 'Varies by service',
        'Doctor Choice': 'Network providers',
        'Referrals Needed': 'Usually',
        'Out-of-Pocket Limit': 'Annual limit applies',
        'Prescription Coverage': 'Usually included',
        'Extra Benefits': 'Often includes dental/vision',
        'Network Restrictions': 'Network based',
        'Travel Coverage': 'Emergency only'
      }
    },
    original: {
      name: 'Original Medicare',
      features: {
        'Monthly Premium': 'Standard premiums',
        'Deductibles/Copays': 'You pay 20% of costs',
        'Doctor Choice': 'Any Medicare doctor',
        'Referrals Needed': 'No',
        'Out-of-Pocket Limit': 'No annual limit',
        'Prescription Coverage': 'Separate Part D needed',
        'Extra Benefits': 'No additional benefits',
        'Network Restrictions': 'No network restrictions',
        'Travel Coverage': 'Limited coverage'
      }
    }
  };

  function handlePlanToggle(planId) {
    selectedPlans = selectedPlans.includes(planId)
      ? selectedPlans.filter(p => p !== planId)
      : selectedPlans.length < 2
        ? [...selectedPlans, planId]
        : selectedPlans;
  }

  function renderIcon(text) {
    if (text.toLowerCase().includes('no')) return X;
    if (text.toLowerCase().includes('yes')) return Check;
    return null;
  }
</script>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Compare Medicare Plans</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Compare different Medicare plans side by side to find the coverage that best fits your needs.
      </p>
    </div>

    <div class="mb-8 flex flex-wrap gap-4 justify-center">
      {#each Object.entries(plans) as [id, plan]}
        <button
          on:click={() => handlePlanToggle(id)}
          class="px-4 py-2 rounded-lg font-medium transition-colors {
            selectedPlans.includes(id)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }"
        >
          {plan.name}
        </button>
      {/each}
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left p-4 bg-gray-50">Features</th>
            {#each selectedPlans as planId}
              <th class="text-left p-4 bg-gray-50 min-w-[200px]">
                {plans[planId].name}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each Object.keys(plans.medigap.features) as feature}
            <tr class="border-t">
              <td class="p-4 bg-gray-50 font-medium">
                <div class="flex items-center">
                  {feature}
                  <Info class="h-4 w-4 text-gray-400 ml-2" />
                </div>
              </td>
              {#each selectedPlans as planId}
                <td class="p-4">
                  <div class="flex items-center">
                    {#if renderIcon(plans[planId].features[feature])}
                      <svelte:component
                        this={renderIcon(plans[planId].features[feature])}
                        class="h-5 w-5 {plans[planId].features[feature].toLowerCase().includes('no') ? 'text-red-500' : 'text-green-500'}"
                      />
                    {/if}
                    <span class="ml-2">{plans[planId].features[feature]}</span>
                  </div>
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="mt-8 text-center">
      <p class="text-gray-600 mb-4">Need help choosing the right plan?</p>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Schedule a Free Consultation
      </button>
    </div>
  </div>
</section>
