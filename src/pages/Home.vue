<script setup lang="ts">
import BackButton from '@/components/partials/button/BackButton.vue'
import { useCompoCardRandom } from '@/composable/comporCardRandom'
import { useCompoTextScroll } from '@/composable/compoTextScroll'
import { cardRandom } from '@/data/HomeData'
import { useTemplateRef } from 'vue'

const { handleOverCard, handleOutCard } = useCompoCardRandom()

const infoScroll = useTemplateRef<HTMLDivElement>('info-scroll')

const section_three = useTemplateRef<HTMLDivElement>('section-three')

const { compo } = useCompoTextScroll(infoScroll, section_three)

defineOptions({
  layout: 'MainLayout',
})
</script>
<template>
  <div class="w-full relative">
    <section ref="info-scroll" class="w-full pt-40 relative overflow-x-hidden">
      <div class="relative z-20 w-[24rem] h-[25rem] leading-none text-center mx-auto">
        <div class="title text-[2.5rem]">
          <span class="text-[#fff]">Turn your vision into a remarkable </span>
          <span class="text-[#ff76a2]">brand, website or ai product</span>
        </div>
        <p class="text-[#fff] text-[10px] mt-5">
          A decade of proven results for startups scaling from Series A to unicorn
        </p>
        <BackButton
          class="w-28 h-8 mt-4"
          :option="{
            title: 'START HERE',
          }"
        />
      </div>

      <div
        @mouseover="handleOverCard(card.id)"
        @mouseout="handleOutCard(card.id)"
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
        <div
          :class="[
            'absolute top-0 w-full h-full rounded-xl transition-all duration-400',
            card.bg,
            card.backdrop,
          ]"
        ></div>
      </div>
    </section>

    <section :class="['sec-anim relative w-full h-[158rem]']">
      <div :class="['w-full box-content pt-2', compo.elPosition.value]">
        <span class="absolute top-0 w-[75%] left-32 h-[1.5px] bg-white"></span>
        <ul class="w-full text-sm mb-25 flex justify-center items-center text-white">
          <li>Creative & Technology Studio for AI age</li>
        </ul>
        <div class="w-[85%] mx-auto flex h-[20rem]">
          <div class="w-[35%] text-white">
            <p class="text-[30px]">You will work with Basis to:</p>
            <BackButton
              class="w-60 h-10 bg-[#ff76a2] mt-2"
              :option="{
                title: 'BOOK A FREE STRATEGY SESSION',
              }"
            />
            <BackButton
              class="w-41 h-10 mt-1"
              :option="{
                title: 'EXPLORE CASE STUDIES',
              }"
            />
          </div>
          <div class="flex-1">
            <p
              v-for="(content, index) in compo.currentContent.value"
              :key="compo.currentTextIndex.value + '-' + index"
              class="text-[50px] overflow-hidden h-18 text-white"
            >
              <span
                :style="`transform : translate( 0 , ${compo.translateYValue.value}%)`"
                class="h-full block transition-none"
              >
                {{ content }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section ref="section-three" class="w-full h-[100rem] bg-red-500"></section>
  </div>
</template>
