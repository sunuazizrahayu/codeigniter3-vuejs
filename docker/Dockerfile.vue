FROM node:lts-alpine3.13

# NodeJS
WORKDIR /app
COPY package*.json /app/
RUN npm install

COPY client /app/.
COPY babel.config.js /app/.
COPY vue.config.js /app/.

EXPOSE 8080
CMD ["npm", "run", "serve"]