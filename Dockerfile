# Use Node image
FROM node:18

# Create a folder inside container
WORKDIR /app

# Copy only package.json files first (faster builds)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything else
COPY . .

# Build TypeScript -> JavaScript
RUN npm run build

# Expose port (change if you use another port)
EXPOSE 5000

# Start the backend
CMD ["node", "dist/index.js"]
