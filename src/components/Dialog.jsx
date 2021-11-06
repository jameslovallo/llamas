import SectionChildren from './SectionChildren'
import responsive from './utils/responsive'

export default function Dialog({ blok }) {
	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
	}

	return (
		<div className="dialog" style={styles}>
			<div
				className="modal__trigger"
				data-micromodal-trigger={`modal-${blok._uid}`}
				title={blok.trigger_title}
				aria-label={blok.trigger_title}
			>
				<SectionChildren blok={blok.trigger[0]} />
			</div>
			<div className="modal" id={`modal-${blok._uid}`} aria-hidden="true">
				<div className="modal__scrim" tabIndex="-1" data-micromodal-close>
					<div
						className="modal__dialog"
						role="dialog"
						aria-modal="true"
						aria-labelledby={`b-${blok._uid}-label`}
					>
						<header className="modal__dialog__header">
							<h2 id={`b-${blok._uid}-label`} className="h6">
								{blok.heading}
							</h2>
						</header>
						<div className="modal__dialog__content">
							{blok.content.map((content) => (
								<SectionChildren blok={content} />
							))}
						</div>
						<footer className="modal__dialog__footer">
							{blok.secondary_action.map((content) => (
								<SectionChildren blok={content} />
							))}
							<button
								className="button button--text"
								aria-label="Close modal"
								data-micromodal-close
							>
								Close
							</button>
						</footer>
					</div>
				</div>
			</div>
		</div>
	)
}
