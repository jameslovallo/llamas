import { render } from 'storyblok-rich-text-react-renderer'
import responsive from './utils/responsive'

export default function TextRich({ blok }) {
	const styles = {
		...responsive(blok.responsive),
		textAlign: blok.alignment,
		alignSelf: blok.vertical_alignment,
	}

	return (
		<div className="text" style={styles}>
			{render(blok.text)}
		</div>
	)
}
