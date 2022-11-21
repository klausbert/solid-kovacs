import type { ResourceOptions, ResourceReturn } from 'solid-js'
import { createResource } from 'solid-js'
import { createClient, gql } from '@urql/core'

import { lang } from './lang'


const client = createClient({ url: import.meta.env.VITE_GRAPHCMS_URL })
const gqlQuery = gql`
  query Products($lang: [Locale!]!) {
    products(where: {visible: true}, locales: $lang) {
      id
      label
      color
      description
      heel {
        height
        slug
        title # TODO: unused?
      }
      model {
        label
        meta
        slug
        title
      }
      new
      patch
      price
      row
      sale
      slug
      sizes {
        slug
      }
    }
  }
`


export const [products] = createResource(
  lang,
  lang => client.query(gqlQuery, { lang: [lang] }).toPromise().then(({ data }) => data.products ), 
  {
    name: 'products',
    initialValue: [],
  }
)
