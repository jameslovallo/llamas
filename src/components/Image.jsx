import responsive from './utils/responsive'

export default function Image({ blok }) {
	let img = {}
	let [hor, vert] = [0, 0]

	if (blok.aspect_ratio.match(/[0-9]+\/[0-9]+/)) {
		;[hor, vert] = blok.aspect_ratio.split('/')
	}

	if (blok.image.filename) {
		const dimensions = blok.image.filename.split('/')[5]
		const contain = blok.fit === 'contain' ? '/fit-in' : ''
		const smart = blok.fit === 'smart' ? '/smart' : ''
		const focus = blok.image.focus ? `:focal${blok.image.focus})` : ''

		img.src = `${blok.image.filename}/m${contain}/widthxheight${smart}/filters:quality(80):fill(transparent):focal(${focus})`

		img.width = dimensions.split('x')[0]
		img.height = dimensions.split('x')[1]

		if (hor && vert) {
			img.height = (img.width * vert) / hor
		}

		const padding = Math.round((img.height / img.width) * 100) + '%'

		img.styles = {
			...responsive(blok.responsive),
			paddingTop: blok.fixed_width ? undefined : padding,
			width: blok.fixed_width,
			filter: `brightness(${blok.brightness})
				contrast(${blok.contrast})
				saturate(${blok.saturation})
				grayscale(${blok.grayscale ? 1 : 0})`,
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
