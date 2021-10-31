import { render } from 'storyblok-rich-text-react-renderer'
import responsive from './utils/responsive'

export default function TextRich({ blok }) {
	const style = {
		...responsive(blok.responsive),
		textAlign: blok.alignment,
	}

	return (
		<div className="text" style={style}>
			{render(blok.text)}
		</div>
	)
}
