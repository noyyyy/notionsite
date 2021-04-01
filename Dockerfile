FROM node:lts-buster

WORKDIR /app
EXPOSE 3000
USER root



COPY . .
RUN npm install 
RUN npm run build


CMD npm run start