import { sbEditable } from '@storyblok/storyblok-editable'
import SectionChildren from './SectionChildren'

export default function section({ blok }) {
	const styles = {
		'--section': blok.color ? `var(--${blok.color})` : undefined,
		'--on-section': blok.color ? `var(--on-${blok.color})` : undefined,
	}

	return (
		<div
			className={`section ${blok.style}`}
			style={styles}
			{...sbEditable(blok)}
		>
			{blok.style.includes('swoop') && <div className="section__top" />}
			<div className="grid">
				{blok.content.map((blok) => (
					<SectionChildren blok={blok} key={blok._uid} />
				))}
			</div>
		</div>
	)
}
