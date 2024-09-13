FROM node:20-alpine

RUN apk update && apk add --no-cache \
    build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ENV NODE_ENV=${NODE_ENV:-production}
ENV NODE_OPTIONS="--max_old_space_size=4096"

WORKDIR /app

COPY package*.json /app/
RUN npm install -g node-gyp
RUN npm install

COPY . /app
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start"]
