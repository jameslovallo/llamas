import MicroModal from 'micromodal'

MicroModal.init({
	disableFocus: true,
	disableScroll: false,
	onShow: function (modal, element, event) {
		tuaLock(modal) //declared in drawer.js
	},
	onClose: function (modal, element, event) {
		event.preventDefault()
		event.stopPropagation()
		tuaUnlock(modal) //declared in drawer.js
	},
})
