FROM node:alpine

RUN apk update

ENV NODE_ENV=production
ENV PORT=3000
ENV MYSQL_HOST=
ENV MYSQL_USER=
ENV MYSQL_PASSWORD=
ENV MYSQL_DBNAME=
ENV MYSQL_PORT=3306
ENV MYSQL_DRIVER=mysql

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install
RUN npm install -g sequelize-cli

COPY . .

CMD [ "node", "index.js" ]