import MicroModal from 'micromodal'

MicroModal.init({
    disableFocus: true,
    onClose: function(modal, element, event) {
        event.preventDefault();
        event.stopPropagation();
    }
});