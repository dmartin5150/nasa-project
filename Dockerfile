FROM node:lts-alpine3.14

WORKDIR /app

COPY package.json .

COPY client/package.json client/
RUN npm run install-client --omit=dev 

COPY server/package.json server/
RUN npm run install-server --omit=dev 

COPY client client/


RUN npm run build --prefix client

COPY server server/

# COPY server/public/ server/public/

USER node

CMD ["npm", "start", "--prefix", "server"]

EXPOSE 8000