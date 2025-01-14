<script>
  import { Search, Calendar, Clock, Tag } from 'lucide-svelte';

  // Sample blog post data (in a real app, this would come from a CMS or API)
  const blogPosts = [
    {
      id: "understanding-medicare-enrollment",
      title: "Understanding Medicare Enrollment Periods",
      excerpt: "Learn about the different Medicare enrollment periods and when you can sign up for or change your coverage...",
      date: "2025-01-10",
      readTime: "5 min read",
      category: "Medicare Basics",
      image: "/images/medicare-enrollment.webp",
      featured: true
    },
    {
      id: "medicare-advantage-vs-supplement",
      title: "Medicare Advantage vs. Medicare Supplement: Which is Right for You?",
      excerpt: "Compare the key differences between Medicare Advantage and Medicare Supplement plans to make an informed decision...",
      date: "2025-01-08",
      readTime: "7 min read",
      category: "Coverage Options",
      image: "/images/medicare-comparison.webp"
    },
    {
      id: "medicare-changes-2025",
      title: "2025 Medicare Changes You Need to Know",
      excerpt: "Stay informed about the latest Medicare updates and changes that might affect your coverage in 2025...",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Medicare Updates",
      image: "/images/medicare-updates.webp"
    },
    {
      id: "reducing-prescription-costs",
      title: "Tips for Reducing Your Medicare Prescription Drug Costs",
      excerpt: "Discover effective strategies to lower your out-of-pocket expenses for prescription medications...",
      date: "2025-01-03",
      readTime: "4 min read",
      category: "Cost Savings",
      image: "/images/prescription-drugs.webp"
    }
  ];

  let searchQuery = "";
  let selectedCategory = "all";

  // Get unique categories from blog posts
  $: categories = ["all", ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search query and category
  $: filteredPosts = blogPosts.filter(post =>
    (selectedCategory === "all" || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Format date to be more readable
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
          Medicare Insights & Updates
        </h1>
        <div class="bg-blue-700/50 backdrop-blur-sm rounded-lg p-6 mb-8">
          <p class="text-xl text-gray-100">
            Stay informed about Medicare news, coverage options, and healthcare tips with insights from our certified advisors.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog Content -->
  <section class="py-16 bg-white flex-grow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Search and Filter -->
      <div class="mb-12">
        <div class="max-w-xl mx-auto">
          <div class="relative">
            <input
              type="text"
              bind:value={searchQuery}
              placeholder="Search articles..."
              class="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search class="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mt-6">
          {#each categories as category}
            <button
              class="px-4 py-2 rounded-lg font-medium transition-colors {selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
              on:click={() => selectedCategory = category}
            >
              {category === "all" ? "All Posts" : category}
            </button>
          {/each}
        </div>
      </div>

      <!-- Featured Post -->
      {#if selectedCategory === "all" && searchQuery === ""}
        {#each filteredPosts.filter(post => post.featured) as post}
          <div class="mb-12">
            <div class="bg-gray-50 rounded-lg overflow-hidden">
              <div class="grid md:grid-cols-2 gap-8 p-8">
                <div class="relative h-64 md:h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    class="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <div class="flex items-center gap-4 mb-4">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span class="text-gray-600 flex items-center">
                      <Calendar class="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h2 class="text-3xl font-bold mb-4">{post.title}</h2>
                  <p class="text-gray-600 mb-6">{post.excerpt}</p>
                  <div class="flex items-center gap-4">
                    <a
                      href={`/blog/${post.id}`}
                      class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </a>
                    <span class="text-gray-600 flex items-center">
                      <Clock class="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      {/if}

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredPosts.filter(post => !post.featured) as post}
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-4">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h3 class="text-xl font-bold mb-2">{post.title}</h3>
              <p class="text-gray-600 mb-4">{post.excerpt}</p>
              <div class="flex items-center justify-between">
                <span class="text-gray-600 text-sm flex items-center">
                  <Calendar class="h-4 w-4 mr-1" />
                  {formatDate(post.date)}
                </span>
                <span class="text-gray-600 text-sm flex items-center">
                  <Clock class="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <a
                href={`/blog/${post.id}`}
                class="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800"
              >
                Read More →
              </a>
            </div>
          </div>
        {/each}
      </div>

      <!-- Newsletter Signup -->
      <div class="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 class="text-2xl font-bold mb-4">Stay Updated</h2>
        <p class="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest Medicare news and updates.
        </p>
        <form class="max-w-md mx-auto">
          <div class="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>
