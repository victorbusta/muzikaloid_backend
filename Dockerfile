FROM node:19-alpine

WORKDIR /usr/src/

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate
RUN npx prisma migrate deploy 
RUN npx prisma db seed

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]