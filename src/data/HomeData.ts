import type { CardRandom } from '@/interfaces/HomeInterface'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const cardRandom: Ref<Array<CardRandom>> = ref([
  {
    id : 1 ,
    path : "blue.png",
    width : "w-[9rem]",
    heigh : "h-[12rem]",
    position : {
        top : '-top-3',
        right : 'right-0' ,
        bottom : 'bottom-0',
        left : 'left-60' 
    },
    zIndex : 'z-10'
  },{
    id : 2 ,
    path : "hp.png",
    width : "w-[11rem]",
    heigh : "h-[15rem]",
    position : {
        top : 'top-15',
        right : 'right-0' ,
        bottom : 'bottom-0',
        left : 'left-12' 
    },
    zIndex : 'z-10'
  },
  {
    id : 3 ,
    path : "green.png",
    width : "w-[9rem]",
    heigh : "h-[12rem]",
    position : {
        top : '',
        right : 'right-0' ,
        bottom : '-bottom-15',
        left : 'left-40' 
    },
    zIndex : 'z-10'
  },
  {
    id : 4 ,
    path : "blue.png",
    width : "w-[9rem]",
    heigh : "h-[8rem]",
    position : {
        top : '',
        right : 'right-0' ,
        bottom : 'bottom-3',
        left : 'left-100' 
    },
    zIndex : 'z-10'
  },
  {
    id : 5 ,
    path : "laptop.png",
    width : "w-[9rem]",
    heigh : "h-[12rem]",
    position : {
        top : '',
        right : 'right-0' ,
        bottom : '-bottom-3',
        left : '' 
    },
    zIndex : 'z-10'
  },
  {
    id : 6 ,
    path : "flower.png",
    width : "w-[9rem]",
    heigh : "h-[10rem]",
    position : {
        top : '',
        right : 'right-30' ,
        bottom : 'bottom-30',
        left : '' 
    },
    zIndex : 'z-10'
  },
  {
    id : 7 ,
    path : "laptop.png",
    width : "w-[12rem]",
    heigh : "h-[14rem]",
    position : {
        top : 'top-2',
        right : 'right-2' ,
        bottom : '',
        left : '' 
    },
    zIndex : 'z-10'
  },
])
