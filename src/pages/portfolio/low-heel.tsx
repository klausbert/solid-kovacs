import { Portfolio } from 'components/Portfolio'


export default function() {
  const select = f => f.heel==='low-heel'

  return <Portfolio select={ select } title="Low Heel" />
}
