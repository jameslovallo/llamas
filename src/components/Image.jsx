export default function Image(props) {
	const { blok } = props
	let img = {}
	let [hor, vert] = [0, 0]

	if (blok.aspect_ratio.match(/[0-9]+\/[0-9]+/)) {
		;[hor, vert] = blok.aspect_ratio.split('/')
	}

	if (blok.image.filename) {
		let asset = blok.image.filename.split('.com')[1]
		let dimensions = asset.split('/')[3]

		img.src = `https://img2.storyblok.com${
			blok.fit === 'contain' ? '/fit-in' : ''
		}/widthxheight${
			blok.fit === 'smart' ? '/smart' : ''
		}/filters:format(webp):quality(80):fill(transparent):focal(${
			blok.image.focus
		})${asset}`

		img.width = dimensions.split('x')[0]
		img.height = dimensions.split('x')[1]

		if (hor && vert) {
			img.height = (img.width * vert) / hor
		}

		const padding = Math.round((img.height / img.width) * 100) + '%'

		img.styles = {
			paddingTop: blok.fixed_width ? undefined : padding,
			width: blok.fixed_width,
			filter: `brightness(${blok.brightness})
				contrast(${blok.contrast})
				saturate(${blok.saturation})
				grayscale(${blok.grayscale ? 1 : 0})`
		}

		img.tiny = img.src
			.replace('width', img.hor * 2)
			.replace('height', img.vert * 2)

		return (
			<div className="image loading" style={img.styles}>
				<img
					src={img.tiny || ''}
					data-src={img.src}
					loading="lazy"
					width={img.width}
					height={img.height}
				/>
			</div>
		)
	}
}
