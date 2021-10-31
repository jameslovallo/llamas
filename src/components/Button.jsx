import link from './utils/link'

export default function Button({ blok }) {
	const classes = () => {
		let classes = ['button']
		blok.style && classes.push('button--' + blok.style)
		blok.rounded && classes.push('button--rounded')
		blok.trailing_icon && classes.push('button--trailing-icon')
		return classes.join(' ').trim()
	}

	const href = blok.link ? link(blok.link) : undefined

	return (
		<a className={classes()} {...(href ? { href: href } : {})}>
			{blok.icon && (
				<div
					aria-hidden="true"
					className="button__icon"
					dangerouslySetInnerHTML={{ __html: blok.icon }}
				/>
			)}
			{blok.label && <div className="button__label">{blok.label}</div>}
		</a>
	)
}
