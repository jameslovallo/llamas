import responsive from './utils/responsive'

export default function FormField({ blok }) {
	const El = blok.type === 'textarea' ? 'textarea' : 'input'
	const Field = () => {
		if (['text', 'tel', 'email', 'textarea'].includes(blok.type)) {
			return (
				<div className={`material-input material-input--${blok.type}`}>
					<El
						id={'b-' + blok._uid}
						name={blok.label}
						type={blok.type}
						placeholder=" "
						required={blok.required}
					/>
					<div className="material-input-outline">
						<label for={'b-' + blok._uid}>
							<span>{blok.label}</span>
						</label>
					</div>
				</div>
			)
		} else if (blok.type === 'select') {
			return (
				<div className="material-input">
					<select
						id={'b-' + blok._uid}
						name={blok.label}
						required={blok.required}
					>
						<option selected disabled />
						{blok.options.split('\n').map((option) => {
							return <option>{option}</option>
						})}
					</select>
					<div className="material-input-outline">
						<label for={'b-' + blok._uid}>
							<span>{blok.label}</span>
						</label>
					</div>
					<i></i>
				</div>
			)
		} else if (['checkbox', 'radio'].includes(blok.type)) {
			return (
				<fieldset>
					<legend>{blok.label}</legend>
					{blok.options.split('\n').map((option) => {
						return (
							<label>
								<input type={blok.type} name={blok.label} />
								{blok.type === 'radio' && <i></i>}
								{blok.type === 'checkbox' && (
									<svg viewBox="0 0 24 24">
										<path d="M1.73,12.91 8.1,19.28 22.79,4.59" />
									</svg>
								)}
								{option}
							</label>
						)
					})}
				</fieldset>
			)
		}
	}
	return (
		<div className="form__field" style={responsive(blok.responsive)}>
			{Field()}
		</div>
	)
}
