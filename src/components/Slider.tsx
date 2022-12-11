import { createSignal } from 'solid-js'


export const createSlides = ({ prefix, count, postfix = '.jpg', classNames = [''] }) => (
	classNames.reduce((r, c) => r.concat(
		Array.from(Array(count), (_, i) => ({ 
			className: c, 
			src: prefix +(i + 1)+ postfix,
		}))
	), [])
)

export default function Slider({ className = '', source, seconds = 4, children }) {
	if (! source) return null

	const [index, setIndex] = createSignal(0)
	const slides = Array.isArray(source) ? source : [source]

	setInterval(() => setIndex( i => slides ? (i + 1) % slides.length : 0 ), seconds * 1000)

	return (
		<div class="row">
			<div id="slideset2" class={ className }>
				{ slides.map((m, i) => 
					<div key={i} class={ m.className } style={{ 
						'background-image': `url(${m.src})`, 
						opacity:(i===index() ? 1 : 0),
						transition: 'opacity 1s ease-in-out'
					}}  data-testid={`bg-img-${i}`}>
						&nbsp;
					</div>
				)}

				<img src={ slides[0].src } alt="stub" style={{ opacity: 0 }} />
				
				{ children }
			</div>
		</div>
	)
}
