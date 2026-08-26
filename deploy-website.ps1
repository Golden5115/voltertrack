# Voltertrack Marketing Website Deployment Script
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Deploying Voltertrack Website to Hetzner...   " -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

$server = "root@2.28.4.243"
$targetDir = "/var/www/voltertrack-website"

Write-Host "`n[1/3] Building latest website bundle..." -ForegroundColor Yellow
npm.cmd run build

Write-Host "`n[2/3] Packing archive..." -ForegroundColor Yellow
tar -czf website-build.tar.gz -C dist .

Write-Host "`n[3/3] Uploading and deploying to Hetzner ($targetDir)..." -ForegroundColor Yellow
scp website-build.tar.gz ${server}:/tmp/website-build.tar.gz
ssh $server "mkdir -p $targetDir && tar -xzf /tmp/website-build.tar.gz -C $targetDir && rm -rf /tmp/website-build.tar.gz"

Write-Host "`n Deployment complete! Visit https://voltertrack.com" -ForegroundColor Green
