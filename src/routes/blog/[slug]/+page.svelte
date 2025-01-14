<script>
  import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  const { post, relatedPosts } = data;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<div class="min-h-screen bg-gray-50 py-12">
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Back Button -->
    <a
      href="/blog"
      class="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8"
    >
      <ArrowLeft class="h-5 w-5 mr-2" />
      Back to Blog
    </a>

    <!-- Article Header -->
    <header class="bg-white rounded-lg shadow-sm p-8 mb-8">
      <div class="flex items-center gap-4 mb-4">
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
        <span class="text-gray-600 flex items-center">
          <Calendar class="h-4 w-4 mr-1" />
          {formatDate(post.date)}
        </span>
        <span class="text-gray-600 flex items-center">
          <Clock class="h-4 w-4 mr-1" />
          {post.readTime}
        </span>
      </div>

      <h1 class="text-4xl font-bold mb-6">{post.title}</h1>

      <!-- Author Info -->
      <div class="flex items-center">
        <img
          src={post.author.image}
          alt={post.author.name}
          class="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div class="font-medium">{post.author.name}</div>
          <div class="text-gray-600">{post.author.title}</div>
        </div>
      </div>
    </header>

    <!-- Featured Image -->
    <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
      <img
        src={post.image}
        alt={post.title}
        class="w-full h-96 object-cover"
      />
    </div>

    <!-- Article Content -->
    <div class="bg-white rounded-lg shadow-sm p-8 mb-8">
      <div class="prose prose-blue max-w-none">
        {@html post.content}
      </div>

      <!-- Share Links -->
      <div class="border-t mt-8 pt-8">
        <div class="flex items-center gap-4">
          <span class="font-medium">Share this article:</span>
          <button
            class="p-2 rounded-full hover:bg-gray-100"
            aria-label="Share on Twitter"
          >
            <Share2 class="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>

    <!-- Related Posts -->
    <section class="bg-white rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-bold mb-6">Related Articles</h2>
      <div class="grid md:grid-cols-2 gap-8">
        {#each relatedPosts as post}
          <a
            href={`/blog/${post.id}`}
            class="group block"
          >
            <div class="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <h3 class="text-xl font-bold mt-2 group-hover:text-blue-600">
                {post.title}
              </h3>
              <p class="text-gray-600 mt-2">{post.excerpt}</p>
              <div class="text-gray-600 text-sm mt-2 flex items-center">
                <Calendar class="h-4 w-4 mr-1" />
                {formatDate(post.date)}
              </div>
            </div>
          </a>
        {/each}
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-blue-600 rounded-lg shadow-sm p-8 mt-8 text-center text-white">
      <h2 class="text-2xl font-bold mb-4">Need Help Understanding Medicare?</h2>
      <p class="text-blue-100 mb-6">
        Our certified advisors are here to help you navigate your Medicare options and find the right coverage for your needs.
      </p>
      <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
        Schedule a Free Consultation
      </button>
    </section>
  </article>
</div>
