#!/bin/bash

echo "Creating Database..."

mysql -u root -p <<EOF

CREATE DATABASE IF NOT EXISTS studentdb;

CREATE USER IF NOT EXISTS 'studentapp'@'localhost'
IDENTIFIED BY 'Student@123';

GRANT ALL PRIVILEGES
ON studentdb.*
TO 'studentapp'@'localhost';

FLUSH PRIVILEGES;

USE studentdb;

CREATE TABLE IF NOT EXISTS students(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100),

phone VARCHAR(20),

department VARCHAR(100)

);

EOF

echo "Database Ready..."