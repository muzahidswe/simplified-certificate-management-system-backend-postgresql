# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory for the backend service
WORKDIR /app

# Copy backend-specific files
COPY . .

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Define the command to run the backend application
CMD ["npm", "start"]
