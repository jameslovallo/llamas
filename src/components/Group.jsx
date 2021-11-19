import { sbEditable } from '@storyblok/storyblok-editable'
import Children from './Children'
import responsive from './utils/responsive'

export default function Group({ blok }) {
	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
	}

	return (
		<>
			{blok.content.length > 0 && (
				<div className="group" style={styles} {...sbEditable(blok)}>
					{blok.content.map((blok) => (
						<Children blok={blok} />
					))}
				</div>
			)}
		</>
	)
}
