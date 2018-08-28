#! /bin/bash

URL=$1
REPO=$2
BRANCH=$3

if [ ! -d "$REPO" ]; then
  git clone $URL $REPO
fi

cd $REPO

git checkout $BRANCH
git pull origin $BRANCH
git checkout master
git pull origin master
git merge $BRANCH
git push origin master
