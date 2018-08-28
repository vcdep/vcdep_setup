FROM mysql:5.7

#RUN apt-get update -y && apt-get dist-upgrade -y
#RUN apt-get mysql-server -y

ENV MYSQL_ROOT_PASSWORD=password

COPY ./php_database/dbcmds /dbcmds
COPY ./php_database/setDB.sh /setDB.sh

CMD bash /setDB.sh

EXPOSE 3306
