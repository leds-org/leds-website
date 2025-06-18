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
  output: 'export', // Isso habilita a exportação estática
  // Opcional: Se o seu site GitHub Pages tiver um subdiretório (ex: username.github.io/seu-repo)
  // você precisará do basePath e assetPrefix.
  // Substitua 'seu-repo' pelo nome do seu repositório no GitHub.
  // basePath: '/seu-repo',
  // assetPrefix: '/seu-repo/',
};

export default nextConfig;
