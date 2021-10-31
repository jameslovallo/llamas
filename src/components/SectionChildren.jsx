import Button from './Button'
import Code from './Code'
import Group from './Group'
import Image from './Image'
import List from './List'
import Map from './Map'
import Spacer from './Spacer'
import Video from './Video'
import TextRich from './TextRich'

const components = {
	Button: Button,
	Code: Code,
	Group: Group,
	Image: Image,
	List: List,
	Map: Map,
	Spacer: Spacer,
	Video: Video,
	TextRich: TextRich,
}

export default function Children({ blok }) {
	const C = components[blok.component]
	return <C blok={blok} />
}
