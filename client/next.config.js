/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		minimumCacheTTL: 31536000,
		domains: ['media.architecturaldigest.com', 'www.ikea.com']
	},
	env: {
		API_URL: process.env.API_URL
	}
}

module.exports = nextConfig
