export const useUtils = () => {
  const delay = (time: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, time))

  return {
    delay
  }
}
