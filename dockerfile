# Base Image
FROM node:14 as base

# Devlopment Image
FROM base as devlopment

# set work directry
WORKDIR /app
# Copy and install dependencies
COPY package.json .
RUN npm install 
# Copy project 
COPY . . 
# set port  
EXPOSE 4000
# run command
CMD [ "npm", "run", "start-dev" ]

# Productio image
FROM base as production

WORKDIR /app
COPY package.json .
RUN npm install 
COPY . . 
EXPOSE 4000
CMD [ "npm", "run", "start-dev" ]