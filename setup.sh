#!/bin/bash

echo "===== Updating System ====="
sudo dnf update -y

echo "===== Installing Git ====="
sudo dnf install git -y

echo "===== Installing Node.js ====="
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install nodejs -y

echo "===== Installing PM2 ====="
sudo npm install -g pm2

echo "===== Installing MySQL ====="
sudo dnf install mysql-server -y

sudo systemctl enable mysqld
sudo systemctl start mysqld

echo "===== Installing MongoDB ====="

sudo tee /etc/yum.repos.d/mongodb-org-8.0.repo > /dev/null <<EOF
[mongodb-org-8.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/9/mongodb-org/8.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://pgp.mongodb.com/server-8.0.asc
EOF

sudo dnf install mongodb-org -y

sudo systemctl enable mongod
sudo systemctl start mongod

echo "===== Installing Node Packages ====="

cd ~/full_project/backend

npm install

echo "===== Starting Application ====="

pm2 start server.js --name student-result-app

pm2 save

echo "===== Completed ====="