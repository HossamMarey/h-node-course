FROM node:22.8

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# last command
CMD ["npm", "run", "start"]