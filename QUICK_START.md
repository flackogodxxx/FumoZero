# ⚡ Quick Start - Fumo Zero

## 🚀 Início Rápido (4 Passos)

### 1️⃣ Instalar Node.js
```bash
# Verificar se está instalado
node --version
npm --version

# Se não estiver, baixe em: https://nodejs.org/
```

### 2️⃣ Instalar Dependências
```bash
npm install
```

### 3️⃣ Configurar (Opcional)
- Edite `index.html` e substitua `G-XXXXXXXXXX` pelo seu ID do GA4
- Edite `src/App.jsx` e atualize a URL do checkout na função `handleCTAClick`

### 4️⃣ Executar
```bash
npm run dev
```

Acesse: **http://localhost:5173**

---

## 📁 Estrutura Rápida

```
src/
├── components/     # Componentes React
├── utils/         # Analytics e helpers
├── App.jsx        # Página principal
└── main.jsx       # Entry point
```

## 🎨 Customizar

### Mudar Headlines
Edite `src/App.jsx` → array `headlines`

### Mudar CTAs
Edite `src/App.jsx` → array `ctaTexts`

### Mudar Cores
Edite `tailwind.config.js` → seção `colors`

### Mudar URL do Checkout
Edite `src/App.jsx` → função `handleCTAClick`

---

## 📦 Build para Produção

```bash
npm run build
```

Arquivos em: `dist/`

---

## 🐛 Problemas Comuns

**Erro: "node não é reconhecido"**
→ Instale o Node.js e reinicie o terminal

**Erro: "Cannot find module"**
→ Execute `npm install`

**Página em branco**
→ Verifique o console do navegador (F12)

---

## 📚 Documentação Completa

- `README.md` - Documentação completa
- `DESIGN_SPEC.md` - Especificações de design
- `VARIACOES_COPY.md` - Variações de copywriting
- `AB_TESTING_SUGGESTIONS.md` - Sugestões de A/B tests
- `PERFORMANCE_CHECKLIST.md` - Checklist de performance
- `design-system.json` - Design system completo

---

**Pronto para começar!** 🚀


