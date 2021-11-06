import responsive from './utils/responsive'

export default function Video({ blok }) {
	if (!blok.youtube_video_id) {
		return (
			<div
				className="video"
				style={{
					...responsive(blok.responsive),
					alignSelf: blok.vertical_alignment,
				}}
			>
				<video
					autoPlay={blok.autoplay}
					controls={blok.controls}
					loop={blok.loop}
					muted={blok.mute}
					playsInline={blok.plays_inline}
					poster={blok.poster.filename}
					preload="auto"
				>
					{blok.video_files.map((src) => (
						<source src={src.filename} />
					))}
				</video>
			</div>
		)
	} else {
		const posterSize = blok.use_hd_poster ? 'maxresdefault' : 'hqdefault'
		return (
			<div
				className="video--yt"
				data-src={`https://www.youtube.com/embed/${blok.youtube_video_id}?autoplay=1`}
				style={{
					...responsive(blok.responsive),
					alignSelf: blok.vertical_alignment,
					backgroundImage: `url(https://img.youtube.com/vi/${blok.youtube_video_id}/${posterSize}.jpg)`,
				}}
			>
				<div className="video--yt__content">
					<button className="video--yt__play-button" aria-label="Play Video">
						<svg version="1.1" viewBox="0 0 68 48">
							<path
								className="video--yt__play-button__bg"
								d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
								fill="rgba(33,33,33,0.8)"
							></path>
							<path d="M 45,24 27,14 27,34" fill="#fff"></path>
						</svg>
					</button>
				</div>
				<iframe
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		)
	}
}
