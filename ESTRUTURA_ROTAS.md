# 🗺️ Estrutura de Rotas - Fumo Zero

## 📋 Resumo

A aplicação foi separada em **3 páginas distintas** usando React Router:

1. **Quiz** (`/`) - Página inicial com quiz interativo
2. **Landing Page** (`/landing`) - Página de apresentação do produto
3. **Página de Planos** (`/planos`) - Página de vendas com os 4 planos

---

## 🚀 Fluxo de Navegação

### Fluxo Completo:
```
1. Usuário acessa: /
   ↓
2. Quiz é exibido
   ↓
3. Usuário completa quiz → Redireciona para: /landing
   ↓
4. Landing page é exibida
   ↓
5. Usuário clica em qualquer CTA → Redireciona para: /planos
   ↓
6. Página de planos é exibida
   ↓
7. Usuário escolhe um plano → Redireciona para checkout externo
```

---

## 📁 Estrutura de Arquivos

```
src/
├── pages/
│   ├── QuizPage.jsx          # Página do quiz (rota: /)
│   ├── LandingPage.jsx       # Landing page (rota: /landing)
│   └── PricingPage.jsx       # Página de planos (rota: /planos)
├── components/
│   ├── Quiz.jsx              # Componente do quiz
│   ├── Hero.jsx              # Hero da landing
│   ├── SocialValidation.jsx  # Validação social
│   ├── Benefits.jsx           # Benefícios
│   ├── HowItWorks.jsx        # Como funciona
│   ├── Urgency.jsx           # Urgência
│   ├── CTA.jsx               # Call-to-action
│   ├── Pricing.jsx           # Componente de planos
│   ├── FAQ.jsx               # FAQ
│   └── Footer.jsx            # Rodapé
├── App.jsx                   # Configuração de rotas
└── main.jsx                  # Entry point com BrowserRouter
```

---

## 🔧 Configuração de Rotas

### App.jsx
```jsx
<Routes>
  <Route path="/" element={<QuizPage />} />
  <Route path="/landing" element={<LandingPage />} />
  <Route path="/planos" element={<PricingPage />} />
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
```

### main.jsx
```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## 🎯 Comportamento dos CTAs

### CTAs da Landing Page
- **Hero CTA** → Navega para `/planos`
- **Benefits CTA** → Navega para `/planos`
- **Urgency CTA** → Navega para `/planos`
- **CTA Components** → Navegam para `/planos`

### CTAs da Página de Planos
- **Botões dos planos** → Redirecionam para checkout externo
- URL: `https://seu-checkout.com/fumo-zero?plano={id}`

---

## 📦 Dependências

### React Router DOM
```bash
npm install react-router-dom
```

**Versão instalada**: Última versão estável

---

## ✅ Vantagens da Separação

1. **SEO Melhorado**
   - URLs específicas para cada página
   - Melhor indexação pelos buscadores

2. **Performance**
   - Carregamento sob demanda
   - Código mais limpo e organizado

3. **Manutenção**
   - Páginas independentes
   - Fácil de atualizar cada seção

4. **Analytics**
   - Tracking por página
   - Métricas mais precisas

5. **UX**
   - Navegação clara
   - URLs amigáveis

---

## 🔄 Migração Realizada

### Antes:
- Tudo em uma única página (`App.jsx`)
- Quiz e Landing na mesma rota
- Planos integrados na landing

### Depois:
- 3 páginas separadas
- Rotas distintas (`/`, `/landing`, `/planos`)
- Navegação via React Router

---

## 🧪 Testando as Rotas

### Localmente:
```bash
npm run dev
```

### URLs para testar:
- `http://localhost:5173/` - Quiz
- `http://localhost:5173/landing` - Landing Page
- `http://localhost:5173/planos` - Página de Planos

### Comportamento:
- Acessar `/` → Mostra quiz
- Completar quiz → Redireciona para `/landing`
- Clicar em CTA na landing → Redireciona para `/planos`
- Escolher plano → Redireciona para checkout externo

---

## 📝 Notas Importantes

1. **Quiz sempre primeiro**: A rota `/` sempre mostra o quiz
2. **Landing após quiz**: O quiz redireciona para `/landing`
3. **Planos separados**: A página de planos está em `/planos`
4. **CTAs atualizados**: Todos os CTAs da landing navegam para `/planos`
5. **Checkout externo**: Os CTAs dos planos redirecionam para checkout

---

## 🚀 Próximos Passos (Opcional)

1. **Adicionar Header/Navbar** (se necessário)
2. **Implementar 404 Page** personalizada
3. **Adicionar Loading States** entre transições
4. **Otimizar com Lazy Loading** para componentes grandes
5. **Adicionar Meta Tags** por página para SEO

---

**Estrutura de rotas implementada com sucesso!** 🎉

