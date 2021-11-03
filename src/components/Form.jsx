import Button from './Button'
import FormField from './FormField'

export default function Form({ blok }) {
	return (
		<form netlify method="POST" name={blok.name} className="form grid">
			{blok.content.map((item) => {
				return <FormField blok={item} />
			})}
			<div className="form__actions">
				<Button blok={blok.submit_button[0]} submit="true" />
			</div>
		</form>
	)
}
