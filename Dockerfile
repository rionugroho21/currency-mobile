#base image
FROM node:latest

#set working directory
RUN mkdir /usr/src/app

WORKDIR /usr/src/app

#copy all files from current directory to docker
COPY package.json /usr/src/app

# install and cache app dependencies
RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

# add '/usr/src/app/node_modules/.bin' to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm build

# start app
CMD ["npm", "start"]