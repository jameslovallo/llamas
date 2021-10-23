import CardChildren from './CardChildren'
import responsive from './utils/responsive'

export default function Group(props) {
	const { blok } = props
	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
	}

	return (
		<>
			{blok.content.length > 0 && (
				<div className="group" style={styles}>
					{blok.content.map((blok) => (
						<CardChildren blok={blok} />
					))}
				</div>
			)}
		</>
	)
}
