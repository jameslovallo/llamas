import Button from './Button'
import Card from './Card'
import Image from './Image'
import List from './List'
import Map from './Map'
import TextRich from './TextRich'

const components = {
	Button: Button,
	Card: Card,
	Image: Image,
	List: List,
	Map: Map,
	TextRich: TextRich,
}

export default function Component(props) {
	const C = components[props.blok.component]
	return <C blok={props.blok} />
}
