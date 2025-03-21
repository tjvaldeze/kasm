/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Khaos Adventures LLC Technologies',
    description: 'The unofficial store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://tjvaldeze.github.io/kasm',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
