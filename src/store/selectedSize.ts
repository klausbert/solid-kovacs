import { createSignal } from 'solid-js'


const [get, set] = createSignal('') // TODO: persist to localStorage


export const useSelectedSize = () => ({
  size() { return get() },
  setSize(size) {
    set(size)
  },
})
