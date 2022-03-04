FROM node:latest

COPY . .

RUN npm install --only=prod

CMD node dist/index.js
