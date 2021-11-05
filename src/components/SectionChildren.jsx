import Button from './Button'
import Card from './Card'
import Code from './Code'
import Form from './Form'
import Group from './Group'
import Image from './Image'
import List from './List'
import Map from './Map'
import Spacer from './Spacer'
import Video from './Video'
import TextRich from './TextRich'

const components = {
	Button: Button,
	Card: Card,
	Code: Code,
	Form: Form,
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
