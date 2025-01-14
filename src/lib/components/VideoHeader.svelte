<!-- VideoHeader.svelte -->
<script>
  import { onMount } from 'svelte';

  export let videos = [
    { src: "/videos/video2.mp4", duration: 10000 },
    { src: "/videos/video3.mp4", duration: 9000 },
    { src: "/videos/video4.mp4", duration: 12000 },
    { src: "/videos/video1.mp4", duration: 8000 },
  ];

  let currentIndex = 0;
  let videoElements = [];
  let container;
  let transitioning = false;

  onMount(() => {
    // Preload all videos
    videos.forEach((video, index) => {
      videoElements[index].load();
    });

    startVideoSequence();
  });

  function startVideoSequence() {
    playCurrentVideo();
  }

  function playCurrentVideo() {
    if (!videoElements[currentIndex]) return;

    const video = videoElements[currentIndex];
    video.currentTime = 0;

    // Prevent scroll jump by saving current scroll position
    const scrollPos = window.scrollY;

    // Play the video and handle the transition
    video.play().then(() => {
      // Restore scroll position
      window.scrollTo(0, scrollPos);

      // Schedule the next video
      setTimeout(() => {
        transitioning = true;
        currentIndex = (currentIndex + 1) % videos.length;
        playCurrentVideo();
        // Reset transitioning flag after a short delay
        setTimeout(() => {
          transitioning = false;
        }, 100);
      }, videos[currentIndex].duration);
    }).catch(error => {
      console.error('Error playing video:', error);
    });
  }
</script>

<div
  class="relative w-full h-[60vh] overflow-hidden flex items-center justify-start"
  bind:this={container}
>
  {#each videos as video, i}
    <video
      bind:this={videoElements[i]}
      src={video.src}
      class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
      style="opacity: {currentIndex === i ? '1' : '0'}"
      preload="auto"
      muted
      playsinline
      data-index={i}
    >
      <track kind="captions" />
    </video>
  {/each}

  <!-- Text Overlay -->
  <div class="absolute inset-0 bg-black/40">
    <div class="container mx-auto px-4 h-full flex items-center">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold text-white mb-6">
          Making Medicare Simple for Western New York
        </h1>
        <p class="text-xl text-white mb-8">
          Since 2015, we've been helping Western New York residents navigate their Medicare options with confidence. Get personalized guidance from our team of Certified Healthcare Advisors.
        </p>
        <div class="flex gap-4">
          <a href="/schedule"
              class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Schedule a Free Consultation
          </a>
          <a href="/learn"
              class="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Learn About Medicare
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Prevent FOUC (Flash of Unstyled Content) */
  video {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
  }
</style>
