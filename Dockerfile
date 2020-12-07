FROM node:12.18.4
WORKDIR /ProductsWebService
COPY . /ProductsWebService
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]