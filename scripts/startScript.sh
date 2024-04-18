#!/bin/bash

# Navigate to the directory where the script is located
cd "$(dirname "$0")"

# Navigate to the root directory of the deployed application
cd ..

# Install dependencies (if needed)
npm install

# Start the server in the background
nohup npm run start > server.log 2>&1 &
