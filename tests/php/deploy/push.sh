#! /bin/bash

docker exec -d staging mkdir /var/www/html/$1
docker cp $2/$1/index staging:/var/www/html/$1/
