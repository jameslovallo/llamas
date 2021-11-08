import MicroModal from 'micromodal'

MicroModal.init({
	disableFocus: true,
	disableScroll: false,
	onShow: function (modal, element, event) {
		tuaLock(element) //declared in tua.js
	},
	onClose: function (modal, element, event) {
		event.preventDefault()
		event.stopPropagation()
		tuaUnlock(element) //declared in tua.js
	},
})
