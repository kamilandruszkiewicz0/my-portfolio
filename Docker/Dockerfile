# 🔹 Stage 1: Building the application
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy project files (only package.json for better caching)
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the code and build the application
COPY . ./
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# 🔹 Stage 2: Configuring Nginx and serving the application
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from the build stage to the Nginx folder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port
EXPOSE 80

# HEALTHCHECK 
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
