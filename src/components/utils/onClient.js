export default function onClient(bodyString) {
	let scripts = [
		{
			c: 'Tua BSL',
			src: 'https://unpkg.com/tua-body-scroll-lock@1.2.1/dist/tua-bsl.umd.js',
			use: true,
		},
		{
			c: 'Drawer',
			src: '/js/drawer.js',
			use: true,
		},
		{
			c: 'Dialog',
			src: '/js/dialog.js',
			use: false,
		},
		{
			c: 'Dropdown',
			src: '/js/dropdown.js',
			use: false,
		},
		{
			c: 'Form',
			src: '/js/form.js',
			use: false,
		},
		{
			c: 'Tabs',
			src: '/js/tabs.js',
			use: false,
		},
		{
			c: 'Video',
			src: '/js/video.js',
			use: false,
		},
	]

	if (bodyString) {
		scripts.forEach((s) => {
			if (bodyString.includes(`"component":"${s.c}"`)) s.use = true
		})
		scripts = scripts.filter((s) => {
			return s.use === true
		})
	}

	return scripts
}
