import { Link } from '@solidjs/router'
import { FormattedMessage } from 'components/Stubs'

import Filters from './Filters'


export default function Nav({ className='', theme='light' }) {

	return (
		<nav id="filters" class={`nav h5 ${className}`} style="letterSpacing: -1px">
			<Filters />

			<Link href="/world">
				<a class="nav-item dropdown nav-link">
					<FormattedMessage id="site.about" />
				</a>
			</Link>

			<Link href="/boutique">
				<a class="nav-item dropdown nav-link">Boutique</a>
			</Link>

			<Link href="/lookbook">
				<a class="nav-item dropdown nav-link">Lookbook</a>
			</Link>

			<Link href="/contact">
				<a class="nav-item dropdown nav-link">
					<FormattedMessage id="site.contactUs" />
				</a>
			</Link>
		</nav>
	)
}
