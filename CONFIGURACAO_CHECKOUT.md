# 🔗 Configuração do Checkout - Fumo Zero

## 📍 Onde Configurar

Edite o arquivo `src/App.jsx` e localize a função `handleCTAClick`:

```javascript
const handleCTAClick = () => {
  // Aqui você coloca a URL do checkout
  window.location.href = 'https://seu-checkout.com/fumo-zero';
  // Ou use: window.open('https://seu-checkout.com/fumo-zero', '_blank');
};
```

## 🎯 Opções de Implementação

### Opção 1: Redirecionamento Direto (Recomendado)
```javascript
const handleCTAClick = () => {
  trackCTAClick('hero'); // Tracking
  window.location.href = 'https://seu-checkout.com/fumo-zero';
};
```

### Opção 2: Nova Aba
```javascript
const handleCTAClick = () => {
  trackCTAClick('hero');
  window.open('https://seu-checkout.com/fumo-zero', '_blank');
};
```

### Opção 3: Com Parâmetros UTM
```javascript
const handleCTAClick = (location) => {
  trackCTAClick(location);
  const utmParams = new URLSearchParams({
    utm_source: 'landing-page',
    utm_medium: 'cta',
    utm_campaign: 'fumo-zero',
    utm_content: location, // 'hero', 'benefits', etc
  });
  window.location.href = `https://seu-checkout.com/fumo-zero?${utmParams}`;
};
```

### Opção 4: Com Pixel de Conversão
```javascript
const handleCTAClick = () => {
  trackCTAClick('hero');
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }
  
  // Google Ads
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXX/XXXXX',
      'value': 0,
      'currency': 'BRL'
    });
  }
  
  window.location.href = 'https://seu-checkout.com/fumo-zero';
};
```

## 🔄 Atualizar em Todos os Componentes

Os CTAs estão nos seguintes componentes:
1. `src/components/Hero.jsx` - CTA principal do hero
2. `src/components/Benefits.jsx` - CTA após benefícios
3. `src/components/Urgency.jsx` - CTA na seção de urgência
4. `src/components/CTA.jsx` - Componente reutilizável de CTA
5. `src/App.jsx` - Função central `handleCTAClick`

**Todos já estão configurados para usar a função `handleCTAClick` do App.jsx**, então você só precisa atualizar em um lugar!

## 📊 Tracking de Conversão

### Google Analytics 4
Os eventos já estão configurados. Certifique-se de:
1. Substituir `G-XXXXXXXXXX` pelo seu ID no `index.html`
2. Configurar eventos de conversão no GA4:
   - `cta_click` → Marcar como conversão
   - Configurar goal no GA4

### Facebook Pixel (Opcional)
Adicione no `index.html` antes do `</head>`:
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Google Ads (Opcional)
Adicione o código de conversão no `index.html` ou configure via Google Tag Manager.

## 🧪 Testar Antes de Publicar

1. **Teste Local:**
   ```bash
   npm run dev
   ```
   Clique em todos os CTAs e verifique se redirecionam corretamente

2. **Teste de Build:**
   ```bash
   npm run build
   npm run preview
   ```
   Teste novamente todos os CTAs

3. **Verificar Tracking:**
   - Abra o DevTools (F12)
   - Vá em Network → Filtre por "gtag" ou "analytics"
   - Clique nos CTAs e verifique se os eventos são enviados

## 🔒 Segurança

- ✅ Nunca exponha preços na landing page (conforme especificado)
- ✅ Use HTTPS no checkout
- ✅ Valide dados no backend (nunca confie apenas no frontend)
- ✅ Use tokens de segurança para evitar fraudes

## 📝 Checklist

Antes de fazer deploy:
- [ ] URL do checkout atualizada em `App.jsx`
- [ ] Testado todos os CTAs
- [ ] Tracking GA4 configurado
- [ ] Pixel Facebook configurado (se usar)
- [ ] Google Ads configurado (se usar)
- [ ] UTM parameters configurados (se usar)
- [ ] Testado em mobile e desktop
- [ ] Verificado que não há preços na landing

---

**Pronto!** Seu checkout está configurado! 🎉


