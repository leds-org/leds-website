# LEDS Website - Versão Estática

Website oficial do LEDS - Laboratório de Extensão em Desenvolvimento de Soluções do IFES Campus Serra.

## 🚀 Como usar

Este site é completamente estático e funciona apenas abrindo o arquivo `index.html` no navegador. **Não precisa de build, servidor ou instalação de dependências.**

### Instruções:

1. Baixe todos os arquivos
2. Abra o arquivo `index.html` no seu navegador
3. Pronto! O site está funcionando

## 📁 Estrutura do Projeto

\`\`\`
/
├── index.html              # Página inicial
├── institucional.html      # Página institucional  
├── projetos.html          # Página de projetos
├── servicos.html          # Página de serviços
├── equipes.html           # Página de equipes
├── depoimentos.html       # Página de depoimentos
├── contato.html           # Página de contato
├── styles.css             # Estilos principais
├── script.js              # JavaScript principal
└── README.md              # Este arquivo
\`\`\`

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS e Flexbox/Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **SVG Icons**: Ícones vetoriais inline
- **Google Fonts**: Tipografia (Inter)

## ✨ Funcionalidades

- ✅ Design responsivo para todos os dispositivos
- ✅ Navegação mobile com menu hambúrguer
- ✅ Slider de depoimentos com navegação manual
- ✅ Modal de vídeo em tela cheia
- ✅ Animações suaves e efeitos visuais
- ✅ Funciona sem servidor, apenas abrindo os arquivos
- ✅ SEO otimizado

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1200px+)

## 🎨 Personalização

### Cores
As cores principais estão definidas em `:root` no arquivo `styles.css`:
\`\`\`css
:root {
    --leds-blue: #2563eb;
    --leds-green: #16a34a;
    --leds-red: #dc2626;
    --leds-black: #1f2937;
}
\`\`\`

### Dados
Todos os dados do site estão centralizados no arquivo `script.js`:
- Depoimentos
- Membros da equipe
- Projetos
- Serviços
- Equipes
- Informações institucionais

### Imagens
As imagens estão hospedadas externamente e referenciadas diretamente no HTML. Para usar suas próprias imagens:
1. Substitua as URLs das imagens pelos caminhos locais
2. Coloque as imagens em uma pasta `images/`
3. Atualize os caminhos no HTML

## 🔧 Manutenção

Para atualizar o conteúdo do site:

1. **Adicionar novo depoimento**: Edite o array `testimonials` em `script.js`
2. **Atualizar projetos**: Modifique os dados diretamente no HTML ou crie um array em `script.js`
3. **Alterar informações da equipe**: Edite os dados da equipe no HTML
4. **Modificar serviços**: Atualize o conteúdo diretamente no HTML

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato:
- 📧 Email: leds.ifes@gmail.com
- 🌐 Site: [IFES Campus Serra](https://serra.ifes.edu.br/)

## 📄 Licença

© 2024 LEDS - Laboratório de Extensão em Desenvolvimento de Soluções. Todos os direitos reservados.
