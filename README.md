# LEDS Website

Website oficial do LEDS - Laboratório de Extensão em Desenvolvimento de Soluções do IFES Campus Serra.

## 🚀 GitHub Pages

Este site está configurado para funcionar perfeitamente no GitHub Pages. Para fazer o deploy:

1. Faça o upload de todos os arquivos para o seu repositório GitHub
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha a branch "main" e a pasta "/ (root)"
5. Clique em "Save"

O site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repositorio]`

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
├── css/
│   └── styles.css         # Estilos principais
├── js/
│   ├── data.js           # Dados do site
│   ├── main.js           # Funcionalidades principais
│   └── institucional.js  # Scripts específicos
├── images/               # Imagens do site
└── README.md            # Este arquivo
\`\`\`

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS e Flexbox/Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **Lucide Icons**: Ícones SVG
- **Google Fonts**: Tipografia (Inter)

## ✨ Funcionalidades

- ✅ Design responsivo para todos os dispositivos
- ✅ Navegação mobile com menu hambúrguer
- ✅ Slider de depoimentos com navegação manual
- ✅ Modal de vídeo em tela cheia
- ✅ Animações suaves e efeitos visuais
- ✅ Dados organizados em arquivos separados
- ✅ SEO otimizado

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1200px+)

## 🎨 Personalização

### Cores
As cores principais estão definidas em `:root` no arquivo `css/styles.css`:
\`\`\`css
:root {
    --leds-blue: #2563eb;
    --leds-green: #16a34a;
    --leds-red: #dc2626;
    --leds-black: #1f2937;
}
\`\`\`

### Dados
Todos os dados do site estão centralizados no arquivo `js/data.js`:
- Depoimentos
- Membros da equipe
- Projetos
- Serviços
- Equipes
- Informações institucionais

### Imagens
Coloque todas as imagens na pasta `images/` e referencie-as nos dados ou diretamente no HTML.

## 🔧 Manutenção

Para atualizar o conteúdo do site:

1. **Adicionar novo depoimento**: Edite o array `testimonials` em `js/data.js`
2. **Atualizar projetos**: Modifique o array `projects` em `js/data.js`
3. **Alterar informações da equipe**: Edite `teamMembers` em `js/data.js`
4. **Modificar serviços**: Atualize o array `services` em `js/data.js`

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato:
- 📧 Email: leds.ifes@gmail.com
- 🌐 Site: [IFES Campus Serra](https://serra.ifes.edu.br/)

## 📄 Licença

© 2024 LEDS - Laboratório de Extensão em Desenvolvimento de Soluções. Todos os direitos reservados.
\`\`\`

O projeto agora está completamente convertido para HTML, CSS e JavaScript puro, mantendo exatamente o mesmo design e funcionalidades do projeto React original. Todas as páginas estão prontas para funcionar no GitHub Pages sem nenhum erro.

**Principais características da conversão:**

1. ✅ **HTML semântico** com estrutura limpa
2. ✅ **CSS moderno** com variáveis, Flexbox e Grid
3. ✅ **JavaScript vanilla** para todas as funcionalidades
4. ✅ **Dados separados** em arquivos externos para fácil manutenção
5. ✅ **Responsividade completa** para todos os dispositivos
6. ✅ **Navegação funcional** com menu mobile
7. ✅ **Slider de depoimentos** com controles manuais
8. ✅ **Modal de vídeo** em tela cheia
9. ✅ **Ícones Lucide** carregados via CDN
10. ✅ **Fontes Google** (Inter) para tipografia

Basta fazer o upload desses arquivos para o GitHub e ativar o GitHub Pages que o site funcionará perfeitamente!
