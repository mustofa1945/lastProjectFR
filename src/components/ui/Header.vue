<script setup lang="ts">
import { useBulletAnimation } from '@/composable/compoBullet'
import { onMounted, ref } from 'vue'

const {
  bullets,
  initializeBullets, // Nama baru
  handleMouseMove,
  compo,
} = useBulletAnimation()

const listHeader: Array<string> = [
  'HOME',
  'SERVICES',
  'CASE STUDIES',
  'FINTECH EXPERTISE',
  'LETS CONNECT',
  'LETS CONNECT',
]

const initializeHeader = () =>
  listHeader.map((item, index) => ({
    id: index + 1,
    title: item,
    width: 'w-0',
    x_direc: 'left-0',
    margin_top: index == 5 ? 'mt-42' : 'mt-0' ,
  }))

const reacHeader = ref(initializeHeader())

const handleOverReacHeadById = (id: number): void => {
  const getHeader = reacHeader.value.find((header) => header.id === id)
  getHeader!.x_direc = 'left-0'
  getHeader!.width = 'w-full'
}

const handleOutReacHeadById = (id: number): void => {
  const getHeader = reacHeader.value.find((header) => header.id === id)
  getHeader!.x_direc = 'right-0'
  getHeader!.width = 'w-0'
}

document.body.addEventListener('mousemove', handleMouseMove)

onMounted(() => {
  console.log(reacHeader.value)
  initializeBullets()
})
</script>
<template>
  <header class="flex items-center justify-center w-full absolute top-3 z-30">
    <div
      class="relative rounded-lg bg-[#181818]/30 hover:scale-102 transition-all duration-300 backdrop-blur-md"
    >
      <div class="flex items-center justify-between w-[240px]">
        <div
          :class="`relative nav-parent text-xl z-20 ${compo.height.value} w-full overflow-hidden rounded-lg transition-all duration-300 delay-500`"
        >
          <div class="w-full mt-30 h-[5rem] pl-2">
            <div
              @mouseover="handleOverReacHeadById(item.id)"
              @mouseout="handleOutReacHeadById(item.id)"
              v-for="(item, index) in reacHeader"
              :class="['relative flex items-center' , item.margin_top]"
            >
              <a href="" class="relative text-white"
                >{{ item.title }}
                <!-- animasi garis -->
                <span
                  :class="[
                    'absolute transform bottom-0 h-[1px]   bg-white transition-all duration-700 ease-out',
                    item.x_direc,
                    item.width,
                  ]"
                ></span>
              </a>
              <span class="text-[8px] text-gray-500 ml-1"> 0{{ 1 + index }}</span>
            </div>
          </div>
        </div>
        <h1 class="px-2 absolute text-xl top-0 z-0 text-[#fff] h-[40px] flex items-center w-full">
          BASIS
        </h1>
        <div
          class="w-[30px] absolute top-[10px] right-0 z-0 gap-2 h-[20px] flex flex-wrap items-center justify-center"
        >
          <div
            v-for="bullet in bullets"
            :style="{
              transform: `translate(${bullet.x}% , ${bullet.y}%)`,
            }"
            :class="[
              bullet.opacity,
              compo.transitionClass.value,
              'bullet w-[5px] rounded-3xl bg-[#fff]  h-[5px] flex pointer-events-none',
            ]"
          ></div>
        </div>
      </div>
    </div>
  </header>
</template>
