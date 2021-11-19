import { sbEditable } from '@storyblok/storyblok-editable'
import Children from './Children'
import responsive from './utils/responsive'

export default function Card({ blok }) {
	const classes = () => {
		let classes = ['card']
		blok.style === 'elevated' && classes.push('card--elevated')
		blok.style === 'outlined' && classes.push('card--outlined')
		return classes.join(' ').trim()
	}

	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
	}

	return (
		<div className={classes()} style={styles} {...sbEditable(blok)}>
			{blok.media.map((media) => (
				<Children blok={media} />
			))}
			{blok.content.length > 0 && (
				<div className="card__content">
					{blok.content.map((content) => (
						<Children blok={content} />
					))}
				</div>
			)}
			{blok.actions.length > 0 && (
				<div className="card__actions">
					{blok.actions.map((action) => (
						<Children blok={action} />
					))}
				</div>
			)}
		</div>
	)
}
