/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    url: process.env.url,
    nextApiUrl: process.env.nextApiUrl,
    niceApiUrl: process.env.niceApiUrl,
  }
}

module.exports = nextConfig
