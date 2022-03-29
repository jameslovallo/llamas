import Button from './Button'
import Card from './Card'
import Code from './Code'
import Dialog from './Dialog'
import Dropdown from './Dropdown'
import Form from './Form'
import Group from './Group'
import Image from './Image'
import List from './List'
import Map from './Map'
import Section from './Section'
import Spacer from './Spacer'
import Tabs from './Tabs'
import TextRich from './TextRich'
import Video from './Video'

const components = {
	Button: Button,
	Card: Card,
	Code: Code,
	Dialog: Dialog,
	Dropdown: Dropdown,
	Form: Form,
	Group: Group,
	Image: Image,
	List: List,
	Map: Map,
	Section: Section,
	Spacer: Spacer,
	Tabs: Tabs,
	TextRich: TextRich,
	Video: Video,
}

export default function Component({ blok }) {
	const C = components[blok.component]
	return <C blok={blok} />
}
