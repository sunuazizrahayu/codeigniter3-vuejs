# CodeIgniter3 with VueJS [UNDER DEVELOPMENT]

## Docker
### NGINX
Build
```
docker build -f docker/nginx/Dockerfile -t codeigniter3-vue .
```

Run
```
docker run --name=codeigniter3-vue -d -p 8080:8080 -v=$(pwd):/var/www/html codeigniter3-vue
```