import Button from './Button'
import List from './List'
import Map from './Map'
import TextRich from './TextRich'

const components = {
	Button: Button,
	List: List,
	Map: Map,
	TextRich: TextRich,
}

export default function CardChildren(props) {
	const C = components[props.blok.component]
	return <C blok={props.blok} />
}
