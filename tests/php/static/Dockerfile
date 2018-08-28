FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get -y install php-pear && pear install PHP_CodeSniffer

COPY ./build.sh /cdep/

EXPOSE 8080
