FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=password

COPY ./java_database/dbcmds /dbcmds
COPY ./java_database/setDB.sh /setDB.sh

CMD bash /setDB.sh

EXPOSE 3306
