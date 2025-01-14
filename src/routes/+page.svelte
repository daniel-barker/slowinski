<script>
  import { Shield, Heart, Clock, Award, Users, Handshake, Medal } from 'lucide-svelte';
  import VideoHeader from '$lib/components/VideoHeader.svelte';
  import '../app.css';
</script>

<div class="flex flex-col">
  <section class="relative">
    <VideoHeader />
  </section>

  <!-- About Preview Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="relative">
          <div class="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
          <img src="images/ed.webp" alt="Ed Slowinski" class="relative rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-4">Personal Care from a Local Expert</h2>
          <p class="text-lg text-gray-600 mb-6">
            Hi, I'm Ed Slowinski, your dedicated Medicare specialist in Tonawanda, New York. Since 2015,
            I've been helping individuals and families find the right insurance solutions without feeling
            overwhelmed by the choices available.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            As part of Essential Solutions, I'm proud to lead a team of dedicated agents who share my
            commitment to exceptional service. We specialize in assisting veterans and individuals
            requiring income assistance.
          </p>
          <a href="/about" class="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
            Learn more about our team
            <svg class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section with Cards -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="bg-blue-100 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <Medal class="h-8 w-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold mb-3">Certified Healthcare Advisors</h3>
          <p class="text-gray-600">Our CHCA certification ensures you receive the highest standard of care and expertise</p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="bg-blue-100 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <Users class="h-8 w-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold mb-3">Veteran Assistance</h3>
          <p class="text-gray-600">Specialized support for veterans navigating their Medicare options</p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="bg-blue-100 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <Handshake class="h-8 w-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold mb-3">Local Support</h3>
          <p class="text-gray-600">Proudly serving Western New York from our office in Depew</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Understanding Medicare Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Understanding Medicare</h2>
        <p class="text-xl text-gray-600">
          Let us walk you through the winding maze of Medicare options to find the perfect coverage for your needs.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each ['Medicare Supplement Plans', 'Medicare Advantage Plans', 'Prescription Drug Plans', 'Dental & Vision Coverage'] as plan}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 class="text-lg font-semibold mb-2">{plan}</h3>
            <p class="text-gray-600">Learn more about your options and find the right coverage for your needs.</p>
            <a href="/services" class="text-blue-600 hover:text-blue-700 mt-4 inline-block group">
              Learn more
              <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-blue-600 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">The Green Apple Difference</h2>
        <p class="text-xl mb-8">
          Our Certified Healthcare Advisor (CHCA) designation sets the standard for excellence in Medicare advisory services.
          We're committed to providing comprehensive assessments and enrolling you in the plan that best fits your needs.
        </p>
        <button class="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
          Schedule a Consultation
        </button>
      </div>
    </div>
  </section>
</div>
