export default function Button(props) {
	return (
		<a
			className={`mdc-button mdc-ripple-upgraded ${
				props.type ? 'mdc-button--' + props.type : ''
			}`}
		>
			{props.icon && (
				<i ariaHidden="true" className="mdc-button__icon">
					{props.icon}
				</i>
			)}
			<span className="mdc-button__label">{props.blok.label}</span>
			<div className="mdc-button__ripple"></div>
		</a>
	)
}
