FROM node:14-alpine
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn

CMD ["yarn", "start"]
