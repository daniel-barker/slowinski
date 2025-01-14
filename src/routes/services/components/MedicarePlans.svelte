<script>
  import { Shield, PlusCircle, Pill, Sparkles } from 'lucide-svelte';

  const plans = [
    {
      title: "Medicare Supplement Plans (Medigap)",
      icon: Shield,
      description: "Fill the gaps in Original Medicare coverage with standardized plans that help pay for deductibles, copayments, and coinsurance.",
      features: [
        "Standardized benefits across all states",
        "Freedom to choose any doctor that accepts Medicare",
        "No network restrictions",
        "Guaranteed renewable coverage"
      ]
    },
    {
      title: "Medicare Advantage Plans",
      icon: PlusCircle,
      description: "All-in-one plans that combine Original Medicare coverage with additional benefits like dental, vision, and prescription drugs.",
      features: [
        "Often includes prescription drug coverage",
        "Additional benefits not covered by Original Medicare",
        "Coordinated medical care",
        "Annual out-of-pocket maximum protection"
      ]
    },
    {
      title: "Prescription Drug Plans (Part D)",
      icon: Pill,
      description: "Stand-alone prescription drug coverage that helps cover the cost of your medications under Medicare Part D.",
      features: [
        "Coverage for brand name and generic drugs",
        "Multiple plan options available",
        "Medicare-approved drug formularies",
        "Annual plan reviews and updates"
      ]
    },
    {
      title: "Special Needs Plans",
      icon: Sparkles,
      description: "Specialized Medicare Advantage plans designed for individuals with specific diseases or characteristics.",
      features: [
        "Tailored benefits and drug formularies",
        "Coordinated care for chronic conditions",
        "Specialized provider networks",
        "Additional support services"
      ]
    }
  ];
</script>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Medicare Coverage Options</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        We offer a comprehensive range of Medicare plans to ensure you get the coverage that best fits your healthcare needs and budget.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each plans as plan}
        <div class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-start">
            <div class="bg-blue-100 rounded-full p-3 mr-4">
              <svelte:component this={plan.icon} class="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{plan.title}</h3>
              <p class="text-gray-600 mb-4">{plan.description}</p>
              <ul class="space-y-2">
                {#each plan.features as feature}
                  <li class="flex items-center">
                    <span class="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                    <span class="text-gray-700">{feature}</span>
                  </li>
                {/each}
              </ul>
              <button class="mt-6 text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
