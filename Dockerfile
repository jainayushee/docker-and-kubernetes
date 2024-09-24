# L1: nginx:alpine base image; 
# L2: copies everything from current folder to everything inside the specified folder

FROM nginx:alpine
COPY . /usr/share/nginx/html

