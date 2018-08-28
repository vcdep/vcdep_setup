#! /bin/bash

docker exec -d staging mkdir /var/www/html/java/$1
docker cp $2/$1/index.html staging:/var/www/html/java/$1/
docker cp $2/$1/target/*.jar:/var/www/html/java/$1/application.jar
