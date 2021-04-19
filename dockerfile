FROM node:14.16.0
MAINTAINER shisan
#创建oss-upload-test目录
RUN mkdir -p /oss-upload-test
ADD ./oss-upload/*.js /oss-upload-test
ADD ./oss-upload/package.json /oss-upload-test
ADD ./oss-upload/dist /oss-upload-test
#RUN npm tarZip test
#RUN mkdir -p /oss-upload-test/dist
#ADD ./oss-upload/dist /oss-upload-test/dist
WORKDIR /oss-upload-test
#安装依赖 构建应用
RUN npm install
#RUN npm build
#配置系统变量  指定端口
#ENV HOST 0.0.0
#ENV PORT 8088
#暴雷端口开放
#EXPOSE 8088
#容器启动指令
#CMD ['node','/oss-upload-test/app.js']
#COPY ./oss-upload /root
