import { Portfolio } from 'components/Portfolio'


export default function() {
  const select = f => f.heel==='mid-heel'

  return <Portfolio select={ select } title="Mid Heel" />
}
