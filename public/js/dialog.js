import micromodal from "https://cdn.skypack.dev/micromodal@0.4.10";

micromodal.init({
	disableFocus: true,
	disableScroll: false,
	onShow: function (modal, element, event) {
		tuaLock(modal.querySelector('.modal__dialog__content')) //declared in drawer.js
	},
	onClose: function (modal, element, event) {
		event.preventDefault()
		event.stopPropagation()
		tuaUnlock(modal.querySelector('.modal__dialog__content')) //declared in drawer.js
	},
})
