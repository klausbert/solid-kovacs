import { Portfolio } from 'components/Portfolio'


export default function() {
  const select = f => f.heel==='high-heel'

  return <Portfolio select={ select } title="High Heel" />
}
