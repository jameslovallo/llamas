import { sbEditable } from '@storyblok/storyblok-editable'
import link from './utils/link'
import responsive from './utils/responsive'

export default function List({ blok }) {
	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
		'--list': blok.color ? `var(--${blok.color})` : undefined,
		'--on-list': blok.color ? `var(--on-${blok.color})` : undefined,
	}

	return (
		<ul className="list" style={styles} {...sbEditable(blok)}>
			{blok.content.map((item) => {
				const itemClasses = () => {
					let classes = ['list__item']
					blok.icon_style === 'avatar' &&
						classes.push('list__item--avatar-icons')
					item.secondary_text && classes.push('list__item--two-line')
					return classes.join(' ')
				}

				const href = item.link ? link(item.link) : undefined
				const El = href ? 'a' : 'div'

				return (
					<li className={itemClasses()} {...sbEditable(item)}>
						{item.icon && !item.avatar.filename && (
							<div
								aria-hidden="true"
								className="list__item__icon"
								dangerouslySetInnerHTML={{ __html: item.icon }}
							/>
						)}
						{item.avatar.filename && (
							<img
								aria-hidden="true"
								src={item.avatar.filename + '/m/60x60/smart/'}
								className="list__item__avatar"
							/>
						)}
						<El
							{...(href ? { href: href } : {})}
							className="list__item__text-wrapper"
						>
							<div className="list__item__text">{item.text}</div>
							<div className="list__item__secondary__text">
								{item.secondary_text}
							</div>
						</El>
					</li>
				)
			})}
		</ul>
	)
}
