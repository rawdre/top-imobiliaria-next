# Pulls every static legacy page (blogs, buildings, contato, sobre) from the
# live site into BOTH /public and /public/legacy.
#
# Step 1: pulls a fixed core list (homepage-linked blogs + structural pages).
# Step 2: scans the just-pulled blog-index.html for every blog-*.html link
#         and pulls those too — self-discovering, so adding articles upstream
#         is picked up automatically next run.
#
# Run from project root:
#   powershell -ExecutionPolicy Bypass -File scripts\pull-legacy-pages.ps1

$ErrorActionPreference = 'Stop'
$base = 'https://rawdre.github.io/top-imobiliaria'

$publicDir = (Resolve-Path (Join-Path $PSScriptRoot '..\public')).Path
$legacyDir = Join-Path $publicDir 'legacy'
if (-not (Test-Path $legacyDir)) { New-Item -ItemType Directory -Path $legacyDir | Out-Null }

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Pull-File($name) {
  # Try filesystem-safe name; URL stays as-is for the request.
  $url = "$base/$name"
  $tmp = Join-Path $env:TEMP ("_topimob_" + ([System.IO.Path]::GetFileNameWithoutExtension($name) -replace '[^A-Za-z0-9._-]','_') + ".html")
  try {
    Invoke-WebRequest -Uri $url -OutFile $tmp -UseBasicParsing
    Copy-Item -Path $tmp -Destination (Join-Path $publicDir $name) -Force
    Copy-Item -Path $tmp -Destination (Join-Path $legacyDir $name) -Force
    $size = (Get-Item $tmp).Length
    Remove-Item $tmp -Force
    Write-Host ("  OK   {0,8:N0} bytes  {1}" -f $size, $name) -ForegroundColor Green
    return $true
  } catch {
    Write-Host ("  FAIL {1}  -> {0}" -f $_.Exception.Message, $name) -ForegroundColor Red
    return $false
  }
}

# Core static pages
$core = @(
  'blog-aluguel-aguas-claras.html',
  'blog-escolher-inquilino.html',
  'blog-documentos-locacao.html',
  'blog-vantagens-imobiliaria.html',
  'blog-quanto-vale-imovel.html',
  'blog-quanto-cobrar-aluguel.html',
  'blog-como-alugar-rapido.html',
  'blog-melhor-imobiliaria-vender.html',
  'blog-colocar-vender.html',
  'blog-index.html',
  'buildings.html',
  'contato.html',
  'sobre.html',
  # Per-building detail pages linked from buildings.html
  'df-plaza.html',
  'life-resort.html',
  'parque-amazonia.html',
  'real-splendor.html',
  'reserva-taguatinga.html',
  'residencial-easy.html',
  'via-azaleas.html',
  'vitrium.html'
)

Write-Host "Phase 1: pulling core pages -> $publicDir + $legacyDir" -ForegroundColor Cyan
foreach ($f in $core) { Pull-File $f | Out-Null }

# Discover every blog-*.html from blog-index.html
$indexPath = Join-Path $publicDir 'blog-index.html'
if (Test-Path $indexPath) {
  Write-Host "Phase 2: discovering article links from blog-index.html" -ForegroundColor Cyan
  $html = Get-Content -Raw -Path $indexPath -Encoding UTF8
  $matches = [regex]::Matches($html, 'href=["''](blog-[^"''#]+?\.html)["'']')
  $articles = @()
  foreach ($m in $matches) { $articles += $m.Groups[1].Value }
  $articles = $articles | Sort-Object -Unique
  $todo = $articles | Where-Object { $core -notcontains $_ }
  Write-Host ("  Found {0} extra articles to pull" -f $todo.Count) -ForegroundColor Cyan
  $ok = 0; $fail = 0
  foreach ($a in $todo) {
    if (Pull-File $a) { $ok++ } else { $fail++ }
  }
  Write-Host ("Phase 2 done: {0} OK, {1} failed" -f $ok, $fail) -ForegroundColor Cyan
} else {
  Write-Host "blog-index.html not present after phase 1; skipping phase 2." -ForegroundColor Yellow
}

# Discover any extra per-building detail pages from buildings.html
$bPath = Join-Path $publicDir 'buildings.html'
if (Test-Path $bPath) {
  Write-Host "Phase 3: discovering building detail pages from buildings.html" -ForegroundColor Cyan
  $html = Get-Content -Raw -Path $bPath -Encoding UTF8
  $matches = [regex]::Matches($html, 'href=["'']([^"''#/]+\.html)["'']')
  $pages = @()
  foreach ($m in $matches) {
    $name = $m.Groups[1].Value
    if ($name -match '^(blog-|index\.html$|buildings\.html$|sobre\.html$|contato\.html$)') { continue }
    $pages += $name
  }
  $pages = $pages | Sort-Object -Unique
  $todo = $pages | Where-Object { $core -notcontains $_ }
  Write-Host ("  Found {0} extra building pages to pull" -f $todo.Count) -ForegroundColor Cyan
  $ok = 0; $fail = 0
  foreach ($a in $todo) {
    if (Pull-File $a) { $ok++ } else { $fail++ }
  }
  Write-Host ("Phase 3 done: {0} OK, {1} failed" -f $ok, $fail) -ForegroundColor Cyan
}

Write-Host "Done." -ForegroundColor Cyan
