FROM node:15.13-alpine

WORKDIR /usr/src/app

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start"]