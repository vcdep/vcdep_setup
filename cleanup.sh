#! /bin/bash

sudo docker stop $(sudo docker ps -a -q)

sudo docker rm $(sudo docker ps -a -q)

sudo docker rmi -f $(sudo docker images -aq)

sudo rm -fr /cdep
