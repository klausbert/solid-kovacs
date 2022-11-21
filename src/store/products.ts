import { createResource } from 'solid-js'
import { createClient, gql } from '@urql/core'

import { lang } from './lang'


const client = createClient({ url: import.meta.env.BASE_URL })
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


export const [products] = createResource(lang,
  (lang) => client.query(gqlQuery, {
    initialValue: [],
    lang: [lang]
  }).toPromise().then(({ data }) => data.products )
)
