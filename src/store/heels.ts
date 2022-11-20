import { createResource } from 'solid-js'
import { createClient, gql } from '@urql/core'

import { lang } from './lang'


const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/ckyhexmuo1ynf01xg7vpygip5/master'
})
const gqlHeels = gql`
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
  (lang) => client.query(gqlHeels, {
    initialValue: [],
    lang: [lang]
  }).toPromise().then(({ data }) => data )
)
