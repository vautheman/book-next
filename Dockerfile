FROM node:18

WORKDIR /urs/src/app

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start"]
