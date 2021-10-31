export default function Theme({ global }) {
	const style = `
		:root {
			--background: ${global.background};
			--on-background: ${global.on_background};
			--primary: ${global.primary};
			--on-primary: ${global.on_primary};
			--secondary: ${global.secondary};
			--on-secondary: ${global.on_secondary};
			--surface: ${global.surface};
			--on-surface: ${global.on_surface};
			--surface-border: ${global.surface_border};
		}

		${global.custom_css}
	`
	return <style dangerouslySetInnerHTML={{ __html: style }} />
}
