import responsive from './utils/responsive'

export default function Video(props) {
	const { blok } = props

	return (
		<div className="video" style={responsive(blok.responsive)}>
			{blok.autoplay}
			<video
				autoPlay={blok.autoplay}
				controls={blok.controls}
				loop={blok.loop}
				muted={blok.mute}
				playsInline={blok.plays_inline}
				poster={blok.poster}
				preload="auto"
			>
				{blok.video_files.map((src) => (
					<source src={src.filename} />
				))}
			</video>
		</div>
	)
}
