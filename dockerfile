#FROM node:7-alpine
#FROM node:14.16.0
FROM centos/python-35-centos7:latest
MAINTAINER shisan
USER root
ARG pub_key
ARG prive_key
#ENV SSH_KEY /root/.ssh/id_rsa
#ENV public_key /root/.ssh/id_rsa.pub
RUN yum update -y
RUN mkdir -p /oss-upload-test
ADD . /oss-upload-test
WORKDIR /oss-upload-test
RUN yum install git \
    && git config --global user.name "shisan" \
    && git config --global user.email "shisan@tsign.cn" \
    && yum install
RUN mkdir /root/.ssh/
RUN echo "${pub_key}" >> /root/.ssh/id_rsa.pub
RUN chmod 600 /root/.ssh/id_rsa.pub
RUN echo "${prive_key}" > /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa
RUN touch /root/.ssh/known_hosts
RUN ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts
RUN ssh -Tv git@github.com
#创建oss-upload-test目录
#ADD ./package.json /oss-upload-test
#ADD ./dist /oss-upload-test
#RUN npm tarZip test
#RUN mkdir -p /oss-upload-test/dist
#ADD ./oss-upload/dist /oss-upload-test/dist
#安装依赖 构建应用
#RUN npm build
#配置系统变量  指定端口
#ENV HOST 0.0.0
#ENV PORT 8088
#暴雷端口开放
#EXPOSE 8088
#容器启动指令
#CMD ['node','/oss-upload-test/app.js']
#COPY ./oss-upload /root
