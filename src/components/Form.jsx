import FormField from './FormField'

export default function Form({ blok }) {
	return (
		<form netlify method="POST" className="form grid">
			{blok.content.map((item) => {
				return <FormField blok={item} />
			})}
		</form>
	)
}
