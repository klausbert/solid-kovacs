const imgPath = import.meta.env.VITE_IMG_PATH


export function Gallery({ product:{ imageSlug, imageAlt, views }}) {

	if (! imageSlug) return null
	
	const allowedViews = 'a,r,f,b,m'.split(',')
	// const allowedViews = views.join(',').replace('t', 'a').split(',')

	const strip = 'a,r,f,b,m'.split(',')
	.filter( f => allowedViews.includes(f))
	.map((m, i) => ({ id: i, src: `${imgPath}/${imageSlug}-${m}.jpg`, ref: createRef() }))
	const featured = strip.pop()

	const swapImage = (myRef) => {
		const tmp = featured.ref.current.src
		
		featured.ref.current.src = myRef.current.src
		myRef.current.src = tmp
	}
	return (
		<div class="row mb-3">
			<div id="strip" class="col-3">
			{ strip.map( m => 
				<img key={ m.id } class="img-fluid mb-3" style={{ cursor: "pointer"}} 
					src={ m.src } alt={ imageAlt } 
					ref={ m.ref } onClick={() => swapImage(m.ref)}
				/> 
			)}
			</div>

			<div id="featured" class="col">
				<img class="img-fluid" src={ featured.src } alt={ imageAlt } ref={ featured.ref } />
			</div>
		</div>
	)
}

function createRef(): any {
	// throw new Error("Function not implemented.")
	return null
}

