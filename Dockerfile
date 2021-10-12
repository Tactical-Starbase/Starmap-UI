FROM node:latest

WORKDIR /usr/src/app

ADD . .

RUN npm install

ENTRYPOINT node index.js
