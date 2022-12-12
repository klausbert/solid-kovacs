import { Link } from '@solidjs/router'

import { Lang } from './Lang'
import Nav from './Nav'


export function Wide() {
	return <>
		<div class="row">
			<nav class="col   h4">
				<br />
				<Lang />
			</nav>
			
			<nav class="col-3 h4 text-center">
				<Link href="/">
					<img class="img-fluid pt-3 pb-1" src="/logo_2020.png" alt="logo" />
				</Link>
			</nav>
			
			<nav class="col   h4 text-right">
				<br />
				{/* <ShoppingBagLink /> */}
			</nav>
		</div>

		<div class="row">
			<section class="d-none d-sm-block  col  col-lg-10 offset-lg-1">
				<Nav className="justify-content-around" />
			</section>
		</div>
	</>
}
