# FROM node:alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "run", "start"]

# Building the images in stages; stage builder

FROM node:18-alpine as builder 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# As soon as come here, the above image is build, 
# new image starts here can copies the build from the above step
# nginx is the new image that will be used to serve the content, serves by default no need to run
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
