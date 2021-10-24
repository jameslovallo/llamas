import Button from './Button'
import Code from './Code'
import Group from './Group'
import Image from './Image'
import List from './List'
import Map from './Map'
import TextRich from './TextRich'

const components = {
	Button: Button,
	Code: Code,
	Group: Group,
	Image: Image,
	List: List,
	Map: Map,
	TextRich: TextRich,
}

export default function Children(props) {
	const C = components[props.blok.component]
	return <C blok={props.blok} />
}
