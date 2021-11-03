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
})
