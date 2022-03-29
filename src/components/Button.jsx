import { sbEditable } from '@storyblok/storyblok-editable'
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

	const href = blok.link ? link(blok.link) : undefined
	const El = submit || href === undefined ? 'button' : 'a'

	return (
		<El
			className={classes()}
			style={styles}
			{...(href ? { href: href } : {})}
			{...(submit ? { type: 'submit' } : {})}
			{...sbEditable(blok)}
		>
			<span className="button__background"></span>
			<span className="button__content">
				{blok.icon && (
					<span
						aria-hidden="true"
						className="button__icon"
						dangerouslySetInnerHTML={{ __html: blok.icon }}
					/>
				)}
				{blok.label && <span className="button__label">{blok.label}</span>}
			</span>
		</El>
	)
}
