# Stage 1: Build
FROM node:18-bullseye AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json . 
RUN npm install

# Copy the rest of the project files and build
COPY . .
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Stage 2: Deployment
FROM node:18-bullseye AS deployer

WORKDIR /app

# Copy the build output and necessary files from the builder stage
COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules/

EXPOSE 3000

ENV NODE_ENV=production

# Start the application
CMD [ "node", "build" ]
