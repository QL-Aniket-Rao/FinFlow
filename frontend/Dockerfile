# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./ 
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the static files using Nginx
FROM nginx:stable-alpine
# Copy the built application files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Nginx runs by default
CMD ["nginx", "-g", "daemon off;"]
