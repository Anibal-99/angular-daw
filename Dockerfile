FROM node:18.16.0-alpine3.16

EXPOSE 4200

RUN deluser node

RUN addgroup -g 1000 nonroot \
    && adduser -u 1000 -G nonroot -s /bin/sh -D nonroot

RUN mkdir /app && chown nonroot /app
RUN mkdir /app/node_modules && chown nonroot /app/node_modules

WORKDIR /app

USER nonroot

COPY --chown=nonroot package.json .
COPY --chown=nonroot yarn.lock .

RUN yarn global add @angular/cli
RUN yarn

COPY --chown=nonroot . .

CMD ["yarn", "serve", "--host", "0.0.0.0", "--disable-host-check"]
