FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get -y install software-properties-common
RUN add-apt-repository -y ppa:webupd8team/java
RUN apt-get update
RUN apt-get install -y maven apache2 php7.0 libapache2-mod-php php-mysql nano vim git

RUN mkdir /cdep

COPY ./staging/setup_maven.sh /cdep/

RUN bash /cdep/setup_maven.sh

RUN mkdir -p /root/.ssh

COPY ./jenkins_server/.ssh /root/.ssh
RUN chown root:root /root/.ssh/id_rsa
RUN chmod 700 /root/.ssh/id_rsa

COPY ./staging/stageSetUp.sh /cdep/

RUN mkdir /var/www/html/java /var/www/html/php
COPY ./staging/java /var/www/html/java
COPY ./staging/php /var/www/html/php

CMD bash /cdep/stageSetUp.sh

EXPOSE 80
