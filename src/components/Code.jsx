import { sbEditable } from '@storyblok/storyblok-editable'
import responsive from './utils/responsive'

export default function Code({ blok }) {
	const styles = {
		...responsive(blok.responsive),
		alignSelf: blok.vertical_alignment,
	}

	function script(src) {
		if (src.length > 0) {
			return `<script src="${src}"></script>`
		} else return ''
	}

	function link(href) {
		if (href.length > 0) {
			return `<link rel="stylesheet" href="${href}"/>`
		} else return ''
	}

	const template = `
		${script(blok.external_js_1)}
		${script(blok.external_js_2)}
		${script(blok.external_js_3)}
		${link(blok.external_css_1)}
		${link(blok.external_css_2)}
		${link(blok.external_css_3)}
		${blok.html}
		<style>${blok.css}</style>
		<script defer type="module">${blok.javascript}</script>
	`

	return (
		<div className="code" style={styles} {...sbEditable(blok)}>
			<div
				className="html"
				dangerouslySetInnerHTML={{ __html: template }}
			></div>
		</div>
	)
}
