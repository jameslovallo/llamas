import { sbEditable } from '@storyblok/storyblok-editable'
import responsive from './utils/responsive'

export default function Map({ blok }) {
	const width = blok.base_width
	let height = Math.round((blok.base_width * 9) / 16)

	if (/[0-9]+(\/|x)[0-9]+/.test(blok.aspect_ratio)) {
		const arr = blok.aspect_ratio.split('/')
		height = Math.round((arr[1] / arr[0]) * width)
	}

	const base = 'https://maps.googleapis.com/maps/api/staticmap?'
	const locations = blok.location.split('\n').join('|')
	const markers =
		!locations.includes('|') && blok.hide_pins ? 'center' : 'markers'
	const query = markers + '=' + locations
	const satellite = blok.satellite ? '&maptype=satellite' : ''
	const size = `&size=${width}x${height}&scale=2`
	const zoom = '&zoom=' + blok.zoom_level
	const key = '&key=AIzaSyCxqAHXuQxKJh84FPydDkFcXyA2x7wIZVA'

	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
		display: 'block',
		position: 'relative',
		paddingTop: (height / width) * 100 + '%',
	}

	return (
		<a
			className="map"
			href={'https://google.com/maps/search/' + locations}
			style={{ ...styles }}
			{...sbEditable(blok)}
		>
			<img
				src={base + query + satellite + size + zoom + key}
				alt={'Map showing ' + locations}
				height={height}
				width={width}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}
			/>
		</a>
	)
}
