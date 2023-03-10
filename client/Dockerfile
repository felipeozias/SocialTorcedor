FROM nginx:1.23.3
WORKDIR /usr/share/nginx/html
COPY ./build/ .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]