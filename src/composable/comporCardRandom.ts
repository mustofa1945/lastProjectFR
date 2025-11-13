import { cardRandom } from '@/data/HomeData'

export const useCompoCardRandom = () => {
  const handleOverCard = (id: number) => {
    const reversePickedCard = cardRandom.value.filter((card) => card.id !== id)

    reversePickedCard.forEach((card) => {
      card.bg = 'bg-black/40'
      card.backdrop = 'backdrop-blur-[3px]'
    })
  }

  const handleOutCard = (id: number) => {
    const reversePickedCard = cardRandom.value.filter((card) => card.id !== id)

    reversePickedCard.forEach((card) => {
      card.bg = 'bg-black/0'
      card.backdrop = ''
    })
  }

  return {
    handleOverCard,
    handleOutCard,
  }
}
