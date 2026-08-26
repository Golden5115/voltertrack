@echo off
echo ========================================================
echo   Deploying Voltertrack Website to Hetzner...   
echo ========================================================

echo [1/3] Building latest website bundle...
call npm.cmd run build

echo [2/3] Packing archive...
tar -czf website-build.tar.gz -C dist .

echo [3/3] Uploading and deploying to Hetzner (/var/www/voltertrack-website)...
scp website-build.tar.gz root@2.28.4.243:/tmp/website-build.tar.gz
ssh root@2.28.4.243 "mkdir -p /var/www/voltertrack-website && tar -xzf /tmp/website-build.tar.gz -C /var/www/voltertrack-website && rm -rf /tmp/website-build.tar.gz"

echo.
echo ========================================================
echo  Website deployment complete! Visit https://voltertrack.com
echo ========================================================
pause
