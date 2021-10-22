export default function Image(props) {
	const { blok } = props
	let img = {}
	if (blok.image.filename) {
		let asset = blok.image.filename.split('.com')[1]
		let dimensions = asset.split('/')[3]
		img.src =
			'https://img2.storyblok.com/widthx0/filters:format(webp):quality(80)' +
			asset
		img.width = dimensions.split('x')[0]
		img.height = dimensions.split('x')[1]
		img.paddingTop = (img.height / img.width) * 100 + '%'
	} else return `https//picsum.photos/seed/${blok._uid}/400/300`

	return (
		<div className="image loading" style={{ paddingTop: img.paddingTop }}>
			<img data-src={img.src} width={img.width} height={img.height} />
		</div>
	)
}
