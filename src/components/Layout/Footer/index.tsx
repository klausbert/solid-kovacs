import type { JSXElement } from 'solid-js'

import { Wide } from './Wide'
// import { Footer as Tall } from './Tall'


const styleFooterTall = { background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%)" }


export default function() {
	return (
		<section class="row">
			<div class="col d-none d-sm-block">
				<Wide />
			</div>

			<div class="col d-sm-none fixed-bottom" style={ styleFooterTall }>
				{/* <Tall /> */}
			</div>
		</section>
	) as JSXElement
}
