FROM node:8.9.1
EXPOSE 3000

WORKDIR /hotel-app
ADD package.json /hotel-app/
RUN npm install

ADD . /hotel-app

CMD ["npm","start"]

