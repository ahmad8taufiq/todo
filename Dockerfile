FROM node:alpine

ENV NODE_ENV=development
ENV PORT=3030
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
RUN npx browserslist@latest --update-db

COPY . .

RUN npm run db:reset

CMD [ "node", "index.js" ]