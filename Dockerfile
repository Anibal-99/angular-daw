FROM node:18.16.0-alpine3.16

EXPOSE 4200

ENV PATH="node_modules/.bin:$PATH"
ENV PATH="usr/local/bin:$PATH"

RUN mkdir /app && chown node /app
RUN mkdir /app/node_modules && chown node /app/node_modules

WORKDIR /app

USER node

COPY --chown=node package.json .
COPY --chown=node yarn.lock .

RUN yarn global add @angular/cli
RUN yarn

COPY --chown=node . .

CMD ["yarn", "start", "--host", "0.0.0.0", "--disable-host-check"]
