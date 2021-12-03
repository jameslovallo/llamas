import { sbEditable } from '@storyblok/storyblok-editable'
import Button from './Button'
import FormField from './FormField'
import responsive from './utils/responsive'

export default function Form({ blok }) {
	const styles = {
		...responsive(blok.responsive),
		gap: '16px',
		'--field': blok.color ? `var(--${blok.color})` : undefined,
		'--on-field': blok.color ? `var(--on-${blok.color})` : undefined,
	}

	return (
		<form
			data-netlify="true"
			data-netlify-recaptcha="true"
			method="POST"
			name={blok.name}
			className="form grid"
			style={styles}
			{...sbEditable(blok)}
		>
			{blok.content.map((blok) => {
				return <FormField blok={blok} />
			})}
			<div data-netlify-recaptcha="true" className="form__recaptcha" />
			<div className="form__actions">
				<Button blok={blok.submit_button[0]} submit="true" />
			</div>
		</form>
	)
}
