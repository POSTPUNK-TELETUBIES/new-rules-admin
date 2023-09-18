/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    newNextLinkBehavior: true,
  },
  output: 'export',
  assetPrefix: './'
};

module.exports = nextConfig;
