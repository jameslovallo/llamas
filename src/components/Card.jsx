import CardChildren from './CardChildren'

export default function Card(props) {
	const { blok } = props
	return (
		<div
			className={`card ${blok.outlined ? 'card--outlined' : ''}`}
			style={blok.style}
		>
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
