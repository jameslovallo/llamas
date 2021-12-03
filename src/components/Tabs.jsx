import { sbEditable } from '@storyblok/storyblok-editable'
import Children from './Children'
import responsive from './utils/responsive'

export default function Tabs({ blok }) {
	const classes = () => {
		let classes = ['tabs']
		blok.style === 'elevated' && classes.push('tabs--elevated')
		blok.style === 'outlined' && classes.push('tabs--outlined')
		return classes.join(' ').trim()
	}

	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
		'--tabs': blok.color ? `var(--${blok.color})` : undefined,
	}

	return (
		<div className={classes()} style={styles} {...sbEditable(blok)}>
			<div role="tablist" aria-label="Entertainment">
				{blok.content.map((blok, n) => (
					<button
						role="tab"
						aria-selected={n === 0}
						aria-controls={'b-tab-' + blok._uid}
						id={'b-' + blok._uid}
						{...sbEditable(blok)}
						key={blok._uid}
					>
						{blok.label}
					</button>
				))}
			</div>
			{blok.content.map((blok, n) => (
				<div
					tabIndex="0"
					role="tabpanel"
					id={'b-tab-' + blok._uid}
					aria-labelledby={'b-' + blok._uid}
					hidden={n !== 0 ? 'hidden' : ''}
					key={blok._uid}
				>
					{blok.content.map((blok) => (
						<Children blok={blok} key={blok._uid} />
					))}
				</div>
			))}
		</div>
	)
}
