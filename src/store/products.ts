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
const showPrices = import.meta.env.VITE_SHOW_PRICES
const reshapedProducts =  (list, lang = 'en', usdExchangeRate = 174) => list
.map( item => ({
	...item,
	// heel: item.heel.title,
	// model: item.model.title,
	lang,
	currency: { en: `USD`, es: `ARS` }[lang],
	price: showPrices && { en: item.price, es: item.price * usdExchangeRate }[lang],
	imageSlug: item.slug,
	imageAlt: `${item.model.title} ${item.label}`,
	meta: {
		en: `${item.label} ${item.color} Leather ${item.model.label}`, 
		es: `${item.model.label} ${item.label} de Cuero ${item.color}`
	}[lang],
	heel: item.heel.slug, // for filter
	height: item.heel.height,
	title: `${item.model.title} ${item.label} ${item.color}`,
	model: item.model.label
}))


export const [products] = createResource(
  lang,
  lang => client.query(gqlQuery, { lang: [lang] }).toPromise()
  .then(({ data }) => data.products )
  .then(products => reshapedProducts(products)), 
  {
    name: 'products',
    initialValue: [],
  }
)
