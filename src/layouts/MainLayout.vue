<!-- src/layouts/MainLayout.vue -->
<script setup lang="ts">
import Header from '../components/ui/Header.vue'

</script>
<template>
  <div class="relative bg-[#0c0c0c]">
    <Header  />
    <main class="relative">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white p-4 mt-6">Main Footer</footer>
  </div>
</template>
