import { Component, createMemo, For } from 'solid-js'

import { products } from 'store/products'
import { Featured } from './Featured'


export const Portfolio: Component = ({ filter }) => {
  const subProducts = createMemo(() => products().filter(filter))

  return <>
    <h1>Portfolio</h1>
    {/* <pre>{ JSON.stringify(subProducts(), null, 2) }</pre> */}
    <For each={ subProducts() }>
      {(item) => <Featured item={ item }></Featured>}
    </For>
  </>
}
