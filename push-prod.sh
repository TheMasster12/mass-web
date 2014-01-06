#!/bin/bash

cd ~/development/web/mass-web

if [ ! -d "./dist" ]; then
  echo "Please generate dist/ folder by running grunt."
  exit
fi

scp -r ./dist/ ubuntu@gs-hq:~/

ssh ubuntu@gs-hq << 'EOF'

  sudo su
    cd /home/apache/mass-beta
    rm -rf /home/apache/mass-beta/**
    cp -r /home/ubuntu/dist/** .
    exit

  rm -rf ~/dist
  exit

EOF
