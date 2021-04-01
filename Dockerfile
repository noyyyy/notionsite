FROM node:lts-alpine3.13

WORKDIR /app
EXPOSE 3000

COPY . .
RUN npm install 
RUN npm run build


CMD npm run start