import Button from './Button'
import TextRich from './TextRich'

export default function Card(props) {
	return (
		<div
			className={`mdc-card ${props.outlined ? 'mdc-card--outlined' : ''}`}
			style={props.style}
		>
			<div className="mdc-card-wrapper__text-section">
				{props.blok.content.map((content) => (
					<TextRich blok={content} />
				))}
			</div>
			<div className="mdc-card__actions">
				{props.blok.actions.map((action) => (
					<Button blok={action} />
				))}
			</div>
		</div>
	)
}
