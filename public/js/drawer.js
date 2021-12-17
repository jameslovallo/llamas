const drawerButton = document.querySelector('.app-bar > .button:first-child')
const drawer = document.querySelector('.app-drawer')
const drawerScrim = document.querySelector('.app-drawer__scrim')

drawerButton.addEventListener('click', () => {
	drawer.style.display = 'block'
	drawerScrim.style.display = 'block'
	setTimeout(() => {
		drawer.classList.add('app-drawer--open')
		drawerScrim.classList.add('app-drawer__scrim--open')
	})
	bodyScrollLock.lock()
})

drawerScrim.addEventListener('click', () => {
	drawer.classList.remove('app-drawer--open')
	drawerScrim.classList.remove('app-drawer__scrim--open')
	setTimeout(() => {
		drawer.style.display = 'none'
		drawerScrim.style.display = 'none'
	}, 500)
	bodyScrollLock.unlock()
})

drawer
	.querySelectorAll(`.list a[href="${window.location.pathname}"]`)
	.forEach((activeLink) => {
		activeLink.classList.add('list__item--active')
	})
