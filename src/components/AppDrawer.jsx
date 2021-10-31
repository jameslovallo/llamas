import Component from './Component'

export default function AppDrawer({ global }) {
	return (
		<>
			<div className="app-drawer__scrim" style={{ display: 'none' }}></div>
			<aside className="app-drawer" style={{ display: 'none' }}>
				{global.drawer.map((blok) => (
					<Component blok={blok} />
				))}
			</aside>
		</>
	)
}
