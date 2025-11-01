import { type Ref, ref } from 'vue'
import type { Translation, BulletState } from '@/interfaces/HomeInterface'
import { useUtils } from '@/utils/utils'
//388 - 623
//11- 473
// Konstanta untuk kelas transisi
const TRANSITION_CLASS: string = 'transition-all duration-500' // Perbaikan typo 'transtion'

const NO_TRANSITION_CLASS: string = 'none-transition'

// Ganti nama translate menjadi defaultTranslation (dan tipe menjadi Translation)
const INITIAL_TRANSLATION: Translation = {
  x: 0,
  y: 0,
}

// Ganti nama animationBullet menjadi animationPositions
const BULLET_ANIMATION_POSITIONS: Array<any> = [
  { id: 1, x: 110, y: 120 },
  { id: 2, x: -155, y: 120 },
  { id: 3, x: 110, y: -130 },
  { id: 4, x: -155, y: -130 },
]

const AREA_NAV: any = {
  X_MIN: 388,
  X_MAX: 629,
  Y_MIN: 5,
  FIRST_SHAPE_MAX_Y: 48,
  SECOND_SHAPE_MAX_Y: 456,
}

//Flag untuk mencontrol shape 1
let flagBullet: boolean = false
//Flag untuk mencontrol shape 2
let flagBulletSec: boolean = false

// Ganti nama useCompoBullet menjadi useBulletAnimation
export const useBulletAnimation = () => {
  const bullets: Ref<Array<BulletState>> = ref([])
  // Ganti nama isTransition menjadi transitionClass
  const transitionClass = ref(TRANSITION_CLASS)

  let height = ref('h-[40px]')

  const { delay } = useUtils()

  // Ganti nama afterAnimCenterBull menjadi processVisibleBullets
  const processVisibleBullets = (
    bullets: Ref<Array<BulletState>>,
    callback: (bull: BulletState) => void, // Tipe spesifik
  ) => {
    // Gunakan '===' untuk perbandingan (asumsi ini tujuannya)
    const visibleBullets = bullets.value.filter(
      (bull: BulletState) => bull.opacity === 'opacity-100',
    )

    visibleBullets.forEach((bull: BulletState) => {
      callback(bull) // Ganti excute menjadi callback
    })
  }

  // Ganti nama setBull menjadi initializeBullets
  const initializeBullets = () => {
    for (let index = 1; index <= 4; index++) {
      // Gunakan defaultTranslation
      bullets.value.push({ id: index, ...INITIAL_TRANSLATION, opacity: 'opacity-100' })
    }
  }

  // Ganti nama bullMouseOver menjadi handleMouseOver
  const handleMouseOver = async (): Promise<void> => {
    height.value = 'h-[29rem]'

    bullets.value.forEach((bullet: BulletState, index) => {
      const isSame: boolean = bullet.id === BULLET_ANIMATION_POSITIONS[index]?.id

      if (isSame) {
        bullet.x = BULLET_ANIMATION_POSITIONS[index]!.x
        bullet.y = BULLET_ANIMATION_POSITIONS[index]!.y
      }
    })

    await delay(500)

    transitionClass.value = NO_TRANSITION_CLASS // Gunakan konstanta

    // ID 3 dan 4 (indeks 2 dan 3) disembunyikan
    bullets.value.forEach((bull: BulletState, index) => {
      if (index == 2 || index == 3) bull.opacity = 'opacity-0'
    })

    transitionClass.value = TRANSITION_CLASS // Gunakan konstanta

    // Gunakan processVisibleBullets dan callback yang lebih jelas
    processVisibleBullets(bullets, (bull: BulletState) => (bull.x = 0))
  }

  // Ganti nama bullMouseOut menjadi handleMouseOut
  const handleMouseOut = async (): Promise<void> => {
    height.value = 'h-[40px]'
    // Gunakan processVisibleBullets
    processVisibleBullets(bullets, (bull: BulletState) => {
      // Ganti getDefaultBull menjadi defaultPosition
      const defaultPosition = BULLET_ANIMATION_POSITIONS.find((anim) => anim.id === bull.id)
      bull.x = defaultPosition!.x
    })

    await delay(500)

    transitionClass.value = NO_TRANSITION_CLASS // Gunakan konstanta

    bullets.value.forEach((bull: BulletState) => (bull.opacity = 'opacity-100'))

    transitionClass.value = TRANSITION_CLASS // Gunakan konstanta

    bullets.value.forEach((bull: BulletState) => (bull.x = bull.y = 0))
  }

  const handleMouseMove = (e: any) => {
    const { X_MIN, X_MAX, Y_MIN, FIRST_SHAPE_MAX_Y, SECOND_SHAPE_MAX_Y } = AREA_NAV

    const widthShape = e.clientX >= X_MIN && e.clientX <= X_MAX && e.clientY >= Y_MIN

    const firstShape = widthShape && e.clientY <= FIRST_SHAPE_MAX_Y

    const secondShape = widthShape && e.clientY <= SECOND_SHAPE_MAX_Y

    if (firstShape && !flagBullet) {
      handleMouseOver()
      flagBullet = true
    }

    if (flagBullet && secondShape) {
      flagBulletSec = true
    }

    if (flagBulletSec && !secondShape) {
      handleMouseOut()
      flagBullet = flagBulletSec = false
    }
  }

  return {
    bullets,
    handleMouseOver, // Nama baru
    initializeBullets, // Nama baru
    handleMouseOut, // Nama baru
    handleMouseMove,
    compo: {
      transitionClass, // Dikembalikan langsung
      height,
    },
  }
}
