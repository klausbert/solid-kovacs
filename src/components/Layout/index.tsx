import type { JSXElement } from 'solid-js'

import Header from './Header'
import Footer from './Footer'


export default function({ children }) {
  return (
    <>
      <div class="container-fluid">
        <Header />
      </div>

      <div class="container-fluid">
        { children }

        <Footer />
      </div>
    </>
  ) as JSXElement
}
