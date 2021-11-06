import MicroModal from 'micromodal'

MicroModal.init({
    disableFocus: true,
    disableScroll: true,
    onClose: function(modal, element, event) {
        event.preventDefault();
        event.stopPropagation();
    }
});