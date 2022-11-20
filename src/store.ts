import { createMemo, createResource, createSignal } from 'solid-js'
import { createClient } from '@urql/core'

import { query } from 'graphql'


export const [lang, setLang] = createSignal('en')
export const altLangs = createMemo(() => ['en', 'es'].filter( l => l!==lang()))


const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/ckyhexmuo1ynf01xg7vpygip5/master'
})
const fetchHeels = (lang) => client
.query(query.heels, {
  initialValue: [],
  lang: [lang]
})
.toPromise()
.then(({ data }) => data )

export const [heels] = createResource(lang, fetchHeels)
