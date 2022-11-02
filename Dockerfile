FROM nginx:alpine
COPY text /usr/share/nginx/html/text
COPY css /usr/share/nginx/html/css
COPY img /usr/share/nginx/html/img
COPY js /usr/share/nginx/html/js
COPY index.html /usr/share/nginx/html
