#!/bin/bash

MYSQL_ROOT_PASSWORD="Root@12345"

mysql -u root -p"${MYSQL_ROOT_PASSWORD}" <<EOF

CREATE DATABASE IF NOT EXISTS studentdb;

CREATE USER IF NOT EXISTS 'studentapp'@'localhost'
IDENTIFIED BY 'Student@123';

GRANT ALL PRIVILEGES ON studentdb.* TO 'studentapp'@'localhost';

FLUSH PRIVILEGES;

USE studentdb;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    department VARCHAR(100)
);

EOF

if [ $? -eq 0 ]; then
    echo "Database setup completed successfully."
else
    echo "Database setup failed."
fi