import Link from 'next/link'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import shallow from 'zustand/shallow'

import { useShoppingBag } from 'hooks/useShoppingBag'


const showPrices = process.env.NEXT_PUBLIC_SHOW_PRICES==='true'


export function ShoppingBagLink() {
	const [ shoppingBag ] = useShoppingBag( s => [ s.shoppingBag ], shallow)

	const bagCount = shoppingBag.filter( f => ! f.wish ).length
	
	return <>
		{ !showPrices ? null :
			<Link href="/shopping-bag">
				<a style={{ position: 'relative' }}>
					<FiShoppingCart />

					<span className={ bagCount ? "badge" : "d-none" } style={{ position: 'absolute', top: '-0.7em', left: '0.5em' }}>
						{ bagCount }
					</span>
				</a>
			</Link>
		}
		&nbsp;&nbsp;&nbsp;
		<Link href="/wish-list">
			<a><FiHeart /></a>
		</Link>
	</>
}
