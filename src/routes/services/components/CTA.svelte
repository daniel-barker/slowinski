<!-- src/routes/services/components/CTA.svelte -->
<script>
  import { PhoneCall, Calendar, Mail } from 'lucide-svelte';
</script>

<section class="relative bg-blue-600 py-16">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-600"></div>
    <div
      class="absolute inset-0 opacity-20"
      style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"
    >
    </div>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white mb-4">
        Ready to Find Your Perfect Medicare Coverage?
      </h2>
      <p class="text-xl text-blue-100 max-w-2xl mx-auto">
        Get personalized guidance from our CHCA-certified Medicare advisors. We're here to help you make an informed decision about your healthcare coverage.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
        <div class="inline-block bg-white/20 rounded-full p-3 mb-4">
          <PhoneCall class="h-6 w-6 text-white" />
        </div>
        <h3 class="text-white font-semibold mb-2">Call Us</h3>
        <p class="text-blue-100 mb-4">Speak directly with a Medicare advisor</p>
        <a
          href="tel:+17164007412"
          class="inline-block text-white hover:text-blue-200 font-medium"
        >
          (716) 400-7412
        </a>
      </div>

      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
        <div class="inline-block bg-white/20 rounded-full p-3 mb-4">
          <Calendar class="h-6 w-6 text-white" />
        </div>
        <h3 class="text-white font-semibold mb-2">Schedule Meeting</h3>
        <p class="text-blue-100 mb-4">Book a free consultation</p>
        <button class="text-white hover:text-blue-200 font-medium">
          Choose a Time
        </button>
      </div>

      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
        <div class="inline-block bg-white/20 rounded-full p-3 mb-4">
          <Mail class="h-6 w-6 text-white" />
        </div>
        <h3 class="text-white font-semibold mb-2">Email Us</h3>
        <p class="text-blue-100 mb-4">Send us your questions</p>
        <a
          href="mailto:Edward@SlowinskiServices.com"
          class="text-white hover:text-blue-200 font-medium"
        >
          Edward@SlowinskiServices.com
        </a>
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-blue-100 mb-2">Available by appointment outside office hours</p>
      <p class="text-blue-100 font-medium">Office Hours: 10am - 2pm</p>
    </div>
  </div>
</section>
