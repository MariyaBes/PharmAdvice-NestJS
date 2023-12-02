/** @types {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL,
		MAP_YANDEX: process.env.MAP_YANDEX
	}
}

module.exports = nextConfig
