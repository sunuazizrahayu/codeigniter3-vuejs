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


## VueJS
### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
