import SectionChildren from './SectionChildren'

export default function section({ blok }) {
	const styles = {
		'--section': blok.color ? `var(--${blok.color})` : undefined,
		'--on-section': blok.color ? `var(--on-${blok.color})` : undefined,
	}

	return (
		<div className={`section ${blok.style}`} style={styles}>
			{blok.style.includes('swoop') && <div className="section__top" />}
			{blok.content.length > 0 && (
				<div className="grid">
					{blok.content.map((content) => (
						<SectionChildren blok={content} />
					))}
				</div>
			)}
		</div>
	)
}
