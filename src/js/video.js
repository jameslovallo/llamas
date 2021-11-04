document.querySelectorAll('.video--yt').forEach((vid) => {
	vid.querySelector('button').addEventListener('click', () => {
		vid.querySelector('iframe').src = vid.dataset.src
		vid.classList.add('video--yt--active')
	})
})
