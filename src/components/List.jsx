import link from './utils/link'

export default function List({ blok }) {
	return (
		<ul className="list">
			{blok.content.map((item) => {
				const itemClasses = () => {
					let classes = ['list__item']
					blok.icon_style === 'avatar' && classes.push('list__item--avatar-icons')
					item.secondary_text && classes.push('list__item--two-line')
					return classes.join(' ')
				}

				const El =
					item.link.url.length || item.link.cached_url.length ? 'a' : 'div'

				const href = item.link ? link(item.link) : undefined

				return (
					<li className={itemClasses()}>
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
						<El {...(href ? { href: href } : {})}>
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
