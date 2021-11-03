import Button from './Button'
import FormField from './FormField'
import responsive from './utils/responsive'

export default function Form({ blok }) {
	return (
		<form
			data-netlify="true"
			data-netlify-recaptcha="true"
			method="POST"
			name={blok.name}
			className="form grid"
			style={responsive(blok.responsive)}
		>
			{blok.content.map((item) => {
				return <FormField blok={item} />
			})}
			<div data-netlify-recaptcha="true"></div>
			<div className="form__actions">
				<Button blok={blok.submit_button[0]} submit="true" />
			</div>
		</form>
	)
}
