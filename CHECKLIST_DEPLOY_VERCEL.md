# ✅ Checklist de Deploy - Vercel

## 🔍 Verificações Realizadas

### ✅ Build Testado
- [x] `npm run build` executado com sucesso
- [x] Sem erros de compilação
- [x] Sem warnings críticos
- [x] Arquivos gerados em `/dist`

### ✅ Correções Aplicadas

#### 1. **CSS @import**
- **Problema**: `@import` estava depois de `@tailwind`, causando erro
- **Correção**: Movido `@import` para o topo do arquivo `src/index.css`
- **Status**: ✅ Corrigido

#### 2. **postcss.config.js**
- **Problema**: Usava ES modules sem `"type": "module"` no package.json
- **Correção**: Convertido para CommonJS (`module.exports`)
- **Status**: ✅ Corrigido

#### 3. **Vercel Configuration**
- **Problema**: Faltava configuração para SPA routing
- **Correção**: Criado `vercel.json` com rewrites para React Router
- **Status**: ✅ Criado

### ✅ Estrutura de Arquivos

```
✅ src/
   ✅ pages/
      ✅ QuizPage.jsx
      ✅ LandingPage.jsx
      ✅ PricingPage.jsx
   ✅ components/
      ✅ Todos os componentes presentes
   ✅ App.jsx
   ✅ main.jsx
   ✅ index.css

✅ package.json
✅ vite.config.js
✅ tailwind.config.js
✅ postcss.config.js
✅ vercel.json (NOVO)
✅ index.html
```

### ✅ Dependências

Todas as dependências estão corretas:
- ✅ react: ^18.2.0
- ✅ react-dom: ^18.2.0
- ✅ react-router-dom: ^7.9.6
- ✅ framer-motion: ^10.16.16
- ✅ lucide-react: ^0.344.0
- ✅ vite: ^6.0.0
- ✅ tailwindcss: ^3.4.0

### ✅ Linter

- [x] Sem erros de lint
- [x] Sem warnings críticos
- [x] Código formatado corretamente

---

## 🚀 Passos para Deploy no Vercel

### Opção 1: Via CLI (Recomendado)

```bash
# 1. Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel

# 4. Para produção
vercel --prod
```

### Opção 2: Via Dashboard Vercel

1. **Acesse**: https://vercel.com
2. **Faça login** com GitHub/GitLab/Bitbucket
3. **Clique em "Add New Project"**
4. **Importe o repositório** do Fumo Zero
5. **Configurações automáticas**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Clique em "Deploy"**

### Opção 3: Via Git (Recomendado para produção)

1. **Conecte o repositório** ao Vercel
2. **Push para main/master** → Deploy automático
3. **Push para outras branches** → Preview deployments

---

## 📋 Configurações do Vercel

### vercel.json (Já criado)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Importante**: O `rewrites` garante que todas as rotas do React Router funcionem corretamente.

---

## 🔧 Variáveis de Ambiente (Se necessário)

Se você precisar de variáveis de ambiente:

1. **No Dashboard Vercel**:
   - Settings → Environment Variables
   - Adicione as variáveis necessárias

2. **Exemplos** (se usar):
   - `VITE_GA_ID` - Google Analytics ID
   - `VITE_API_URL` - URL da API (se houver)

---

## ✅ Testes Pós-Deploy

Após o deploy, verifique:

- [ ] **Rota raiz** (`/`) → Mostra o Quiz
- [ ] **Rota `/landing`** → Mostra a Landing Page
- [ ] **Rota `/planos`** → Mostra a página de Planos
- [ ] **Rota inválida** → Redireciona para `/`
- [ ] **CTAs funcionam** → Navegam corretamente
- [ ] **Responsividade** → Teste em mobile/tablet/desktop
- [ ] **Animações** → Framer Motion funcionando
- [ ] **Fontes** → Google Fonts carregando
- [ ] **Imagens** → Se houver, estão carregando

---

## 🐛 Troubleshooting

### Problema: 404 em rotas do React Router

**Solução**: O `vercel.json` já está configurado com `rewrites`. Se ainda assim não funcionar, verifique se o arquivo está na raiz do projeto.

### Problema: Build falha

**Solução**: 
1. Verifique se todas as dependências estão no `package.json`
2. Execute `npm install` localmente
3. Execute `npm run build` localmente para testar

### Problema: Estilos não aparecem

**Solução**: 
1. Verifique se `tailwind.config.js` está correto
2. Verifique se `postcss.config.js` está correto
3. Verifique se `src/index.css` está sendo importado em `main.jsx`

### Problema: Fontes não carregam

**Solução**: 
1. Verifique se o `@import` está no topo de `src/index.css`
2. Verifique se a conexão com Google Fonts está funcionando

---

## 📊 Performance Esperada

Após o deploy, você deve ver:

- **Lighthouse Score**: > 90
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: ~355 KB (gzip: ~108 KB)

---

## 🎯 Próximos Passos

1. ✅ **Deploy no Vercel** (seguir passos acima)
2. ⏳ **Configurar domínio customizado** (opcional)
3. ⏳ **Configurar Google Analytics** (substituir `G-XXXXXXXXXX` no `index.html`)
4. ⏳ **Testar todas as rotas** após deploy
5. ⏳ **Monitorar performance** no Vercel Analytics

---

## ✅ Status Final

**Projeto 100% pronto para deploy!**

- ✅ Build funcionando
- ✅ Sem erros
- ✅ Configuração Vercel criada
- ✅ Rotas configuradas
- ✅ Dependências corretas

**Pode fazer o deploy com segurança!** 🚀

