import Button from './Button'
import TextRich from './TextRich'

export default function Card(props) {
	const { blok } = props
	return (
		<div
			className={`card ${blok.outlined ? 'card--outlined' : ''}`}
			style={blok.style}
		>
			{blok.content.length > 0 && (
				<div className="card__text">
					{blok.content.map((content) => (
						<TextRich blok={content} />
					))}
				</div>
			)}
			<div className="card__actions">
				{blok.actions.map((action) => (
					<Button blok={action} />
				))}
			</div>
		</div>
	)
}
