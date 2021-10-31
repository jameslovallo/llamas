import Button from './Button'
import Code from './Code'
import Image from './Image'
import List from './List'
import Map from './Map'
import Spacer from './Spacer'
import TextRich from './TextRich'
import Video from './Video'

const components = {
	Button: Button,
	Code: Code,
	Image: Image,
	List: List,
	Map: Map,
	Spacer: Spacer,
	TextRich: TextRich,
	Video: Video,
}

export default function Children({ blok }) {
	const C = components[blok.component]
	return <C blok={blok} />
}
