<!-- src/routes/+layout.svelte -->
<script>
  import { Phone, Mail, MapPin, Menu, Clock } from 'lucide-svelte';
  import MobileMenu from '$lib/components/MobileMenu.svelte';

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<div class="min-h-screen flex flex-col">
  <!-- Header -->
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-2xl font-bold text-blue-600">Slowinski Services</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a href="/" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/about" class="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="/services" class="text-gray-700 hover:text-blue-600">Services</a>
          <a href="/faq" class="text-gray-700 hover:text-blue-600">FAQ</a>
          <a href="/blog" class="text-gray-700 hover:text-blue-600">Blog</a>
          <a href="/contact" class="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <button class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Get a Quote
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button class="text-gray-700" on:click={toggleMobileMenu} aria-label="Toggle menu">
            <Menu class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile menu -->
  <MobileMenu bind:isOpen={isMobileMenuOpen} />

  <!-- Main content -->
  <main class="flex-grow">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <MapPin class="h-5 w-5 mr-2 flex-shrink-0" />
              <span>34 Patrick Lane<br>Depew, NY 14043</span>
            </div>
            <div class="flex items-center">
              <Phone class="h-5 w-5 mr-2 flex-shrink-0" />
              <a href="tel:+17164007412" class="hover:text-blue-400">(716) 400-7412</a>
            </div>
            <div class="flex items-center">
              <Mail class="h-5 w-5 mr-2 flex-shrink-0" />
              <a href="mailto:Edward@SlowinskiServices.com" class="hover:text-blue-400">Edward@SlowinskiServices.com</a>
            </div>
            <div class="flex items-center mt-2 text-sm text-gray-300">
              <Clock class="h-5 w-5 mr-2 flex-shrink-0" />
              <span>Office Hours: 10am - 2pm<br>Available by appointment outside of these hours</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/services" class="hover:text-blue-400">Our Services</a></li>
            <li><a href="/about" class="hover:text-blue-400">About Ed</a></li>
            <li><a href="/contact" class="hover:text-blue-400">Schedule Consultation</a></li>
            <li><a href="/privacy" class="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Our Services</h3>
          <ul class="space-y-2">
            <li>Medicare Supplement Plans</li>
            <li>Medicare Advantage Plans</li>
            <li>Prescription Drug Plans</li>
            <li>Dental & Vision Coverage</li>
            <li>Veteran Assistance</li>
          </ul>
        </div>

        <!-- Certifications -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Certifications</h3>
          <p class="mb-4">Certified Healthcare Advisor (CHCA)</p>
          <p class="text-sm">Serving Western New York since 2015</p>
          <div class="mt-4">
            <button class="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 w-full">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p class="text-sm text-gray-400">
          © {new Date().getFullYear()} Slowinski Services. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</div>
