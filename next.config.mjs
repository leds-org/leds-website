/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera build estática
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
