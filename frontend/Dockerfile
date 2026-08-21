FROM node:18-alpine
RUN npm install
COPY . /app
WORKDIR /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]