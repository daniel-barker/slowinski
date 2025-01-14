<!-- src/lib/components/MobileMenu.svelte -->
<script>
  export let isOpen = false;

  function closeMenu() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
    <!-- Background overlay -->
    <div class="fixed inset-0 bg-gray-900/80" on:click={closeMenu}></div>

    <!-- Menu panel -->
    <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="/" class="-m-1.5 p-1.5" on:click={closeMenu}>
          <span class="text-xl font-bold text-blue-600">Slowinski Services</span>
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={closeMenu}>
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a href="/" class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" on:click={closeMenu}>Home</a>
            <a href="/about" class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" on:click={closeMenu}>About Us</a>
            <a href="/services" class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" on:click={closeMenu}>Services</a>
            <a href="/faq" class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" on:click={closeMenu}>FAQ</a>
            <a href="/blog" class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" on:click={closeMenu}>Blog</a>
            <a href="/contact" class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" on:click={closeMenu}>Contact</a>
          </div>
          <div class="py-6">
            <button class="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" on:click={closeMenu}>
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
