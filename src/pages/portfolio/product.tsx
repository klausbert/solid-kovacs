import { useParams } from '@solidjs/router'

import { Product } from 'components/Portfolio/Product/index'


export default function() {
  const { id } = useParams()
  const select = f => f.slug===id

  return <Product select={ select } title="by ID" />
}
