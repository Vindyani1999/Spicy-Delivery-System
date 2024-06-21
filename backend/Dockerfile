# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port your backend application listens on
EXPOSE 5000

# Set environment variables (replace MONGO_URI with your actual MongoDB URI)
ENV MONGO_URI="mongodb+srv://Weather99:chami1999928@weatherdb.kmumq9l.mongodb.net/?retryWrites=true&w=majority&appName=WeatherDB"

# Command to run your backend application
CMD ["node", "index.js"]
