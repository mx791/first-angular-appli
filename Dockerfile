FROM node

WORKDIR /usr/app
RUN mkdir main && cd main
COPY package.json package.json
RUN npm i

COPY . .
RUN npm run build

FROM httpd

COPY --from=0 /usr/app/main /var/www/html
WORKDIR /var/www/html
RUN ls  -la
