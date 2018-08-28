#! /bin/sh

# Make the required folder that will be mounted to the jenkins container
sudo mkdir -p /cdep/repos

# Copy all the tests into the folder to be mounted
sudo cp -r ./tests /cdep/

# Install all dependencies for the node server 
cd ./vcdep_server
npm install

cd ..

cd ./docker-compose

# Start up all the containers in the compose file
sudo docker-compose up --build 

