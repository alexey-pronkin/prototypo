# sudo docker build . -t prototypo
# sudo docker run -p 9000:9000 -it prototypo
FROM node:10.24.1-alpine3.10
COPY . .
ENV PATH=/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
ENV LANG=C.UTF-8
RUN apk add --update alpine-sdk
RUN apk add --no-cache python2
RUN yarn install
EXPOSE 9000
CMD yarn start