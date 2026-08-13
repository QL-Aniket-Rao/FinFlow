# Stage 1: Build the React application
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./ # Assuming package-lock.json exists, though Vite often uses yarn/pnpm
RUN npm install
COPY . . 
RUN npm run build

# Stage 2: Serve the static files using Nginx
FROM nginx:stable-alpine
# Copy custom Nginx config (optional, but good practice)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]