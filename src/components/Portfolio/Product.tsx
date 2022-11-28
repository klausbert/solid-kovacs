import { Component, createMemo, For } from 'solid-js'
import { Suspense } from 'solid-js'

import { products } from 'store/products'

import { Featured } from './Featured'


export const Product: Component = ({ select, title }) => {
  const subProducts = createMemo(
    () => products().filter(select)
  )
  return <Suspense>
    <h1>{ title }</h1>

    <For each={ subProducts() }>
      { product => <Featured product={ product } /> }
    </For>
  </Suspense>
}
