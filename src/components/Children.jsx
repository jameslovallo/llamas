import Button from './Button'
import Code from './Code'
import Image from './Image'
import List from './List'
import Map from './Map'
import Spacer from './Spacer'
import TextRich from './TextRich'

const components = {
	Button: Button,
	Code: Code,
	Image: Image,
	List: List,
	Map: Map,
	Spacer: Spacer,
	TextRich: TextRich,
}

export default function Children(props) {
	const C = components[props.blok.component]
	return <C blok={props.blok} />
}
