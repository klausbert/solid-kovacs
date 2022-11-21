import { createResource } from 'solid-js'
import { createClient, gql } from '@urql/core'

import { lang } from './lang'


const client = createClient({ url: import.meta.env.BASE_URL })
const gqlQuery = gql`
  query Sizes($lang: [Locale!]!) {
    sizes(locales: $lang) {
      id
      slug
      title
    }
  }
`


export const [sizes] = createResource(lang,
  (lang) => client.query(gqlQuery, {
    initialValue: [],
    lang: [lang]
  }).toPromise().then(({ data }) => data.sizes )
)
