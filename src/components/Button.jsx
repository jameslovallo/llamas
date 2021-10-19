export default function Button(props) {
	const { blok } = props
	const classes = () => {
		let classes = ['button']
		blok.style && classes.push('button--' + blok.style)
		blok.rounded && classes.push('button--rounded')
		blok.trailing_icon && classes.push('button--trailing-icon')
		return classes.join(' ').trim()
	}

	return (
		<a className={classes()}>
			{blok.icon && (
				<div
					aria-hidden="true"
					className="button__icon"
					dangerouslySetInnerHTML={{ __html: blok.icon }}
				/>
			)}
			<div className="button__label">{blok.label}</div>
		</a>
	)
}
