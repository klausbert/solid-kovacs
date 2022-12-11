import Slider from 'components/Slider'


export function Carousel({ product:{ imageSlug, imageAlt }}) {
  if (! imageSlug) return null
  // https://www.npmjs.com/package/react-image-scroller
  
  const imgPath = import.meta.env.VITE_IMG_PATH
  const source = 'marfb'.split('').map((m, i) => ({ id: i, src: `${imgPath}/${imageSlug}-${m}.jpg` }))

  return <Slider className="v2x3 carousel" source={ source } />
}
