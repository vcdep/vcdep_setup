FROM ubuntu:latest

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y vim curl software-properties-common nginx lsof

ADD reverse_proxy/ /home/reverse_proxy

WORKDIR /home/reverse_proxy

RUN cp ./vcdep.conf /etc/nginx/sites-enabled/

EXPOSE 80

CMD bash setup.sh && bash
