import type { JSXElement } from 'solid-js'

import { Wide } from './Wide'
import { Tall } from './Tall'


export default function() {
	return (
		<header class="class">
			<div class="d-none d-sm-block">
				<Wide />
			</div>
			
			<div class="d-block d-sm-none">
				<Tall />
			</div>
		</header>
	) as JSXElement
}
