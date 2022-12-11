import { Component, createMemo, For } from 'solid-js'
import { Suspense } from 'solid-js'

import { products } from 'store/products'

import { Featured } from '../Featured'
import { Gallery } from './Gallery'


const ProductDetails = (product) => (
  <section id="product" class="row pt-4">
    <div class="d-none d-sm-block col-sm-12 offset-md-1 col-md-6"> 
      <Gallery product={ product } />
    </div>			
    
    <div class="d-none d-sm-block col-sm-12 col-md-4">
      <Featured product={ product } />
    </div>
  </section>
)


interface ProductProps {
  select: Function,
  title: String
}
export const Product: Component = ({ select, title }: ProductProps) => {
  const subProducts = createMemo(
    () => products().filter(select)
  )
  return <Suspense>
    <h1>{ title }</h1>

    <For each={ subProducts() }>
      { ProductDetails }
    </For>
  </Suspense>
}


