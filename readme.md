# CodeIgniter3 with VueJS

## Project setup
### VueJS
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


### CodeIgniter3
...




## Docker
### Development Purpose with *docker-compose*
#### Setup
Develop apps with docker-compose
```
//v1
docker-compose up -d --build

//v2 [customize docker-compose.yml filepath]
docker-compose -f docker-compose.yml up -d --build
```

VueJS :: http://localhost:8080/
CodeIgniter3 :: http://localhost:8080/api/

or

VueJS :: http://localhost:8082/
CodeIgniter3 :: http://localhost:8081/

#### Logging / Debugging
```
docker-compose logs -f frontend
or
docker-compose logs -f php
```



### Docker with NGINX
Build
```
docker build -f docker/nginx/Dockerfile -t codeigniter3-vue .
```

Run
```
docker run --name=codeigniter3-vue -d -p 8080:8080 -v=$(pwd):/var/www/html codeigniter3-vue
```

## Docker-Compose
```
docker-compose -f docker-compose.yml up -d --build
```
```
docker-compose up --build --remove-orphans
```
