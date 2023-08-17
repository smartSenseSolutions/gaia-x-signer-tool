FROM node:18.17.0

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm install pm2@5.2.0 -g

CMD ["pm2-runtime","--raw","dist/server.js","--name=gaia-x-signer-tool","--no-daemon"]