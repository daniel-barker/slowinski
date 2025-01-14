<!-- src/routes/about/+page.svelte -->
<script>
  import { Award, Heart, Users, GraduationCap, MapPin, Guitar, Phone, Clock } from 'lucide-svelte';
</script>

<div class="flex flex-col">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-b from-blue-800 to-blue-600">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-blue-900 mix-blend-multiply"></div>
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Making Medicare Simple
          </h1>
          <div class="bg-blue-700/50 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p class="text-xl text-gray-100">
              Experience the Green Apple Difference with Essential Solutions USA. From a simple seed, we've grown to become Western New York's trusted Medicare advisors, providing a unique, needs-based approach through health, wealth, and legacy planning.
            </p>
          </div>
          <div class="flex flex-wrap gap-4 justify-center">
            <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users class="h-5 w-5 text-blue-200 mr-2" />
              <span class="text-blue-100">2,000+ Clients Served</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Award class="h-5 w-5 text-blue-200 mr-2" />
              <span class="text-blue-100">CHCA Certified</span>
            </div>
          </div>
        </div>
        <div class="relative hidden md:block">
          <div class="bg-white/10 backdrop-blur-sm rounded-full p-8 w-96 h-96 mx-auto">
            <div class="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
            <img
              src="/images/GreenApple.webp"
              alt="Medicare Services Illustration"
              class="relative w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Ed's Story Section -->
  <section class="pt-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center text-center mb-12">
        <div class="relative w-96 h-96">
          <div class="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
          <img src="images/ed.webp" alt="Ed Slowinski" class="relative rounded-lg shadow-lg" />
        </div>
        <h2 class="text-3xl font-bold my-6">Meet Ed Slowinski</h2>
          <p class="text-lg text-gray-600 mb-6">
            Since 2015, I've been dedicated to helping Western New York residents navigate their Medicare journey with confidence and clarity. As a Medicare specialist based in Tonawanda, I understand the importance of finding the right insurance solutions without feeling overwhelmed by the choices available.
          </p>
          <div class="flex justify-center gap-8 mb-8">
        <div class="flex items-start">
          <Award class="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
          <div class="ml-4">
            <h3 class="font-semibold">Certified</h3>
            <p class="text-gray-600">CHCA Certified Healthcare Advisor</p>
          </div>
        </div>
        <div class="flex items-start">
          <MapPin class="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
          <div class="ml-4">
            <h3 class="font-semibold">Local Expert</h3>
            <p class="text-gray-600">Serving Western New York</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Company Values Section -->
  <section class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Our Core Values</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          At Essential Solutions, we're committed to setting the highest standards in Medicare advisory services.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="bg-blue-100 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <GraduationCap class="h-8 w-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold mb-3">Certified Excellence</h3>
          <p class="text-gray-600">
            Our CHCA certification ensures the highest standard of care and expertise in Medicare advisory services.
          </p>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="bg-blue-100 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <Heart class="h-8 w-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold mb-3">Personalized Care</h3>
          <p class="text-gray-600">
            We provide tailored consultations to meet your unique needs, ensuring you get the right coverage.
          </p>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="bg-blue-100 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
            <Users class="h-8 w-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold mb-3">Community Focus</h3>
          <p class="text-gray-600">
            Special dedication to assisting veterans and individuals requiring income assistance.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Office Location Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Visit Our Office</h2>
        <p class="text-xl text-gray-600">
          Conveniently located in Depew to serve all of Western New York
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <MapPin class="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div class="ml-4">
                <p class="font-semibold">Address</p>
                <p class="text-gray-600">34 Patrick Lane<br>Depew, NY 14043</p>
              </div>
            </div>
            <div class="flex items-start">
              <Phone class="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div class="ml-4">
                <p class="font-semibold">Phone</p>
                <a href="tel:+17164007412" class="text-blue-600 hover:text-blue-800">(716) 400-7412</a>
              </div>
            </div>
            <div class="flex items-start">
              <Clock class="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div class="ml-4">
                <p class="font-semibold">Office Hours</p>
                <p class="text-gray-600">10am - 2pm<br>Available by appointment outside of these hours</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="h-[400px] rounded-lg shadow-md overflow-hidden">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.4975048016437!2d-78.73348118920086!3d42.91961216077886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30b4f1baf4b23%3A0x4ae9ae85332796ab!2s34%20Patrick%20Ln%2C%20Depew%2C%20NY%2014043!5e0!3m2!1sen!2sus!4v1736886430907!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- Get Started CTA -->
  <section class="bg-blue-600 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Let us help you navigate your Medicare options and find the perfect coverage for your needs.
        </p>
        <button class="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
          Schedule a Free Consultation
        </button>
      </div>
    </div>
  </section>
</div>
