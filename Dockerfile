FROM node:alpine

RUN apk update && apk add mysql-client

ENV PORT=3030
ENV MYSQL_PORT=3306
ENV MYSQL_DRIVER=mysql

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]