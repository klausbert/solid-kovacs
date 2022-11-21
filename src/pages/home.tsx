import { heels } from 'store/heels'
import { models } from 'store/models'
import { products } from 'store/products'
import { rates } from 'store/rates'
import { sizes } from 'store/sizes'


export default function() {
  console.count('Home')
  
  return (
    <section class="container-fluid">
      <h1>Whatever page content</h1>

      <div class="row">
        <div class="col">
          <div>{ JSON.stringify(heels(), null, 2) }</div>
          <div>{ JSON.stringify(models(), null, 2) }</div>
        </div>

        <div class="col">{ JSON.stringify(products(), null, 2) }</div>

        <div class="col">
          <div>{ JSON.stringify(rates(), null, 2) }</div>
          <div>{ JSON.stringify(sizes(), null, 2) }</div>
        </div>
      </div>
    </section>
  )
};
