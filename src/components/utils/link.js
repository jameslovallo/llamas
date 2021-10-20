export default function link(link) {
	if (link.linktype) {
		switch(link.linktype) {
			case "story":
				return "/" + link.cached_url
			case "email":
				return "mailto:" + link.email
			default:
				return link.url
		}
	}
}