import Component from "./Component"

export default function AppDrawer(props) {
	const settings = props.blok.content
	return (
		<>
			<div className="app-drawer__scrim" style={{display: "none"}}></div>
			<aside className="app-drawer" style={{display: "none"}}>
				{settings.drawer.map((blok) => (
					<Component blok={blok} />
				))}
			</aside>
		</>
	)
}
