import link from './utils/link'

export default function Button({ blok, submit }) {
	const classes = () => {
		let classes = ['button']
		blok.style && classes.push('button--' + blok.style)
		blok.rounded && classes.push('button--rounded')
		blok.trailing_icon && classes.push('button--trailing-icon')
		return classes.join(' ').trim()
	}

	const styles = {
		'--button': blok.color ? `var(--${blok.color})` : undefined,
		'--on-button': blok.color ? `var(--on-${blok.color})` : undefined,
	}

	const El = submit ? 'button' : 'a'
	const href = blok.link ? link(blok.link) : undefined

	return (
		<El
			className={classes()}
			style={styles}
			{...(href ? { href: href } : {})}
			{...(submit ? { type: 'submit' } : {})}
		>
			{blok.icon && (
				<span
					aria-hidden="true"
					className="button__icon"
					dangerouslySetInnerHTML={{ __html: blok.icon }}
				/>
			)}
			{blok.label && <span className="button__label">{blok.label}</span>}
		</El>
	)
}
