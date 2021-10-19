import Button from './Button'

export default function AppBar(props) {
	const settings = props.blok.content
	return (
		<header className="app-bar">
			<Button
				blok={{
					icon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>',
					label: 'Open the menu',
					rounded: true,
					trailing_icon: false,
					style: 'icon',
				}}
			/>
			<span className="app-bar__title">{settings.app_bar_title}</span>
			<div className="app-bar__spacer" />
			{settings.app_bar_desktop.map((action) => (
				<Button blok={action} />
			))}
		</header>
	)
}
