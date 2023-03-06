FROM node:latest

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]