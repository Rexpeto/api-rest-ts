FROM node:18-alpine3.16

WORKDIR /app

COPY ./dist ./dist
COPY ./storage ./storage
COPY ./package.json .
COPY ./package-lock.json .
COPY ./.env .

RUN npm i

EXPOSE 5000

CMD [ "npm", "start" ]