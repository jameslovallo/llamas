document.querySelectorAll('form').forEach((form) => {
	// selects
	form.querySelectorAll('select').forEach((select) => {
		select.addEventListener('change', () => {
			select.dataset.active = true
		})
	})

	// textareas
	form.querySelectorAll('textarea').forEach((textarea) => {
		textarea.style.overflowY = 'hidden'
		textarea.addEventListener('input', () => {
			textarea.parentNode.dataset.replicatedValue = textarea.value
		})
	})

	// phone
	form.querySelectorAll('input[type=tel]').forEach((tel) => {
		tel.addEventListener('input', () => {
			let numbers = tel.value.match(/[0-9]+/g)
			if (numbers) {
				numbers = numbers.join('')
				numbers =
					numbers.charAt(0) === '0' || numbers.charAt(0) === '1'
						? numbers.substring(1)
						: numbers
				let first =
					numbers.length >= 3
						? '(' + numbers.substr(0, 3) + ') '
						: '(' + numbers.substr(0, 3)
				let second = numbers.substr(3, 3)
				let third = numbers.length > 6 ? '-' + numbers.substr(6, 4) : ''
				tel.value = `${first}${second}${third}`.substr(0, 14)
			}
		})
	})
})
