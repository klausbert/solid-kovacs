import { A } from '@solidjs/router'

import { FiFacebook, FiInstagram } from '../../Stubs'
import { FormattedMessage } from '../../Stubs'


export function Wide() {

	return (
		<footer class="pt-3">
			<div class="text-center">
				<div class="h3">
					<a class="mx-2" href="https://www.facebook.com/kovacstangoshoes">
						<FiFacebook />
					</a>

					<a class="mx-2" href="https://www.instagram.com/kovacstangoshoes">
						<FiInstagram />
					</a>
				</div>

				<div class="h6 display-flex justify-content-around">
					<A href="/legal/terms"  ><FormattedMessage id="legal.terms" /></A>
					<A href="/legal/privacy"><FormattedMessage id="legal.privacy" /></A>
				</div>
			</div>
		</footer>
	)
}
