<script setup lang="ts">
import { cardRandom } from '@/data/HomeData'
defineOptions({
  layout: 'MainLayout',
})
</script>
<template>
  <div class="w-full pt-40 relative">
    <div class="relative z-20 w-[24rem] h-[20.2rem] leading-none text-center mx-auto">
      <div class="title text-[2.5rem]">
        <span class="text-[#fff]">Turn your vision into a remarkable </span>
        <span class="text-[#ff76a2]">brand, website or ai product</span>
      </div>
      <p class="text-[#fff] text-[10px] mt-5">
        A decade of proven results for startups scaling from Series A to unicorn
      </p>
      <button class="text-[#fff] mt-5 border-1 border-[#fff] px-3 py-2 text-[12px] rounded">
        START HERE
      </button>
    </div>

    <div
      v-for="card in cardRandom"
      :class="[
        card.heigh,
        card.width,
        card.position.bottom,
        card.position.top,
        card.position.right,
        card.position.left,
        card.zIndex,
        'absolute rounded-lg',
      ]"
    >
      <img :src="`/src/images/${card.path}`" class="w-full h-full bg-cover rounded-xl" />
    </div>
  </div>
</template>
