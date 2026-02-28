# Use an official node.js rntime as parent image
FROM node:22-alpine

#Set the working directory in the container
WORKDIR /app

# copy the package.json and package-lock.json files to the container
COPY package*.json .

# Intsall the dependencies
RUN npm install

# Copy Prisma schema first (better caching)
COPY prisma ./prisma


#copy the rest of the application code
COPY . .

# expose the port that the app runs on
EXPOSE 5000

# Define the command to run your application
CMD ["sh", "-lc", "npx prisma generate && node ./src/server.js"]