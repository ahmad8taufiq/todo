FROM node:alpine

ENV NODE_ENV=development
ENV PORT=3030
ENV MYSQL_HOST=sql.freedb.tech
ENV MYSQL_USER=freedb_ahmad8taufiq
ENV MYSQL_PASSWORD=ej!J#R6d5@FB9CY
ENV MYSQL_DBNAME=freedb_db_todo4
ENV MYSQL_PORT=3306
ENV MYSQL_DRIVER=mysql

WORKDIR /app

COPY ["package.json", "./"]


RUN npm install
RUN npm install -g sequelize-cli
RUN npx browserslist@latest --update-db

COPY . .

RUN npm run db:setup

CMD [ "node", "index.js" ]