/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Isso hab 
  images: { unoptimized: true },
  basePath: '/leds-website',
  assetPrefix: '/leds-website/'
};


export default nextConfig;
