import type { Component } from 'solid-js'
import { Link } from '@solidjs/router'

import { heels } from 'store/heels'
import { models } from 'store/models'
import { products } from 'store/products'
import { rates } from 'store/rates'
import { sizes } from 'store/sizes'


export const Home: Component = () => {
  console.count('Home')
  
  return (
    <section>
      <h1>Whatever page content</h1>

      <pre>{ JSON.stringify(heels(), null, 2) }</pre>
      <pre>{ JSON.stringify(models(), null, 2) }</pre>
      <pre>{ JSON.stringify(products(), null, 2) }</pre>
      <pre>{ JSON.stringify(rates(), null, 2) }</pre>
      <pre>{ JSON.stringify(sizes(), null, 2) }</pre>
    </section>
  )
};
