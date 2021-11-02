import Button from './Button'
import Code from './Code'
import Form from './Form'
import Image from './Image'
import List from './List'
import Map from './Map'
import Spacer from './Spacer'
import TextRich from './TextRich'
import Video from './Video'

const components = {
	Button: Button,
	Code: Code,
	Form: Form,
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
