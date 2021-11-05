export default function link(link) {
	if (link.linktype) {
		switch (link.linktype) {
			case 'story':
				if (link.cached_url) {
					return `/${link.cached_url === 'home' ? '' : link.cached_url}`
				} else return undefined
			case 'email':
				return 'mailto:' + link.email
			default:
				return link.url
		}
	}
}
