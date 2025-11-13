import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { textScroll } from '@/data/HomeData'

export const useCompoTextScroll = (templateRef: any, refSection: any) => {
  // --- STATE UTAMA ---
  const currentScrollY = ref(0)
  const animationProgress = ref(0)
  const currentTextIndex = ref(0)
  const elPosition = ref('relative')
  let animationFrameId: number | null = null
  let translateLock = false
  let isSectionThree = false

  // --- DATA DAN KOMPUTASI ---
  const scrollElement = templateRef
  const currentContent = computed(() => textScroll[currentTextIndex.value]?.content)
  const translateYValue = computed(() => animationProgress.value)

  // --- HELPER FUNCTION ---
  const updateScrollY = (): void => {
    currentScrollY.value = window.scrollY
    animationFrameId = requestAnimationFrame(updateScrollY)
  }

  const clamp = (value: number, min: number, max: number): number =>
    Math.max(min, Math.min(max, value))

  const handleScrollTransition = (
    reachedBoundary: boolean,
    scrollingDown: boolean,
    onBoundaryReached: Function,
  ): void => {
    if (reachedBoundary && animationProgress.value === 0) {
      elPosition.value = 'absolute bottom-0'
      return
    }

    if (animationProgress.value >= 100) {
      onBoundaryReached()
      translateLock = scrollingDown
    }

    if (animationProgress.value === 0 && currentTextIndex.value <= textScroll.length - 1) {
      translateLock = !scrollingDown
    }
  }

  // --- OBSERVER: MENGAWASI PERUBAHAN SCROLL ---
  watch(currentScrollY, (newY, oldY) => {
    const deltaY: number = Math.abs(newY - oldY)
    const scrollingDown: boolean = Math.sign(newY - oldY) >= 0
    const sensitivity: number = 0.3

    const increase: number = clamp(animationProgress.value + deltaY * sensitivity, 0, 100)
    const decrease: number = clamp(animationProgress.value - deltaY * sensitivity, 0, 100)
    const rect = scrollElement.value?.getBoundingClientRect()

    // Cek apakah elemen dalam viewport
    if (rect && rect.bottom <= 20) {
      if (isSectionThree) return
      elPosition.value = 'fixed top-5'

      if (scrollingDown) {
        // Scroll ke bawah
        animationProgress.value = !translateLock ? increase : decrease
        handleScrollTransition(
          currentTextIndex.value === textScroll.length - 1,
          true,
          () => currentTextIndex.value++,
        )
      } else {
        // Scroll ke atas
        animationProgress.value = translateLock ? increase : decrease
        handleScrollTransition(currentTextIndex.value === 0, false, () => currentTextIndex.value--)
      }
    } else {
      elPosition.value = 'relative'
    }
  })

  // --- EVENT HANDLER ---
  const handleScroll = () => {
    if (animationFrameId === null) {
      animationFrameId = requestAnimationFrame(updateScrollY)
    }
  }

  onMounted(async () => {
    await nextTick()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) isSectionThree = true
          else {
            isSectionThree = false
            document.addEventListener('scroll', handleScroll, { passive: true })
          }
        })
      },
      { threshold: 0.01 },
    )

    if (refSection.value) observer.observe(refSection.value)
  })

  // --- RETURN API ---
  return {
    handleScroll,
    compo: {
      elPosition,
      currentContent,
      currentTextIndex,
      translateYValue,
    },
  }
}
