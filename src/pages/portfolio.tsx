import { Suspense } from 'solid-js'

import { Portfolio } from 'components/Portfolio'
import { products } from 'store/products'


export default function() {
  const filter = f => f.heel.slug==='low-heel'

  console.count('page: portfolio')
  return <Suspense>
    <pre>{ products().length }</pre>

    <Portfolio filter={ filter } />
  </Suspense>
}
