document.querySelectorAll('.dropdown').forEach((el) => {
	const button = el.querySelector('summary .button')
	const content = el.querySelector('.dropdown__content')
	let contentRect = content.getBoundingClientRect()

	button.addEventListener('click', (e) => {
		e.preventDefault()
		if (contentRect.x + content.offsetWidth >= window.innerWidth) {
			content.style.right = 0
		}
		button.parentElement.click()
		document.body.addEventListener('click', clickToDismiss)
	})

	const clickToDismiss = (e) => {
		if (!e.path.includes(el)) {
			el.open = false
			content.style.right = ''
			document.body.removeEventListener('click', clickToDismiss)
		}
	}
})
