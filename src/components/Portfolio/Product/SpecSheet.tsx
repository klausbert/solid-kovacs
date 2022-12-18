import { Link } from '@solidjs/router'
import Markdown from 'solid-markdown'
import { FormattedMessage } from 'components/Stubs'
import { FiShoppingBag, FiHeart } from 'react-icons/fi'

import { SelectSize } from './SelectSize'

import { sizes, useSelectedSize, useShoppingBag } from 'store'


const imgPath = import.meta.env.VITE_IMG_PATH


export function SpecSheet({ product, children }) {
	const { addToBag, isInBag, isAWish } = useShoppingBag()
	const { size } = useSelectedSize()
	// const [ addToBag, isInBag, isAWish ] = useShoppingBag( s => [ s.addToBag, s.isInBag, s.isAWish ])
	// const [ size, setSize ] = useSelectedSize()

	const addToShoppingBag = () => addToBag({...product, wish: false })
	const addToWishList    = () => addToBag({...product, wish: true  })

	const { price, meta, height, patch, description, discount = 0, currency, freeShipping } = product
console.count('SpecSheet re-rendered')

	return (
		<>
			<h1 class="text-center">{ meta }</h1>
			
			{ children }

			<div class="media color mb-3">
				<div class="media-body lead"><FormattedMessage id="product.heel" /> { height }</div>
				{ patch.substr(0, 1)==='#' ?
					<div style={{ width: "1.62em", height: "1.62em", backgroundColor: patch }}>&nbsp;</div>
				:
					<img class="align-self-center " src={`${imgPath}/${patch}`} alt="patch" style={{ width: "1.62em", height: "1.62em" }} />
				}
			</div>
			
			<Markdown class="md" children={ description } />
			
			<h3>
			{ ! sizes ?
				<span class="text-danger" style={{ textTransform: "uppercase" }}>
					<FormattedMessage id="product.soldOut" />
				</span>
			: ! price ? null
			:
				<>
				$
				{ ! discount ? null :
					<span class="text-danger mx-1" style={{ textDecoration: "line-through" }}>
						{ price }
					</span>
				}
				{ price - discount } <small>{ currency }</small>

				{ ! freeShipping ? null :
					<span class="text-danger" style={{ textTransform: "uppercase" }}>
						&nbsp; <FormattedMessage id="product.freeShipping" />
					</span>
				}
				</>
			}
			</h3>

			<p class="d-flex justify-content-between">
				<b class="mt-2"><FormattedMessage id="product.choose" /></b>

				<Link href="/size-guide">
					<b class="nav-item nav-link text-primary">
						<FormattedMessage id="product.guide" />
					</b>
				</Link>
			</p>

			<SelectSize product={ product } />

			<h6>&nbsp;</h6>

			<div class="row no-gutters mb-4">
				<div class="col-9 col-sm-10">
				{ ! product.sizes ?
					<button class="btn btn-block btn-outline-danger" disabled>
						<FormattedMessage id="product.soldOut" />
					</button>
				: ! product.price ? null
				: size==='' ?
					<button class="btn btn-block btn-outline-dark" disabled>
						<FormattedMessage id="product.choose" />
					</button>
				: isInBag(product) ?
					<button class="btn btn-block btn-outline-success" disabled>
						<FormattedMessage id="product.is" />
					</button>
				:
					<button class="btn btn-block btn-secondary" onClick={ addToShoppingBag }>
						<FormattedMessage id="product.add" /> <FiShoppingBag />
					</button>
				}
				</div>

				<div class="col-3 col-sm-2 text-right">
					<button class={"btn ml-2 "+(isAWish(product) ? "btn-dark" : "btn-outline-dark")} 
							onClick={ addToWishList }>
						<FiHeart />
					</button>
				</div>
			</div>
		</>
	)
} 
