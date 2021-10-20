export default function Image(props) {
	const { blok } = props
	const placeholder = `//picsum.photos/seed/${blok._uid}/400/300/`

	return <img src={placeholder} alt="" />
}
