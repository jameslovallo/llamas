export default function List(props) {
	const { blok } = props

	return (
		<ul className="list">
			{blok.content.map((item) => {
				const classes = () => {
					let classes = ['list__item']
					item.secondary_text && classes.push('list__item--two-line')
					return classes.join(' ')
				}

				const El =
					item.link.url.length || item.link.cached_url.length ? 'a' : 'div'

				return (
					<li className={classes()}>
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
								src={item.avatar.filename.replace(
									'https://a.storyblok.com/',
									'https://img2.storyblok.com/40x40/smart/'
								)}
								className="list__item__avatar"
							/>
						)}
						<El>
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
