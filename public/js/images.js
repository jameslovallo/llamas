const initImage = (img) => {
	const src = img.dataset.src
	const width = Math.round(img.clientWidth * devicePixelRatio)
	const height = Math.round(img.clientHeight * devicePixelRatio)

	img.src = src.replace('width', width).replace('height', height)

	img.addEventListener('load', () => {
		img.parentElement.classList.remove('loading')
	})
}

const imgs = document.querySelectorAll(':not(.modal) .image.loading img')
imgs.forEach((img) => {
	initImage(img)
})