import { sbEditable } from '@storyblok/storyblok-editable'
import { useEffect } from 'react'
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

	// for Next.js preview
	useEffect(() => {
		const jsResources = document.querySelectorAll(
			`[data-blok-uid*='${blok._uid}'] script[src]`
		)

		function runCustomJS() {
			const customJS = document.querySelector(
				`[data-blok-uid*='${blok._uid}'] script[type='module']`
			)
			console.log(customJS)
			const customJSClone = document.createElement('script')
			customJSClone.type = 'module'
			customJSClone.innerHTML = customJS.innerHTML
			document.body.appendChild(customJSClone)
		}

		if (jsResources.length > 0) {
			let jsResourcesLoaded = 0
			jsResources.forEach((script) => {
				let clone = document.createElement('script')
				clone.src = script.src
				document.body.appendChild(clone)
				clone.addEventListener('load', () => {
					jsResourcesLoaded++
					if (jsResources.length === jsResourcesLoaded) runCustomJS()
				})
			})
		} else runCustomJS()
	}, [])

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
