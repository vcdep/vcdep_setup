FROM ubuntu:latest

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y software-properties-common && add-apt-repository -y ppa:webupd8team/java && apt-get update -y && apt-get install -y wget unzip nano

COPY ./ /cdep/

RUN bash /cdep/setup_maven.sh
