# 🚭 Fumo Zero - Landing Page de Alta Conversão

Landing page completa e otimizada para conversão do produto **Fumo Zero** - Método Definitivo para parar de fumar.

## 🎯 Objetivo

Transformar visitantes em cliques para o checkout, sem exibir preços na página. Foco em conversão através de copywriting emocional, design mobile-first e experiência otimizada.

## 🚀 Como Rodar Localmente (4 Passos)

### Passo 1: Instalar Node.js
Se ainda não tiver o Node.js instalado:
- Acesse: https://nodejs.org/
- Baixe a versão LTS
- Execute o instalador e marque "Add to PATH"
- Reinicie o terminal

### Passo 2: Instalar Dependências
```bash
npm install
```

### Passo 3: Configurar Google Analytics (Opcional)
Edite `index.html` e substitua `G-XXXXXXXXXX` pelo seu ID do GA4:
```html
gtag('config', 'G-SEU-ID-AQUI');
```

### Passo 4: Executar o Projeto
```bash
npm run dev
```

Acesse: http://localhost:5173

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Verifica erros no código

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Hero.jsx        # Seção hero com headline e CTA
│   ├── SocialProof.jsx # Prova social (stats + depoimentos)
│   ├── Benefits.jsx    # Benefícios do produto
│   ├── HowItWorks.jsx  # Como funciona (3 passos)
│   ├── Urgency.jsx     # Bloco de urgência/dor
│   ├── CTA.jsx         # Call-to-action reutilizável
│   ├── FAQ.jsx         # Perguntas frequentes
│   └── Footer.jsx      # Rodapé minimalista
├── utils/
│   └── analytics.js    # Funções de tracking GA4
├── App.jsx             # Componente principal
├── main.jsx            # Entry point
└── index.css           # Estilos globais (Tailwind)
```

## 🎨 Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool rápida
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações e microinterações
- **Google Analytics 4** - Tracking de eventos

## 📊 Eventos GA4 Implementados

A landing page rastreia automaticamente:

1. **cta_click** - Clique em qualquer botão CTA
   - Parâmetros: `location` (hero, benefits, urgency, etc)

2. **scroll_50_percent** - Usuário rolou 50% da página

3. **social_proof_view** - Usuário visualizou seção de prova social

## 🧪 A/B Testing

O projeto inclui sistema básico de A/B testing:

- **3 variações de Headline** (rotacionadas automaticamente)
- **3 variações de CTA** (rotacionadas automaticamente)

As variações são salvas no `localStorage` para manter consistência por sessão.

### Como Implementar A/B Testing Avançado

1. Use ferramentas como Google Optimize, VWO ou Optimizely
2. Ou implemente um sistema próprio com backend
3. Rastreie conversões por variante no GA4

## 🔧 Configuração do Checkout

Edite `src/App.jsx` e atualize a função `handleCTAClick`:

```javascript
const handleCTAClick = () => {
  window.location.href = 'https://seu-checkout.com/fumo-zero';
};
```

## 📱 Responsividade

- ✅ Mobile-first design
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- ✅ Testado em dispositivos móveis, tablets e desktop

## ⚡ Performance

- ✅ Lazy loading de imagens
- ✅ Code splitting automático (Vite)
- ✅ CSS otimizado (Tailwind purge)
- ✅ Animações com GPU acceleration (Framer Motion)

## 🎯 Copywriting

A landing page usa copywriting emocional focado em:
- Benefícios rápidos e diretos
- Remoção de objeções
- Criação de urgência
- Prova social forte
- **Nenhum preço mencionado**

## 📝 Checklist de Performance

Verifique antes de fazer deploy:

- [ ] Substituir IDs do GA4 no `index.html`
- [ ] Atualizar URL do checkout em `App.jsx`
- [ ] Adicionar imagens reais (substituir placeholders)
- [ ] Otimizar imagens (WebP, compressão)
- [ ] Testar em dispositivos reais
- [ ] Verificar Core Web Vitals
- [ ] Testar todos os CTAs
- [ ] Validar formulários (se houver)
- [ ] Testar tracking GA4
- [ ] Verificar SEO (meta tags, headings)

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta dist/
```

### Outros
```bash
npm run build
# A pasta dist/ contém os arquivos estáticos
```

## 📞 Suporte

Para dúvidas ou problemas, consulte:
- Documentação do React: https://react.dev
- Documentação do Tailwind: https://tailwindcss.com
- Documentação do Vite: https://vitejs.dev

## 📄 Licença

Este projeto é privado e proprietário.

---

**Desenvolvido com foco em conversão e performance** 🚀
