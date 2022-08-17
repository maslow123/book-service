FROM node:14-alpine

# Create app directory
ENV NODE_ENV ${NODE_ENV}
WORKDIR /usr/src/app

# Install app dependencies
RUN apk update && apk add bash
RUN apk add postgresql-client --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

# RUN npm install
# If you are building your code for production

# Bundle app source
COPY . .


EXPOSE 8080

CMD ["node","index.js"]