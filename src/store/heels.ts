import { createResource } from 'solid-js'
import { createClient, gql } from '@urql/core'

import { lang } from './lang'


const client = createClient({ url: import.meta.env.VITE_GRAPHCMS_URL })
const gqlQuery = gql`
  query Heels($lang: [Locale!]!) {
    heels(locales: $lang) {
      id
      slug
      title
      height
    }
  }
`


export const [heels] = createResource(lang,
  (lang) => client.query(gqlQuery, {
    initialValue: [],
    lang: [lang]
  }).toPromise().then(({ data }) => data.heels )
)
