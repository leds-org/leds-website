
# 🌐 LEDS Website

Website oficial do **LEDS - Laboratório de Extensão em Desenvolvimento de Soluções** do IFES Campus Serra.

---

## 🚀 GitHub Pages

Este site está configurado para funcionar perfeitamente no GitHub Pages. Para fazer o deploy:

1. Faça o upload de todos os arquivos para o seu repositório GitHub
2. Vá em **Settings > Pages**
3. Selecione **"Deploy from a branch"**
4. Escolha a branch **"website"** e a pasta **"/ (root)"**
5. Clique em **Save**

O site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repositorio]` ou pelo domínio customizado configurado.

> ⚠️ **Importante:** após qualquer mudança feita diretamente pelo GitHub, é necessário rodar o _GitHub Action_ que atualiza a build estática com base no `next.config.mjs`.

---

## 📁 Estrutura do Projeto

```
/
├── index.html              # Página inicial
├── institucional.html      # Página institucional
├── projetos.html           # Página de projetos
├── servicos.html           # Página de serviços
├── equipes.html            # Página de equipes
├── depoimentos.html        # Página de depoimentos
├── contato.html            # Página de contato
├── css/
│   └── styles.css          # Estilos principais
├── js/
│   ├── data.js             # Dados do site
│   ├── main.js             # Funcionalidades principais
│   └── institucional.js    # Scripts específicos
├── images/                 # Imagens do site
└── README.md               # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis e layout responsivo
- **JavaScript ES6+**: Funcionalidades interativas
- **Lucide Icons**: Ícones SVG
- **Google Fonts (Inter)**: Tipografia moderna

---

## ✨ Funcionalidades

- ✅ Design responsivo para todos os dispositivos
- ✅ Menu hambúrguer funcional em telas pequenas
- ✅ Slider de depoimentos com navegação manual
- ✅ Modal de vídeo em tela cheia
- ✅ Separação clara entre estrutura, estilo e dados
- ✅ SEO otimizado para buscadores

---

## 📱 Responsividade

Totalmente adaptado para:

- 📱 Celulares (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktops e Telas Grandes (1024px+)

---

## 🎨 Personalização

### 🎨 Cores

Definidas em `:root` no arquivo `css/styles.css`:

```css
:root {
    --leds-blue: #2563eb;
    --leds-green: #16a34a;
    --leds-red: #dc2626;
    --leds-black: #1f2937;
}
```

### 📦 Dados

Centralizados em `js/data.js`:

- Depoimentos
- Projetos
- Equipes
- Serviços
- Equipe técnica
- Informações institucionais


## 🔧 Manutenção

Para atualizar o conteúdo:

- ✏️ Editar `js/data.js` para alterar membros, projetos, depoimentos etc.
- 🖼️ Adicionar/remover arquivos em `images/`
- 🎨 Ajustar estilos em `css/styles.css`

---

## ⚠️ Atenção sobre Deploy no GitHub Pages

Se você fizer alterações diretamente pelo navegador do GitHub (como editar o arquivo `next.config.mjs` ou páginas HTML/CSS/JS), **é necessário executar manualmente duas GitHub Actions para que o deploy funcione corretamente**:

1. **Rodar a Action `Next.js Static Export`**  
   Essa ação reconstrói o projeto aplicando as configurações corretas (como `output: 'export'`, `basePath`, `assetPrefix`, entre outros).

2. **Rodar a Action `Pages: build and deployment`**  
   Essa etapa publica os arquivos estáticos gerados na branch configurada do GitHub Pages.

> ✅ **Ordem correta para rodar:**  
> **1️⃣ `Next.js Static Export` → 2️⃣ `Pages: build and deployment`**

Caso contrário, seu site poderá continuar exibindo uma versão antiga ou apresentar erros de carregamento de imagens, estilos ou caminhos.

---

## 📞 Suporte

Para dúvidas, sugestões ou suporte:

- 📧 Email: [leds.ifes@gmail.com](mailto:leds.ifes@gmail.com)
- 🌐 Site: [IFES Campus Serra](https://serra.ifes.edu.br/)

---

## 📄 Licença

© 2025 LEDS – Laboratório de Extensão em Desenvolvimento de Soluções. Todos os direitos reservados.
