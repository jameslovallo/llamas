import responsive from './utils/responsive'

export default function Video({ blok }) {
	return (
		<div className="video" style={responsive(blok.responsive)}>
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
