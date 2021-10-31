export default function Map({ blok }) {
	const regex = new RegExp('[0-9]+(/|x)[0-9]+')
	const width = blok.base_width
	let height = Math.round((blok.base_width * 9) / 16)
	if (regex.test(blok.aspect_ratio)) {
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

	return (
		<div className="map">
			<a href={'https://google.com/maps/search/' + locations}>
				<img
					src={base + query + satellite + size + zoom + key}
					alt={'Map showing ' + locations}
					height={height}
					width={width}
				/>
			</a>
		</div>
	)
}
