export default function link(link) {
	if (link.linktype) {
		switch (link.linktype) {
			case 'story':
				let href = link.cached_url === 'home' ? '' : link.cached_url
				return '/' + href
			case 'email':
				return 'mailto:' + link.email
			default:
				return link.url
		}
	}
}
