<script>
  import { Shield, Heart, Users } from 'lucide-svelte';
</script>

<section class="relative bg-gradient-to-b from-blue-800 to-blue-600 py-24">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-blue-900 mix-blend-multiply"></div>
    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
        Medicare Coverage Solutions
      </h1>
      <div class="bg-blue-700/50 backdrop-blur-sm rounded-lg p-6 mb-8">
        <p class="text-xl text-gray-100">
          Navigate your Medicare options with confidence. We offer comprehensive coverage solutions tailored to your unique healthcare needs and budget.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
          <Shield class="h-5 w-5 text-blue-200 mr-2" />
          <span class="text-blue-100">CHCA Certified Advisors</span>
        </div>
        <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
          <Heart class="h-5 w-5 text-blue-200 mr-2" />
          <span class="text-blue-100">Personalized Solutions</span>
        </div>
        <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
          <Users class="h-5 w-5 text-blue-200 mr-2" />
          <span class="text-blue-100">Veterans Assistance</span>
        </div>
      </div>
    </div>
  </div>
</section>
