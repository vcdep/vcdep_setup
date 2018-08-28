#! /bin/bash

cd /cdep/repos/$1
mvn clean package -Dmaven.test.skip=true
