FROM node:18.16.0-alpine3.16

WORKDIR /app

RUN adduser -D user

EXPOSE 4200

COPY package.json .
COPY yarn.lock .

RUN yarn global add @angular/cli
RUN yarn

COPY . .
RUN chown -R user /app

USER user

CMD ["yarn", "serve", "--host", "0.0.0.0", "--disable-host-check"]
