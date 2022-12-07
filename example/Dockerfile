# pull official base image
FROM node:19-alpine3.16 as build
# set working directory
WORKDIR /app
RUN apk add git

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY ../ ./
RUN npm install

# pull official base image
FROM node:19-alpine3.16
# set working directory
WORKDIR /app
RUN apk add git

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY --from=build /app .
WORKDIR /app/example
# start app
CMD npm start
