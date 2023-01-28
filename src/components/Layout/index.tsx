import type { JSXElement } from 'solid-js'

import Header from './Header'
import Footer from './Footer'


export default function({ children }) {
  return (
    <>
      <div class="container-fluid">
        <Header />

        { children }

        <Footer />
      </div>
    </>
  ) as JSXElement
}
