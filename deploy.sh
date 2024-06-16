NODE_OPTIONS=--openssl-legacy-provider npm run build  
export REACT_APP_ENVIRONMENT=PROD
cd build  
#mkdir /var/www/airbrain-website/public/appstore  
cp -a . /var/www/airbrain-website/public/appstore