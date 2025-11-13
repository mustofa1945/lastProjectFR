<script lang="ts" setup>

const props = defineProps(['option'])

</script>
<template>
     <button
        class="group relative overflow-hidden hover:bg-white hover:text-black px-4  py-2 rounded-xl font-semibold text-white border border-white transition-all duration-500"
          style="perspective: 800px"
        >
          <!-- Child pertama -->
          <span
            class="absolute text-[13px] inset-0 flex items-center justify-center transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:translateY(-30px)_translateZ(-60px)_scale(0.8)] group-hover:opacity-0"
          >
            {{ props.option.title }}
          </span>

          <!-- Child kedua -->
          <span
            class="absolute text-[13px] inset-0 flex items-center justify-center transition-all duration-500 ease-out opacity-0 [transform:translateY(20px)_translateZ(60px)_scale(1.2)] group-hover:[transform:translateY(0)_translateZ(0)_scale(1)] group-hover:opacity-100"
          >
            {{ props.option.title }}
          </span>

          <!-- Spacer untuk menjaga tinggi tombol -->
          <!-- <span class="invisible">Start Here</span> -->
        </button>
</template>