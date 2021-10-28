import { render } from 'storyblok-rich-text-react-renderer'
import responsive from './utils/responsive'

export default function TextRich(props) {
	const style = {
		...responsive(props.blok.responsive),
		textAlign: props.blok.alignment
	}
	
	return <div className="text" style={style}>{render(props.blok.text)}</div>
}
