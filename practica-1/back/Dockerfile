# Use the official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json .

# Install app dependencies
RUN npm install


# Copy the rest of the application code to the container
COPY . .

RUN npm run build

# Expose the port your app runs on (por defecto, Nest.js usa el puerto 3000)
EXPOSE 3000

# Define the command to run your app (ajusta esto según cómo ejecutes tu aplicación)
CMD ["npm", "run", "start:prod"]