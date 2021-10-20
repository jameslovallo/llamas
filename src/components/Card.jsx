import CardChildren from './CardChildren'
import responsive from './utils/responsive'

export default function Card(props) {
	const { blok } = props

	const classes = () => {
		let classes = ['card']
		blok.outlined && classes.push('button--outlined')
		return classes.join(' ').trim()
	}

	return (
		<div className={classes()} style={responsive(blok.responsive)}>
			{blok.media.map((media) => (
				<CardChildren blok={media} />
			))}
			{blok.content.length > 0 && (
				<div className="card__content">
					{blok.content.map((content) => (
						<CardChildren blok={content} />
					))}
				</div>
			)}
			{blok.actions.length > 0 && (
				<div className="card__actions">
					{blok.actions.map((action) => (
						<CardChildren blok={action} />
					))}
				</div>
			)}
		</div>
	)
}
