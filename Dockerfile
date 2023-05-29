FROM node:18.16.0-alpine3.16

RUN adduser -D user

EXPOSE 4200

RUN mkdir /app && chown user /app
RUN mkdir /app/node_modules && chown user /app/node_modules

WORKDIR /app

COPY --chown=user package.json .
COPY --chown=user yarn.lock .

USER user

RUN yarn global add @angular/cli
RUN yarn

COPY --chown=user . .

CMD ["yarn", "serve", "--host", "0.0.0.0", "--disable-host-check"]
