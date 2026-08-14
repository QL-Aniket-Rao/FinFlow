# Stage 1: Build the React application
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./ 
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the static files using Nginx
FROM nginx:alpine
# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf
# Copy custom nginx config (optional, but good practice)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]