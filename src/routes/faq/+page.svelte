<script>
  import { ChevronDown, ChevronUp, Search } from 'lucide-svelte';
  import { slide } from 'svelte/transition';

  // Static FAQ data
  const faqCategories = [
    {
      title: "Medicare Basics",
      questions: [
        {
          q: "What is Medicare and who is eligible?",
          a: "Medicare is a federal health insurance program established in 1965 for people aged 65 and older, regardless of income or medical history. You may also qualify if you're under 65 with certain disabilities or have End-Stage Renal Disease (ESRD) or ALS."
        },
        {
          q: "What are the different parts of Medicare?",
          a: "Medicare has four parts: Part A (Hospital Insurance), Part B (Medical Insurance), Part C (Medicare Advantage Plans), and Part D (Prescription Drug Coverage). Parts A and B are known as Original Medicare, while Part C is an alternative way to receive your Medicare benefits."
        },
        {
          q: "When can I enroll in Medicare?",
          a: "Your Initial Enrollment Period (IEP) starts 3 months before the month you turn 65, includes your birth month, and ends 3 months after. There are also Special Enrollment Periods for qualifying life events and an annual General Enrollment Period from January 1 to March 31."
        }
      ]
    },
    {
      title: "Coverage Options",
      questions: [
        {
          q: "What's the difference between Medicare Advantage and Medicare Supplement plans?",
          a: "Medicare Advantage (Part C) plans combine Original Medicare coverage with additional benefits like dental and vision, often with lower premiums but network restrictions. Medicare Supplement (Medigap) plans work alongside Original Medicare to cover out-of-pocket costs, offering more flexibility in choosing providers but with higher premiums."
        },
        {
          q: "Do I need a separate prescription drug plan?",
          a: "If you have Original Medicare, you'll need to enroll in a separate Part D plan for prescription drug coverage. Most Medicare Advantage plans include prescription drug coverage. We can help you evaluate your medication needs and find the most cost-effective coverage."
        }
      ]
    },
    {
      title: "Costs and Coverage",
      questions: [
        {
          q: "What costs should I expect with Medicare?",
          a: "Medicare costs typically include monthly premiums, deductibles, copayments, and coinsurance. The specific amounts depend on your chosen coverage and income level. As your advisors, we'll help you understand and plan for these costs."
        },
        {
          q: "Are dental and vision services covered?",
          a: "Original Medicare doesn't cover most dental and vision services. However, many Medicare Advantage plans include these benefits, and we also offer standalone dental and vision plans to complement your Medicare coverage."
        }
      ]
    },
    {
      title: "Working with Essential Solutions",
      questions: [
        {
          q: "How can Essential Solutions help me with Medicare?",
          a: "As Certified Healthcare Advisors (CHCA), we provide personalized guidance to help you understand your Medicare options and find the best coverage for your needs. We offer ongoing support, annual reviews, and assistance with claims and coverage questions."
        },
        {
          q: "Is there a cost for your services?",
          a: "No, our consultation and advisory services are provided at no cost to you. We're compensated by the insurance companies when you enroll in a plan through us, while you pay the same premium as going directly to the carrier."
        },
        {
          q: "What makes Essential Solutions different?",
          a: "We call it the Green Apple Difference - our commitment to providing comprehensive assessments and enrolling you in the plan that best fits your needs. All our advisors are CHCA certified, ensuring you receive expert guidance and ongoing support."
        }
      ]
    }
  ];

  // State management
  let searchQuery = "";
  let openQuestions = new Set();
  let selectedCategory = "all";

  // Filter questions based on search and category
  $: filteredCategories = faqCategories
    .map(category => ({
      ...category,
      questions: category.questions.filter(q =>
        (selectedCategory === "all" || category.title === selectedCategory) &&
        (q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
         q.a.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }))
    .filter(category => category.questions.length > 0);

  // Toggle question visibility
  function toggleQuestion(categoryIndex, questionIndex) {
    const key = `${categoryIndex}-${questionIndex}`;
    if (openQuestions.has(key)) {
      openQuestions.delete(key);
    } else {
      openQuestions.add(key);
    }
    openQuestions = openQuestions; // Trigger reactivity
  }
</script>

<div class="flex flex-col min-h-screen">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-b from-blue-800 to-blue-600 py-24">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-blue-900 mix-blend-multiply"></div>
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h1>
        <div class="bg-blue-700/50 backdrop-blur-sm rounded-lg p-6 mb-8">
          <p class="text-xl text-gray-100">
            Find answers to common questions about Medicare coverage and our services. Can't find what you're looking for? We're here to help.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Content -->
  <section class="py-16 bg-white flex-grow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Search and Filter -->
      <div class="mb-12">
        <div class="max-w-xl mx-auto">
          <div class="relative">
            <input
              type="text"
              bind:value={searchQuery}
              placeholder="Search frequently asked questions..."
              class="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search class="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <button
            class="px-4 py-2 rounded-lg font-medium transition-colors {selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
            on:click={() => selectedCategory = 'all'}
          >
            All Questions
          </button>
          {#each faqCategories as category}
            <button
              class="px-4 py-2 rounded-lg font-medium transition-colors {selectedCategory === category.title ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
              on:click={() => selectedCategory = category.title}
            >
              {category.title}
            </button>
          {/each}
        </div>
      </div>

      <!-- FAQ List -->
      <div class="max-w-3xl mx-auto space-y-8">
        {#each filteredCategories as category, categoryIndex}
          <div class="bg-white rounded-lg">
            <h2 class="text-2xl font-bold mb-4">{category.title}</h2>
            <div class="space-y-4">
              {#each category.questions as question, questionIndex}
                <div class="border rounded-lg">
                  <button
                    on:click={() => toggleQuestion(categoryIndex, questionIndex)}
                    class="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
                  >
                    <span class="font-medium pr-8">{question.q}</span>
                    {#if openQuestions.has(`${categoryIndex}-${questionIndex}`)}
                      <ChevronUp class="h-5 w-5 text-gray-400 flex-shrink-0" />
                    {:else}
                      <ChevronDown class="h-5 w-5 text-gray-400 flex-shrink-0" />
                    {/if}
                  </button>
                  {#if openQuestions.has(`${categoryIndex}-${questionIndex}`)}
                    <div class="px-4 pb-4" transition:slide>
                      <p class="text-gray-600">{question.a}</p>
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>

      <!-- Still Have Questions CTA -->
      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p class="text-gray-600 mb-8">
          Our certified Medicare advisors are here to help you understand your options and find the right coverage.
        </p>
        <div class="flex justify-center gap-4">
          <a
            href="/contact"
            class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="tel:+17164007412"
            class="inline-block px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Call (716) 400-7412
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
