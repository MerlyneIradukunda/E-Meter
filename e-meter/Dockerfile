FROM node:16-slim

WORKDIR /usr/src/app/client

COPY ./package*.json ./

RUN  npm  install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]