# TEST_prj for ELTEX

Для запуска прокта необходим установленный docker
Подробная инструкци по установке https://docs.docker.com/engine/install/ubuntu/

В терминале в корне проекта необходимо ввести команды:
docker build -t testprj:v1 .
docker run -d -p 80:80 testprj:v1

И перейти в браузере по localhost:80/

Если порт уже занят, то необходимо изменить

docker run -d -p 81:80 testprj:v1
localhost:81/

и так далее.
