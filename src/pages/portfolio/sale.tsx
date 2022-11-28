import { Portfolio } from 'components/Portfolio'


export default function() {
  const select = f => f.sale > 0
  
  return <Portfolio select={ select } title="Sale" />
}
