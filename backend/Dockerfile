# Use an official Node.js runtime as the base image
FROM node:18.18.1

# Set the working directory inside the container
WORKDIR /backend

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install npm dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Create .env file with environment variables
RUN echo "MONGO_URI=mongodb+srv://Weather99:chami1999928@weatherdb.kmumq9l.mongodb.net/?retryWrites=true&w=majority&appName=WeatherDB" > .env

# Expose the port your backend application listens on
EXPOSE 5000

# Command to run your backend application
CMD [ "npm" ,"start"]
