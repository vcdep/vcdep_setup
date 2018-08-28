#! /bin/bash

service mysql start
mysql -u root --password=password < /dbcmds

while(true)
do
  sleep 100;
  #echo "Paused";
done
