FROM node:latest

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY .meshrc.yaml .
RUN npm build

CMD [ "npm", "start" ]