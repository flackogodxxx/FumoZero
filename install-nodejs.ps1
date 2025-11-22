# Script para instalar Node.js no Windows
# Execute como Administrador: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Write-Host "Verificando se Node.js já está instalado..." -ForegroundColor Yellow

# Verifica se Node.js já está instalado
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "Node.js já está instalado: $nodeVersion" -ForegroundColor Green
        Write-Host "Versão do npm: $(npm --version)" -ForegroundColor Green
        exit 0
    }
} catch {
    Write-Host "Node.js não encontrado. Prosseguindo com a instalação..." -ForegroundColor Yellow
}

Write-Host "`n=== Instalação do Node.js ===" -ForegroundColor Cyan
Write-Host "Este script tentará instalar o Node.js usando Chocolatey." -ForegroundColor Yellow
Write-Host "Se o Chocolatey não estiver instalado, você precisará:" -ForegroundColor Yellow
Write-Host "1. Baixar manualmente de: https://nodejs.org/" -ForegroundColor Yellow
Write-Host "2. Ou instalar o Chocolatey primeiro: https://chocolatey.org/install" -ForegroundColor Yellow
Write-Host ""

# Verifica se Chocolatey está instalado
try {
    $chocoVersion = choco --version 2>$null
    if ($chocoVersion) {
        Write-Host "Chocolatey encontrado: $chocoVersion" -ForegroundColor Green
        Write-Host "Instalando Node.js LTS..." -ForegroundColor Yellow
        choco install nodejs-lts -y
        Write-Host "`nInstalação concluída! Reinicie o terminal e execute: npm install" -ForegroundColor Green
    } else {
        Write-Host "Chocolatey não encontrado." -ForegroundColor Red
        Write-Host "`nPor favor, instale o Node.js manualmente:" -ForegroundColor Yellow
        Write-Host "1. Acesse: https://nodejs.org/" -ForegroundColor Cyan
        Write-Host "2. Baixe a versão LTS" -ForegroundColor Cyan
        Write-Host "3. Execute o instalador" -ForegroundColor Cyan
        Write-Host "4. Marque 'Add to PATH' durante a instalação" -ForegroundColor Cyan
        Write-Host "5. Reinicie o terminal após a instalação" -ForegroundColor Cyan
    }
} catch {
    Write-Host "Erro ao verificar Chocolatey. Instale o Node.js manualmente de: https://nodejs.org/" -ForegroundColor Red
}


