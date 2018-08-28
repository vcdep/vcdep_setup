FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get -y install wget php7.0 php-mysql

COPY ./build.sh /cdep/
COPY ./setup.sh /cdep/

RUN bash /cdep/setup.sh

EXPOSE 8080
