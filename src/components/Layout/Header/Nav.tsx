import { A } from '@solidjs/router'
import { FormattedMessage } from 'components/Stubs'

import Filters from './Filters'


export default function Nav({ className='', theme='light' }) {

	return (
		<nav id="filters" class={`nav h5 ${className}`} style="letterSpacing: -1px">
			<Filters />

			<A href="/world" class="nav-item dropdown nav-link">
				<FormattedMessage id="site.about" />
			</A>

			<A href="/boutique" class="nav-item dropdown nav-link">
				Boutique
			</A>

			<A href="/lookbook" class="nav-item dropdown nav-link">
				Lookbook
			</A>

			<A href="/contact" class="nav-item dropdown nav-link">
					<FormattedMessage id="site.contactUs" />
			</A>
		</nav>
	)
}
