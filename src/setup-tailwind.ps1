# -----------------------------------------
# Script PowerShell: Preparar proyecto Tailwind + Vite
# -----------------------------------------

param(
    [string]$ProjectPath = "C:\tienda_esenzials\client"
)

# 1️⃣ Ir a la carpeta del proyecto
Set-Location -Path $ProjectPath

# 2️⃣ Limpiar instalaciones anteriores
Write-Host "Limpiando node_modules y package-lock.json..."
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
if (Test-Path package-lock.json) { Remove-Item -Force package-lock.json }

# 3️⃣ Instalar dependencias necesarias
Write-Host "Instalando Tailwind CSS, PostCSS, Autoprefixer y Concurrently..."
npm install tailwindcss@latest postcss@latest autoprefixer@latest concurrently@latest --save-dev

# 4️⃣ Crear src/input.css si no existe
$InputCSS = "$ProjectPath\src\input.css"
if (-not (Test-Path $InputCSS)) {
    Write-Host "Creando src/input.css..."
    New-Item -ItemType File -Path $InputCSS -Force
}

# 5️⃣ Crear package.json básico si no existe
$PackageJson = "$ProjectPath\package.json"
if (-not (Test-Path $PackageJson)) {
    Write-Host "Creando package.json básico..."
    npm init -y
}

# 6️⃣ Asegurarse de que el script 'dev' exista
$json = Get-Content package.json | Out-String | ConvertFrom-Json
if (-not $json.scripts.dev) {
    Write-Host "Agregando script 'dev' a package.json..."
    $json.scripts.dev = "concurrently `"npx tailwindcss -i src/input.css -o dist/output.css --watch`" `"npx vite`""
    $json | ConvertTo-Json -Depth 5 | Set-Content package.json
}

# 7️⃣ Confirmación final
Write-Host "`n✅ Proyecto preparado. Ejecuta ahora:`"
Write-Host "npm run dev"
