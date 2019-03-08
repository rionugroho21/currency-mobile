#base image
FROM node:latest

#set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app

# install and cache app dependencies
RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build

# start app
CMD ["npm", "start"]