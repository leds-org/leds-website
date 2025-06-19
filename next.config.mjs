/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/leds-website',
  assetPrefix: '/leds-website',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
