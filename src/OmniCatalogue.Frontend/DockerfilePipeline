# Step 1: Build the frontend
FROM node:16 AS builder
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY src/OmniCatalogue.Frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code and build
COPY src/OmniCatalogue.Frontend ./
RUN npm run build

# Step 2: Serve the frontend with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for frontend service
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
