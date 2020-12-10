FROM node:12
WORKDIR /ProductsWebService
COPY . /ProductsWebService
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]