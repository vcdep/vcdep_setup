FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install wget php7.0 -y

COPY ./build.sh /cdep/
COPY ./setup.sh /cdep/

RUN bash /cdep/setup.sh

EXPOSE 8080
