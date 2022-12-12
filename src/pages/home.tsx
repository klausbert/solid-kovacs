import { Link } from '@solidjs/router'

import Slider, { createSlides } from 'components/Slider'
import { FormattedMessage } from 'components/Stubs'


export default function Page({ lang }) {
  const imgPath = import.meta.env.VITE_IMG_PATH.replace('images', 'slides') // TODO: another env
  const slider = {
      desktop: { slides: createSlides({ prefix: `${imgPath}/landing_slide_`, count: 6 }) },
      mobile:  { slides: createSlides({ prefix: `${imgPath}/landing_slide_`, count: 6, classNames: ['', 's2-3', 's3-3'] }), className: "r2x3" }
  }
	return <>
		<div class="d-none d-sm-block">
			<Landing lang={ lang } m={ slider.desktop } secs={ 3 } />
		</div>
		
		<div class="d-block d-sm-none">
			<Landing lang={ lang } m={ slider.mobile } secs={ 3 } />
		</div>
	</>
}

function Landing({ lang, m, secs }) {
	const url = lang==='en' ? '/en/view-all' : '/es/view-all'

	return (
		<Slider className={ m.className } source={ m.slides } seconds={ secs }>
			<h4 class="hero-message text-center">
				<Link href={ url } class="hero-button">
					<a style="text-transform: uppercase">
							<FormattedMessage id="filters.viewAll" />
					</a>
				</Link>
			</h4>
		</Slider>
	)
}
