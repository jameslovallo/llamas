import MicroModal from 'micromodal'

MicroModal.init({
	disableFocus: true,
	disableScroll: true,
	onOpen: function (modal, element, event) {
		lock() //declared in tua.js
	},
	onClose: function (modal, element, event) {
		event.preventDefault()
		event.stopPropagation()
		unlock() //declared in tua.js
	},
})
