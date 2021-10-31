import { lock, unlock } from 'tua-body-scroll-lock'

let drawerButton = document.querySelector('.app-bar > .button:first-child')
let drawer = document.querySelector('.app-drawer')
let drawerScrim = document.querySelector('.app-drawer__scrim')

drawerButton.addEventListener('click', () => {
	drawer.style.display = 'block'
	drawerScrim.style.display = 'block'
	setTimeout(() => {
		drawer.classList.add('app-drawer--open')
		drawerScrim.classList.add('app-drawer__scrim--open')
	})
	lock()
})

drawerScrim.addEventListener('click', () => {
	drawer.classList.remove('app-drawer--open')
	drawerScrim.classList.remove('app-drawer__scrim--open')
	setTimeout(() => {
		drawer.style.display = 'none'
		drawerScrim.style.display = 'none'
	}, 500)
	unlock()
})
