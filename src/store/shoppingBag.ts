import { createSignal } from 'solid-js'


const [get, set] = createSignal([]) // TODO: persist to localStorage


export const useShoppingBag = () => ({
  shoppingBag() { return get() },
  addToBag(product) {
    set( state => state.filter( f => f.id!==product.id ).concat(product))
  },
  removeFromBag(product) {
    set( state => state.filter( f => f.id!==product.id ))
  },
  emptyBag() {
    set( state => state.filter( f => f.wish ))
  },
  sumOfBag(shippingRate = 0)  {
    const total = get().reduce((r, c) => (r + c.price - (c.discount || 0)), (shippingRate || 0))
    const currency = get()[0]?.currency || '---'

    return `${total} ${currency}`
  },
  isInBag(product) {
    get().some( f => ! f.wish && f.id===product.id )
  },
  isAWish(product) {
    get().some( f => !!f.wish && f.id===product.id )
  }
})
