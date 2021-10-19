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

				return (
					<li className={classes()}>
						<div>
							<div className="list__item__text">{item.text}</div>
							<div className="list__item__secondary__text">
								{item.secondary_text}
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}
