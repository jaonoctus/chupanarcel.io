<script lang="ts" setup>
const tx = readonly({
  hash: '8a45257a73ffb4e31b0b3afe3e82f85ee71bdbcf1da26263a34c88f1c9c10dda'
})

const explorerLink = computed(() => `https://bitcoinexplorer.org/tx/${tx.hash}`)
</script>

<template>
  <div class="py-12 bg-gray-900 h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-yellow-500 font-semibold tracking-wide uppercase">
          <i class="fab fa-bitcoin"></i> TAPROOT ACTIVATED <i class="fas fa-carrot"></i>
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
          CHUPA, NARCÉLIO!
        </p>
        <a :href="explorerLink" target="_blank" class="mt-4 max-w-2xl text-base text-gray-500 lg:mx-auto">
          {{ tx.hash }} <i class="fas fa-share-square"></i>
        </a>
      </div>

      <div class="mt-10 text-gray-100">
        <p>
          TLDR
        </p>
        <p>
          TBD
        </p>
      </div>
    </div>
  </div>
</template>
