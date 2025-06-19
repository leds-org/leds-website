/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // evita erros com otimizador de imagens no export
  },
  basePath: '/leds-website', // ajuste conforme o nome do repositório se estiver publicando sem domínio
  assetPrefix: '/leds-website', // prefixa os assets corretamente

  // Se você estiver usando domínio customizado (CNAME), pode deixar assim:
  // basePath: '',
  // assetPrefix: '',
  // mas certifique-se de que `next export` esteja gerando corretamente a estrutura final.
}

export default nextConfig
