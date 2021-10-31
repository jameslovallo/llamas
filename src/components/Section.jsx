import SectionChildren from './SectionChildren'

export default function section({ blok }) {
	return (
		<div className={`section ${blok.style}`}>
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
