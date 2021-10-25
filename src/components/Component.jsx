import Button from './Button'
import Card from './Card'
import Code from './Code'
import Group from './Group'
import Image from './Image'
import List from './List'
import Map from './Map'
import Section from './Section'
import Spacer from './Spacer'
import TextRich from './TextRich'
import Video from './Video'

const components = {
	Button: Button,
	Card: Card,
	Code: Code,
	Group: Group,
	Image: Image,
	List: List,
	Map: Map,
	Section: Section,
	Spacer: Spacer,
	TextRich: TextRich,
	Video: Video,
}

export default function Component(props) {
	const C = components[props.blok.component]
	return <C blok={props.blok} />
}
