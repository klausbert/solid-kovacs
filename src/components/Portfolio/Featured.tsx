import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { Link } from '@solidjs/router'

import { FormattedMessage } from 'components/Stubs'


interface FeaturedProps {
	colClass?: string,
	product: any
}
const imgPath = import.meta.env.VITE_IMG_PATH


export const Featured: Component = ({ colClass = '', product }: FeaturedProps) => {
	const { slug, imageSlug, meta, height, sizes, discount = 0, price, currency, freeShipping } = product
  const [visible, isVisible] = createSignal(true)

	return (
		<div class={ colClass }>
			<div class="card" style="border: none">
				<Link href={`/portfolio/${slug}`}>
					<a class="card-body" style="position: relative; padding-bottom: 1.62rem"
							onMouseOver={() => isVisible(false)} onMouseOut={() => isVisible(true)}>
						<img class={"card-img-top "+(visible() ? "fadeIn" : "fadeOut") } 
							src={`${imgPath}/${imageSlug}-r.jpg`} alt={`${meta}`} 
						/>
						<img class={"card-img-top "+(visible() ? "fadeOut" : "fadeIn") } 
							src={`${imgPath}/${imageSlug}-f.jpg`} alt={`${meta}`} 
							style="position: absolute; bottom: 1.5rem; left: 20px; width: 90%"
						/>
						<h4 style="position: absolute; left: 0; right: 0; bottom: 0; text-transform: uppercase">
							{ product.new ? <FormattedMessage id="product.new" /> : '' }
						</h4>
					</a>
				</Link>

				<div class="card-footer text-center" style="background: none">
					<h2 class="lead"      style="whiteSpace: normal">{ meta }</h2>
					<p  class="card-text" style="whiteSpace: nowrap">{ height }</p>
					<h5 class="card-text" style="whiteSpace: normal">
					{ ! sizes ?
						<span class="text-danger" style="text-transform: uppercase">
							<FormattedMessage id="product.soldOut" />
						</span>
					: ! price ? null
					:
						<>
						{ ! discount ? null :
							<span class="text-danger mx-1" style="text-decoration: line-through">
								{ price }
							</span>
						}
						{ price - discount }
						
						<small>{ currency }</small>

						{ ! freeShipping ? null :
							<span class="text-danger" style="text-transform: uppercase">
								&nbsp; <FormattedMessage id="product.freeShipping" />
							</span>
						}
						</>
					}
					</h5>
				</div>
			</div>
		</div>
	)
}
