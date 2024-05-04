# Use an official Node.js runtime as a parent image
FROM node:18-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container image
COPY . .

# Build the application
RUN npm run build

# Use a smaller base image for the production environment
FROM node:18-alpine

# Set the working directory in the new image
WORKDIR /app

# Copy the package.json and package-lock.json from the builder stage
COPY --from=builder /app/package*.json ./

# Copy the build from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm ci --only=production

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the application in production
CMD ["npm", "start"]