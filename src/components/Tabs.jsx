import { sbEditable } from '@storyblok/storyblok-editable'
import Children from './Children'
import responsive from './utils/responsive'

export default function Tabs({ blok }) {
	const classes = () => {
		let classes = ['spicy']
		blok.style === 'elevated' && classes.push('spicy--elevated')
		blok.style === 'outlined' && classes.push('spicy--outlined')
		return classes.join(' ').trim()
	}

	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
		'--tabs': blok.color ? `var(--${blok.color})` : undefined,
		'--const-mq-affordances': `[(max-width: 480px)] ${blok.mobile_format} |
			[(min-width: 480px) and (max-width: 1024px)] ${blok.tablet_format} |
    	[(min-width: 1024px)] ${blok.desktop_format}`,
	}

	const H = 'h' + blok.heading_level

	return (
		<spicy-sections class={classes()} style={styles} {...sbEditable(blok)}>
			{blok.content.map((blok) => (
				<>
					<H className="spicy__heading" key={blok._uid}>
						{blok.label}
					</H>
					<>
						{blok.content.map((blok) => (
							<Children blok={blok} key={blok._uid} />
						))}
					</>
				</>
			))}
		</spicy-sections>
	)
}
