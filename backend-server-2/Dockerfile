FROM node

RUN mkdir node-app
WORKDIR /node-app

COPY . .
RUN npm install
CMD ["node","index.js"]
EXPOSE 3001