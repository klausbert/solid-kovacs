import { gql } from '@urql/core'


export const query = {
	heels: gql`
		query Heels($lang: [Locale!]!) {
			heels(locales: $lang) {
				id
				slug
				title
				height
			}
		}
	`,
	models: gql`
		query Models($lang: [Locale!]!) {
			models(locales: $lang) {
				id
				slug
				label
				title
				meta
			}
		}
	`,
	products: gql`
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
	`,
	rates: gql`
		query Rates($lang: [Locale!]!) {
			rates(locales: $lang) {
				shipTo
				rate
			}
		}
	`,
	sizes: gql`
		query Sizes($lang: [Locale!]!) {
			sizes(locales: $lang) {
				id
				slug
				title
			}
		}
	`,
}
