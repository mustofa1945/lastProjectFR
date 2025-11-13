import type { CardRandom } from '@/interfaces/HomeInterface'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const cardRandom: Ref<Array<CardRandom>> = ref([
  {
    id: 1,
    path: 'blue.png',
    width: 'w-[9rem]',
    heigh: 'h-[12rem]',
    bg: 'bg-black/0',
    backdrop: '',
    position: {
      top: '-top-3',
      right: 'right-0',
      bottom: 'bottom-0',
      left: 'left-60',
    },
    zIndex: 'z-10',
  },
  {
    id: 2,
    path: 'hp.png',
    width: 'w-[11rem]',
    heigh: 'h-[15rem]',
    bg: 'bg-black/0',
    backdrop: '',
    position: {
      top: 'top-18',
      right: 'right-0',
      bottom: 'bottom-0',
      left: 'left-0',
    },
    zIndex: 'z-10',
  },
  {
    id: 3,
    path: 'green.png',
    width: 'w-[9.5rem]',
    heigh: 'h-[13rem]',
    bg: 'bg-black/0',
    backdrop: '',
    position: {
      top: '',
      right: 'right-0',
      bottom: 'bottom-5',
      left: 'left-30',
    },
    zIndex: 'z-10',
  },
  {
    id: 4,
    path: 'blue.png',
    width: 'w-[6rem]',
    heigh: 'h-[5rem]',
    bg: 'bg-black/0',
    backdrop: '',
    position: {
      top: '',
      right: 'right-0',
      bottom: 'bottom-20',
      left: 'left-70',
    },
    zIndex: 'z-10',
  },
  {
    id: 5,
    path: 'laptop.png',
    width: 'w-[9rem]',
    heigh: 'h-[12rem]',
    bg: 'bg-black/0',
    backdrop: '',
    position: {
      top: '',
      right: '-right-15',
      bottom: 'bottom-5',
      left: '',
    },
    zIndex: 'z-10',
  },
  {
    id: 6,
    path: 'flower.png',
    width: 'w-[6rem]',
    heigh: 'h-[8rem]',
    bg: 'bg-black/0',
    backdrop: '',
    position: {
      top: '',
      right: 'right-30',
      bottom: 'bottom-20',
      left: '',
    },
    zIndex: 'z-10',
  },
  {
    id: 7,
    path: 'laptop.png',
    width: 'w-[12rem]',
    heigh: 'h-[12rem]',
    bg: 'bg-black/0',
    backdrop: '',
    position: {
      top: 'top-2',
      right: '-right-14',
      bottom: '',
      left: '',
    },
    zIndex: 'z-10',
  },
])

export const textScroll = [
  {
    id: 1,
    content: ['IMPROVE', 'YOUR', 'WEBSITE', 'CONVERSITION'],
  },
  {
    id: 2,
    content: ['GROW YOUR', 'ONBOURDING', 'BY 80%'],
  },
  {
    id: 3,
    content: ['LOWER YOUR', 'COST OF', 'ACQUISITION', 'BY 40%'],
  },
  {
    id: 4,
    content: ['DOUBLE THE', 'NUMBER OF', 'APP USERS IN', 'ONE YEAR'],
  },
]