# Use node:16-alpine as the base image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install the project dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy the project files to the working directory
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]
