/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/websitev1',
  assetPrefix: '/websitev1',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
