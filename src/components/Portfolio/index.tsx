import { Component, createMemo, For } from 'solid-js'
import { Suspense } from 'solid-js'

import { products } from 'store'

import { Featured } from './Featured'


export const Portfolio: Component = ({ select, title }) => {
  const subProducts = createMemo(
    () => products().filter(select)
  )
  const rows = createMemo(() => subProducts()
    .map( m => ({...m, row: `${m.new ? 'A' : 'Z'}  ${m.row}` }))
    .reduce((r, c) => (r[c.row] = (r[c.row] || []).concat(c)) && r, {})
    // .sort((a, b) => a.sort < b.sort ? -1 : a.sort===b.sort ? 0 : 1)
  )
  return <Suspense>
    <h1>{ title }</h1>

    <For each={ Object.keys(rows()).sort().map( row => rows()[row]) }>
      { Product }
    </For>
  </Suspense>
}

function Product(row) {
  const length = row.length
  const colClass = length===1 ? 'col-6 offset-3' : 'col'

  return (
    <div className="row featured" style="background: WHITE">
    { 
      row.map((m, i) => <Featured colClass={ colClass } product={ m } /> )
    }
    </div>
  )
}
