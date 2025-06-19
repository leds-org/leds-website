/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Obrigatório para exportação estática
  },
  output: 'export', // Essencial para gerar HTML estático
  basePath: '/leds-website', // Subpasta em que o site será servido
  assetPrefix: '/leds-website/', // Caminho para assets (CSS, JS, imagens)
};

export default nextConfig;
