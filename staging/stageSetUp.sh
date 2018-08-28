#! /bin/bash

#rm /var/www/html/index.html
git config --global user.email "vcdep.devops@gmail.com"
git config --global user.name "vcdep"
service apache2 start

while(true)
do
  sleep 10
done
