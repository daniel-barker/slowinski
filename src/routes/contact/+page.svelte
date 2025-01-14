

<!-- src/routes/contact/+page.svelte -->
<script>
  import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare } from 'lucide-svelte';

  let formData = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    insurance: "Medicare",
    contactMethod: "Phone",
    contactTime: "Morning",
    referral: "",
    consent: false
  };

  let loading = false;

  async function handleSubmit() {
    if (!formData.consent) {
      alert("You must agree to receive SMS notifications.");
      return;
    }
    loading = true;
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx0fA4ER8Y-GmFrFmVZRJcv7jQMO4SxyAdIitcY9K40FRO0wqwOvz9IZacD3OsLDoBF/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.result === "success") {
        alert("Message sent successfully! We'll be in touch!");
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("There was an error submitting the form.");
    } finally {
      loading = false;
    }
  }
</script>

<style>
  .loading {
    opacity: 0.5;
    pointer-events: none;
  }
</style>

<div class="flex flex-col">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-b from-blue-800 to-blue-600 py-24">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-blue-900 mix-blend-multiply"></div>
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <div class="bg-blue-700/50 backdrop-blur-sm rounded-lg p-6 mb-8">
          <p class="text-xl text-gray-100">
            Get in touch with our Medicare experts. We're here to answer your questions and help you find the right coverage.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Information Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-gray-50 p-8 rounded-lg text-center">
          <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <Phone class="h-6 w-6 text-blue-600" />
          </div>
          <h3 class="text-lg font-semibold mb-2">Call Us</h3>
          <p class="text-gray-600 mb-4">Speak directly with an advisor</p>
          <a href="tel:+17164007412" class="text-blue-600 hover:text-blue-800 font-medium">
            (716) 400-7412
          </a>
        </div>

        <div class="bg-gray-50 p-8 rounded-lg text-center">
          <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <MapPin class="h-6 w-6 text-blue-600" />
          </div>
          <h3 class="text-lg font-semibold mb-2">Visit Us</h3>
          <p class="text-gray-600 mb-4">34 Patrick Lane</p>
          <p class="text-gray-600">Depew, NY 14043</p>
        </div>

        <div class="bg-gray-50 p-8 rounded-lg text-center">
          <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <Clock class="h-6 w-6 text-blue-600" />
          </div>
          <h3 class="text-lg font-semibold mb-2">Office Hours</h3>
          <p class="text-gray-600 mb-2">10am - 2pm</p>
          <p class="text-sm text-gray-500">Available by appointment outside of these hours</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-gray-50 p-8 rounded-lg">
          <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form
            on:submit|preventDefault={handleSubmit}
            class="space-y-6"
            class:loading
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  bind:value={formData.firstName}
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  bind:value={formData.lastName}
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  bind:value={formData.phone}
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div>
              <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Address*</label>
              <input
                type="text"
                id="address"
                bind:value={formData.address}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                required
              />
            </div>

            <div>
              <label for="insurance" class="block text-sm font-medium text-gray-700 mb-1">What insurance are you interested in?*</label>
              <select
                id="insurance"
                bind:value={formData.insurance}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                required
              >
                <option value="Medicare">Medicare</option>
                <option value="Medicaid">Medicaid</option>
                <option value="Both">Both</option>
                <option value="Neither">Neither</option>
                <option value="DontKnow">Don't Know</option>
              </select>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="contactMethod" class="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
                <select
                  id="contactMethod"
                  bind:value={formData.contactMethod}
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                  <option value="Text">Text</option>
                </select>
              </div>
              <div>
                <label for="contactTime" class="block text-sm font-medium text-gray-700 mb-1">Best Time to Contact</label>
                <select
                  id="contactTime"
                  bind:value={formData.contactTime}
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            <div>
              <label for="referral" class="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
              <input
                type="text"
                id="referral"
                bind:value={formData.referral}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="flex gap-x-4">
              <div class="flex h-6 items-center">
                <input
                  type="checkbox"
                  bind:checked={formData.consent}
                  class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  required
                />
              </div>
              <label class="text-sm leading-6 text-gray-600">
                Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from company. Message frequency varies. Message & data rates may apply. Text HELP to (716) 473-1939 for assistance. You can reply STOP to unsubscribe at any time.
              </label>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {#if loading}
                Loading...
              {:else}
                Send Message
              {/if}
            </button>
          </form>
        </div>

        <!-- Map -->
        <div class="bg-gray-50 p-8 rounded-lg">
          <h2 class="text-2xl font-bold mb-6">Our Location</h2>
          <div class="h-[400px] rounded-lg overflow-hidden">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.4975048016437!2d-78.73348118920086!3d42.91961216077886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30b4f1baf4b23%3A0x4ae9ae85332796ab!2s34%20Patrick%20Ln%2C%20Depew%2C%20NY%2014043!5e0!3m2!1sen!2sus!4v1736886430907!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style="border:0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <div class="mt-6 space-y-4">
            <div class="flex items-start">
              <MapPin class="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div class="ml-4">
                <h3 class="font-medium">Address</h3>
                <p class="text-gray-600">34 Patrick Lane<br>Depew, NY 14043</p>
              </div>
            </div>
            <div class="flex items-start">
              <Clock class="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div class="ml-4">
                <h3 class="font-medium">Office Hours</h3>
                <p class="text-gray-600">10am - 2pm<br>Available by appointment outside of these hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Schedule Section -->
  <section class="bg-blue-600 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation with our Medicare experts. We'll help you understand your options and find the right coverage.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center">
            <Calendar class="h-5 w-5 mr-2" />
            Schedule Consultation
          </button>
          <a
            href="tel:+17164007412"
            class="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center"
          >
            <Phone class="h-5 w-5 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
