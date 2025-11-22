# Guia de Instalação - FumoZero

## 📋 Pré-requisitos

Antes de começar, você precisa instalar o **Node.js** no seu computador Windows.

## 🔧 Instalação do Node.js

### Método 1: Download Manual (Mais Simples)

1. **Acesse o site oficial:**
   - Vá para: https://nodejs.org/
   - Clique em "Download" na versão **LTS** (Long Term Support)

2. **Execute o instalador:**
   - Execute o arquivo `.msi` baixado
   - Clique em "Next" nas telas de instalação
   - **IMPORTANTE:** Marque a opção "Add to PATH" durante a instalação
   - Complete a instalação

3. **Reinicie o Terminal:**
   - Feche e abra novamente o PowerShell ou CMD
   - Isso é necessário para carregar as variáveis de ambiente

4. **Verifique a instalação:**
   ```powershell
   node --version
   npm --version
   ```
   Você deve ver números de versão (ex: v20.10.0 e 10.2.3)

### Método 2: Usando Chocolatey (Avançado)

Se você já tem o Chocolatey instalado:

```powershell
choco install nodejs-lts
```

### Método 3: Script Automático

Execute o script PowerShell fornecido (requer Chocolatey):

```powershell
.\install-nodejs.ps1
```

## 📦 Instalação das Dependências do Projeto

Após instalar o Node.js, execute no terminal (na pasta do projeto):

```powershell
npm install
```

Este comando irá instalar:
- React 18
- React DOM
- Vite (ferramenta de build)
- ESLint (linter de código)
- E todas as outras dependências necessárias

## 🚀 Executar o Projeto

Para iniciar o servidor de desenvolvimento:

```powershell
npm run dev
```

O projeto estará disponível em: http://localhost:5173

## 📝 Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Verifica erros no código

## ❓ Problemas Comuns

### "node não é reconhecido como comando"
- Reinicie o terminal após instalar o Node.js
- Verifique se marcou "Add to PATH" durante a instalação
- Tente reinstalar o Node.js

### Erros ao executar `npm install`
- Verifique sua conexão com a internet
- Tente limpar o cache: `npm cache clean --force`
- Delete a pasta `node_modules` (se existir) e tente novamente

## 🎉 Pronto!

Após seguir estes passos, você terá:
- ✅ Node.js instalado
- ✅ npm funcionando
- ✅ Projeto React configurado
- ✅ Todas as dependências instaladas

Bom desenvolvimento! 🚀


