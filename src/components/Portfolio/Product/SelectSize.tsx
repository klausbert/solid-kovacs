import { sizes, useSelectedSize, useShoppingBag } from 'store'


export function SelectSize({ product }) {
	const { isInBag } = useShoppingBag()
	const { size, setSize } = useSelectedSize()

  return (
    <nav id="selectSize">
    { sizes().map( sz => {
      const unavailable = ! product.sizes.some( f => f.slug===sz.slug )
              
      return (
        <div class="btn-group" style={{ margin: "0 2px"}} role="group">
          <input class={"btn btn-outline-dark"+(size && size===sz.slug ? " active" : "")+(unavailable ? " unavailable" : "")}
            type="button" disabled={ isInBag(product) || unavailable } 
            value={ sz.title.split(' ')[1] }
            onClick={() => setSize(sz.slug)}
          />
        </div>
      )
    })}
    </nav>
  )
}
