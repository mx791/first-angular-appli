FROM node:latest

WORKDIR /usr/app
RUN mkdir main && cd main
COPY . .
RUN npm i && npm run build

FROM nginx
COPY --from=0 /usr/app/main /usr/share/nginx/html
# RUN echo "hw" > /usr/share/nginx/html/index.html
#COPY ./vhost.conf /etc/httpd/sites-available/main.conf
COPY ./nginx.conf /etc/nginx/nginx.conf