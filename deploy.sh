#!/bin/bash

docker buildx build --platform linux/amd64 -t blazinglyfastportfolio:latest . && docker tag blazinglyfastportfolio:latest cougargriff/blazinglyfastportfolio:latest
