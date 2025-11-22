# ✅ Checklist de Performance - Fumo Zero

## 🎯 Antes do Deploy

### Configuração Básica
- [ ] Substituir `G-XXXXXXXXXX` pelo ID real do Google Analytics 4 no `index.html`
- [ ] Atualizar URL do checkout em `src/App.jsx` (função `handleCTAClick`)
- [ ] Verificar todas as URLs e links estão funcionando
- [ ] Testar todos os botões CTA redirecionam corretamente

### Imagens e Assets
- [ ] Substituir placeholders por imagens reais do produto
- [ ] Otimizar todas as imagens (WebP quando possível)
- [ ] Comprimir imagens (TinyPNG, ImageOptim, etc)
- [ ] Adicionar `loading="lazy"` em imagens abaixo da dobra
- [ ] Adicionar `alt` text descritivo em todas as imagens
- [ ] Verificar tamanho total de assets (< 2MB recomendado)

### SEO
- [ ] Title tag otimizado (máx 60 caracteres)
- [ ] Meta description otimizada (máx 160 caracteres)
- [ ] Heading hierarchy correta (H1 → H2 → H3)
- [ ] Apenas um H1 na página
- [ ] URLs amigáveis (se aplicável)
- [ ] Open Graph tags preenchidas
- [ ] Twitter Card tags preenchidas
- [ ] Sitemap.xml (se aplicável)
- [ ] Robots.txt (se aplicável)

### Performance Técnica
- [ ] Build de produção sem erros (`npm run build`)
- [ ] Verificar bundle size (ideal < 200KB gzipped)
- [ ] Testar em modo produção (`npm run preview`)
- [ ] Verificar Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Testar com Lighthouse (score > 90)
- [ ] Verificar tempo de carregamento inicial (< 3s)

### Responsividade
- [ ] Testar em mobile (320px, 375px, 414px)
- [ ] Testar em tablet (768px, 1024px)
- [ ] Testar em desktop (1280px, 1920px)
- [ ] Verificar textos legíveis em todos os tamanhos
- [ ] Botões com área de toque adequada (mín 44x44px)
- [ ] Sem scroll horizontal indesejado

### Funcionalidades
- [ ] Todos os CTAs funcionam
- [ ] Animações suaves (60fps)
- [ ] FAQ expande/colapsa corretamente
- [ ] Scroll tracking funciona
- [ ] Eventos GA4 sendo enviados
- [ ] Sem erros no console do navegador

### Acessibilidade
- [ ] Contraste de cores adequado (WCAG AA)
- [ ] Navegação por teclado funciona
- [ ] Screen readers compatíveis
- [ ] Focus states visíveis
- [ ] Textos alternativos em imagens

### Cross-browser
- [ ] Chrome/Edge (últimas 2 versões)
- [ ] Firefox (última versão)
- [ ] Safari (última versão)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Tracking e Analytics
- [ ] GA4 configurado corretamente
- [ ] Eventos de CTA sendo rastreados
- [ ] Scroll 50% sendo rastreado
- [ ] Visualização de prova social sendo rastreada
- [ ] Conversões configuradas no GA4

### Segurança
- [ ] HTTPS configurado
- [ ] Sem dados sensíveis no código
- [ ] Headers de segurança (se aplicável)
- [ ] Validação de inputs (se houver formulários)

### Testes de Conversão
- [ ] Testar fluxo completo: landing → checkout
- [ ] Verificar que não há preços na landing
- [ ] Copywriting revisado e aprovado
- [ ] CTAs claros e chamativos
- [ ] Prova social visível e convincente

## 🚀 Após Deploy

### Monitoramento
- [ ] Configurar alertas de uptime
- [ ] Monitorar taxa de conversão
- [ ] Acompanhar Core Web Vitals
- [ ] Verificar logs de erro
- [ ] Analisar comportamento no GA4

### Otimização Contínua
- [ ] A/B test de headlines
- [ ] A/B test de CTAs
- [ ] A/B test de cores
- [ ] Teste de diferentes layouts
- [ ] Análise de heatmaps (Hotjar, etc)
- [ ] Feedback de usuários

## 📊 Ferramentas Recomendadas

- **Lighthouse** - Performance e SEO
- **PageSpeed Insights** - Core Web Vitals
- **GTmetrix** - Análise de performance
- **WebPageTest** - Teste detalhado
- **Google Search Console** - SEO
- **Google Analytics 4** - Comportamento
- **Hotjar** - Heatmaps e gravações

## 🎯 Metas de Performance

- **Lighthouse Score**: > 90 em todas as categorias
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Speed Index**: < 3.4s
- **Total Blocking Time**: < 200ms
- **Bundle Size**: < 200KB (gzipped)

---

**Última atualização**: Verifique este checklist antes de cada deploy! 🚀


