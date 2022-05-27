DROP DATABASE IF EXISTS book_beans_db;

CREATE DATABASE book_beans_db;

CREATE TABLE Users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL,
    password VARCHAR(30)NOT NULL
)

CREATE TABLE bookclubs (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    club_name VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL,
    meeting_weekday VARCHAR(30) NOT NULL,
    meeting_time VARCHAR(30) NOT NULL,
    User_id INTEGER NOT NULL
)

CREATE TABLE cafes (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    cafe_name VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL,
    User_id INTEGER NOT NULL
)

CREATE TABLE bookclub_comments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    club_comment_text VARCHAR(100) NOT NULL,
    bookclub_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
)

CREATE TABLE cafe_comments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    cafe_comment_text VARCHAR(100) NOT NULL,
    cafe_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
)