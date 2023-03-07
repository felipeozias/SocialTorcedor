FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY ./build/* .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]