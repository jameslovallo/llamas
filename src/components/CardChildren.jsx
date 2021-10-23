import Button from './Button'
import Image from './Image'
import List from './List'
import Map from './Map'
import TextRich from './TextRich'

const components = {
	Button: Button,
	Image: Image,
	List: List,
	Map: Map,
	TextRich: TextRich,
}

export default function CardChildren(props) {
	const C = components[props.blok.component]
	return <C blok={props.blok} />
}
