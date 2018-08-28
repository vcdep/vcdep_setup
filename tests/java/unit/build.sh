#! /bin/bash

cd /cdep/repos/$1/
mvn -Dtest=unit.* test
