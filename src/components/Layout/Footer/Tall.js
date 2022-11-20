import Link from 'next/link'
import { FiMenu, FiShoppingCart, FiHeart } from 'react-icons/fi'

import { useShoppingBag } from 'hooks/useShoppingBag'

// import DropdownButton, { styles } from 'Menu/DropdownButton'
// import Filters from 'Menu/Filters'


export function Tall({ lang }) {
	const { shoppingBag } = useShoppingBag( s => s, shallow)
	const shopCount = shoppingBag.filter( f => ! f.wish ).length
	const wishCount = shoppingBag.filter( f => !!f.wish ).length
	const shopClass = 'nav-item nav-link h4'+(shopCount ? ' bg-dark' : '')
	const wishClass = 'nav-item nav-link h4'+(wishCount ? ' bg-dark' : '')

	return (
		<div className="row">
			<div className="col">
				<nav className="nav nav-pills nav-justified">
					<span className="nav-item nav-link h4">
						{/* <DropdownButton id="hamburger" styles={ styles['light']} type="hup" label={ <FiMenu/> }>
							<Filters className="flex-column" lang={ lang } />
						</DropdownButton> */}
					</span>
					{/* <Link href="shopping-bag" className={ shopClass } style={{ color: "#febd33" }}><FiShoppingCart /></Link>
					<Link href="wish-list"    className={ wishClass } style={{ color: "#febd33" }}><FiHeart /></Link> */}
				</nav>
			</div>
		</div>
	)
} 
