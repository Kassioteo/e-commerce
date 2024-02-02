FROM node

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY ./vite-project vite-project

CMD [ "npm", "run", "dev" ]