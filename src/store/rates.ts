import { createResource } from 'solid-js'
import { createClient, gql } from '@urql/core'

import { lang } from './lang'


const client = createClient({ url: import.meta.env.VITE_GRAPHCMS_URL })
const gqlQuery = gql`
  query Rates($lang: [Locale!]!) {
    rates(locales: $lang) {
      shipTo
      rate
    }
  }
`


export const [rates] = createResource(lang,
  (lang) => client.query(gqlQuery, {
    initialValue: [],
    lang: [lang]
  }).toPromise().then(({ data }) => data.rates )
)
