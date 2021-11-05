const imgs = document.querySelectorAll('.image.loading img')

imgs.forEach((img) => {
	let src = img.dataset.src
	let width = Math.round(img.clientWidth * devicePixelRatio)
	let height = Math.round(img.clientHeight * devicePixelRatio)

	img.src = src.replace('width', width).replace('height', height)

	img.addEventListener('load', () => {
		img.parentElement.classList.remove('loading')
	})
})
