# Frontend Dockerfile (OmniCatalogue.Frontend/Dockerfile)
FROM node:16 AS builder
WORKDIR /app

# Install dependencies
COPY src/OmniCatalogue.Frontend/package*.json ./
RUN npm install

# Copy source files and build
COPY src/OmniCatalogue.Frontend/ .
RUN npm run build

# Serve with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
