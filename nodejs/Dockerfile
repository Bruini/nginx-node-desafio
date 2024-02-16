FROM node:current-alpine3.19

WORKDIR /app

RUN apk --update --no-cache add curl

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
