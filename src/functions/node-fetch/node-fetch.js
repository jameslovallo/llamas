const fetch = require('node-fetch')

exports.handler = async (event) => {
	return fetch(decodeURIComponent(event.queryStringParameters.url), {
		headers: { Accept: 'application/json' },
	})
		.then((response) => response.json())
		.then((data) => ({
			statusCode: 200,
			body: JSON.stringify(data),
		}))
		.catch((error) => ({ statusCode: 422, body: String(error) }))
}
