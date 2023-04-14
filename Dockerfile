FROM node:14.21.3-alpine as build
ENV NODE_ENV=production
#USER node

WORKDIR /usr/src/app
COPY . .

RUN npm ci --only=production && npm i semver && \
  NODE_OPTIONS=--max_old_space_size=4096 npm run build && \
  npm prune --production && \
  mkdir -p /usr/src/app/public/uploads


FROM node:14.21.3-alpine
ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY --from=build /usr/src/app .

#VOLUME ["/usr/src/app/public/uploads"]
ENTRYPOINT npm run start

