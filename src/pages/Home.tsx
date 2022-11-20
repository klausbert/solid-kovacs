import type { Component } from 'solid-js'
import { Link } from '@solidjs/router'

import { heels } from 'store/heels'


export const Home: Component = () => {
  console.count('Home')
  
  return (
    <h1>
      Whatever page content, { JSON.stringify(heels()) }
    </h1>
  )
};
