import { createRef } from 'react'


const imgPath = process.env.NEXT_PUBLIC_IMG_PATH


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
        <div className="row mb-3">
            <div id="strip" className="col-3">
            { strip.map( m => 
                <img key={ m.id } className="img-fluid mb-3" style={{ cursor: "pointer"}} 
                    src={ m.src } alt={ imageAlt } 
                    ref={ m.ref } onClick={() => swapImage(m.ref)}
                /> 
            )}
            </div>

            <div id="featured" className="col">
                <img className="img-fluid" src={ featured.src } alt={ imageAlt } ref={ featured.ref } />
            </div>
        </div>
    )
}
