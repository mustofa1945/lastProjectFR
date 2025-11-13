import type { ListHeaderItem } from '@/interfaces/HomeInterface'
import { ref, type Ref } from 'vue'

const listHeader: Array<string> = [
  'HOME',
  'SERVICES',
  'CASE STUDIES',
  'FINTECH EXPERTISE',
  'LETS CONNECT',
  'LETS CONNECT',
]

const delayElHeader: string[] = [
  'delay-500',
  'delay-550',
  'delay-600',
  'delay-650',
  'delay-700',
  'delay-750',
]

const initializeHeader = (): ListHeaderItem[] =>
  listHeader.map((item, index) => ({
    id: index + 1,
    title: item,
    width: 'w-0',
    x_direc: 'left-0',
    margin_top: index === 5 ? 'mt-42' : 'mt-0',
    delay: delayElHeader[index],
  }))

const findElHead = (
  id: number,
  x_direc: string,
  width: string,
  reacHeader: Ref<ListHeaderItem[]>,
): void => {
  const getHeader = reacHeader.value.find((header: ListHeaderItem) => header.id === id)
  //Pakai non-null assertion karena nilai tidak akan undefined
  getHeader!.x_direc = x_direc
  getHeader!.width = width
}

export const useCompoLineHeader = () => {
  const reacHeader: Ref<ListHeaderItem[]> = ref(initializeHeader())

  const handleOverReacHeadById = (id: number): void =>
    findElHead(id, 'left-0', 'w-full', reacHeader)

  const handleOutReacHeadById = (id: number): void => findElHead(id, 'right-0', 'w-0', reacHeader)

  return {
    handleOverReacHeadById,
    handleOutReacHeadById,
    reacHeader,
  }
}
