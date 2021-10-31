import Children from './Children'

export default function Tabs({ blok }) {
	const classes = () => {
		let classes = ['tabs']
		blok.style === 'elevated' && classes.push('tabs--elevated')
		blok.style === 'outlined' && classes.push('tabs--outlined')
		return classes.join(' ').trim()
	}

	return (
		<div className={classes()}>
			<div role="tablist" aria-label="Entertainment">
				{blok.content.map((content, n) => (
					<button
						role="tab"
						aria-selected={n === 0}
						aria-controls={'b-tab-' + content._uid}
						id={'b-' + content._uid}
					>
						{content.label}
					</button>
				))}
			</div>
			{blok.content.map((content, n) => (
				<div
					tabIndex="0"
					role="tabpanel"
					id={'b-tab-' + content._uid}
					aria-labelledby={'b-' + content._uid}
					hidden={n !== 0 ? 'hidden' : ''}
				>
					{content.content.map((content) => (
						<Children blok={content} />
					))}
				</div>
			))}
		</div>
	)
}
