FROM node:lts-buster

WORKDIR /app
EXPOSE 3000
USER root



COPY . .
RUN cnpm install 
RUN npm run build


CMD npm run start