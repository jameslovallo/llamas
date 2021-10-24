import Component from './Component'

export default function AppBar(props) {
	const { global } = props

	const appBarColors = {
		'--app-bar': `var(--${global.app_bar_color})`,
		'--on-app-bar': `var(--on-${global.app_bar_color})`,
	}

	return (
		<header className="app-bar" style={appBarColors}>
			<Component
				blok={{
					component: 'Button',
					icon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>',
					label: 'Open the menu',
					rounded: true,
					trailing_icon: false,
					style: 'icon',
				}}
			/>
			<a className="app-bar__title" href="/">
				{global.app_bar_title}
			</a>
			<div className="app-bar__spacer" />
			<div className="app-bar__desktop">
				{global.app_bar_desktop.map((blok) => (
					<Component blok={blok} />
				))}
			</div>
			<div className="app-bar__mobile">
				{global.app_bar.map((blok) => (
					<Component blok={blok} />
				))}
			</div>
		</header>
	)
}
