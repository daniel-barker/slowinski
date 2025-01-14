<script>
  import { Eye, Heart, Shield } from 'lucide-svelte';

  const services = [
    {
      title: "Dental Coverage",
      icon: Shield,
      description: "Comprehensive dental care including preventive, basic, and major services.",
      benefits: [
        "Regular cleanings and check-ups",
        "Basic procedures and fillings",
        "Major services like crowns and bridges",
        "Access to large dental networks"
      ]
    },
    {
      title: "Vision Coverage",
      icon: Eye,
      description: "Keep your vision sharp with coverage for exams, glasses, and contacts.",
      benefits: [
        "Annual eye examinations",
        "Prescription eyewear coverage",
        "Contact lens allowance",
        "Discounts on laser vision correction"
      ]
    },
    {
      title: "Life Insurance",
      icon: Heart,
      description: "Protect your loved ones with term life and final expense insurance options.",
      benefits: [
        "Term life insurance policies",
        "Final expense coverage",
        "Simplified issue options",
        "Flexible coverage amounts"
      ]
    }
  ];
</script>

<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Additional Coverage Options</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Enhance your Medicare coverage with additional protection for dental, vision, and more.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each services as service}
        <div class="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex flex-col items-center text-center">
            <div class="bg-blue-100 rounded-full p-4 mb-6">
              <svelte:component this={service.icon} class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{service.title}</h3>
            <p class="text-gray-600 mb-6">{service.description}</p>
            <ul class="space-y-3 text-left w-[75%]">
              {#each service.benefits as benefit}
                <li class="flex items-start">
                  <span class="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2 mt-2"></span>
                  <span class="text-gray-700">{benefit}</span>
                </li>
              {/each}
            </ul>
            <button class="mt-6 text-blue-600 font-medium hover:text-blue-800">
              Learn more about {service.title}
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
