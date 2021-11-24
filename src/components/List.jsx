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
					<li {...sbEditable(item)}>
						<El className={itemClasses()} {...(href ? { href: href } : {})}>
							{item.icon && !item.avatar.filename && (
								<span
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
							<span className="list__item__text-wrapper">
								<span className="list__item__text">{item.text}</span>
								<span className="list__item__secondary__text">
									{item.secondary_text}
								</span>
							</span>
						</El>
					</li>
				)
			})}
		</ul>
	)
}
