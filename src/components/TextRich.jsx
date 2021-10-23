import { render } from 'storyblok-rich-text-react-renderer'
import responsive from './utils/responsive'

export default function TextRich(props) {
	return <div className="text" style={responsive(props.blok.responsive)}>{render(props.blok.text)}</div>
}
