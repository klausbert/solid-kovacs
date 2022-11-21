import type { Component } from 'solid-js'


export const Featured: Component = (props) => {
  return <>
    <h2>Featured</h2>
    <pre>{ JSON.stringify(props, null, 2) }</pre>
  </>
}
