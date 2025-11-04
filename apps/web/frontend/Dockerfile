# Multi-stage build for withoutbg frontend
# Build context should be the repository root: docker build -f apps/web/frontend/Dockerfile .

# Stage 1: Build React application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY apps/web/frontend/package.json apps/web/frontend/package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy frontend source
COPY apps/web/frontend/ ./

# Build the application
RUN npm run build

# Stage 2: Production stage with Nginx
FROM nginx:1.25-alpine

# Copy Nginx configuration
COPY apps/web/nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built React application
COPY --from=builder /app/dist /usr/share/nginx/html

# Create a simple health check page
RUN echo "healthy" > /usr/share/nginx/html/health.html

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
