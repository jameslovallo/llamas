import { render } from 'storyblok-rich-text-react-renderer'

export default function TextRich(props) {
	return <div className="text">{render(props.blok.text)}</div>
}
