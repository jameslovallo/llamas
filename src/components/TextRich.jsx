import { render } from 'storyblok-rich-text-react-renderer'
import responsive from './utils/responsive'

export default function TextRich({ blok }) {
	let text = JSON.stringify(blok.text)
	text = text.replace('{c}', '©').replace('{year}', new Date().getFullYear())
	text = JSON.parse(text)

	const styles = {
		...responsive(blok.responsive),
		textAlign: blok.alignment,
		alignSelf: blok.vertical_alignment,
	}

	return (
		<div className="text" style={styles}>
			{render(text)}
		</div>
	)
}
