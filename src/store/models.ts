import { createResource } from 'solid-js'
import { createClient, gql } from '@urql/core'

import { lang } from './lang'


const client = createClient({ url: import.meta.env.BASE_URL })
const gqlQuery = gql`
  query Models($lang: [Locale!]!) {
    models(locales: $lang) {
      id
      slug
      label
      title
      meta
    }
  }
`


export const [models] = createResource(lang,
  (lang) => client.query(gqlQuery, {
    initialValue: [],
    lang: [lang]
  }).toPromise().then(({ data }) => data.models )
)
