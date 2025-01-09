/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.near.social', 'another-domain.com', 'i.near.social', 'robohash.org'],
  },
};

module.exports = nextConfig;
