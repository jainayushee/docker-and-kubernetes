# Base image called node, has a pre-configured node and npm env; alpine is the version, lightweight
FROM node:alpine
# create a new dir inside the container
WORKDIR /usr/src/app
# helps caching
COPY ./package.json .
# run command in dir
RUN npm install
# copies all files from the local app to the working dir of the container

COPY . .

EXPOSE 3000
# run after building the image
CMD ["npm", "run", "start"]