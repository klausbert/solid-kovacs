import { Link } from '@solidjs/router'
import { FormattedMessage } from 'components/Stubs'

import { heels } from 'store/heels'
import { sizes } from 'store/sizes'

import DropdownButton, { styles } from './DropdownButton'


export default function Filters({ theme='light' }) {
	const args = null

	return <>
		<Link href="/view-all" class="nav-item dropdown nav-link">Tango Shoes</Link>

		<LinkWithDropdown by="heel" labelId="filters.byHeel" items={ heels() } slug={ args && args.heel } styles={ styles[theme] } />

		<LinkWithDropdown by="size" labelId="filters.bySize" items={ sizes() } slug={ args && args.size } styles={ styles[theme] } />
	</>
}


function LinkWithDropdown({ by, labelId, items, slug, styles }) {
	const itemBySlug = items?.filter( f => slug && f.slug===slug ).map( m => m.title ).join()
	||  <FormattedMessage id={ labelId } />

	const unique = []

	items.forEach( e => { ! unique.map( m => m.slug).includes(e.slug) && unique.push(e) })

	return (
		<DropdownButton className="d-none d-md-inline" styles={ styles } label={ itemBySlug }>
		{ unique
			.map( m => 
			<Link href={`/by-${by}/${m.slug}`} class="dropdown-item">{ m.title }</Link> 
		)}
		</DropdownButton>
	)
}
