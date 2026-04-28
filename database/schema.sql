CREATE DATABASE nexa_db;

USE nexa_db;

CREATE TABLE users (
    id INT PRIMARY KEY, 
    name VARCHAR(100),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100),
    street VARCHAR(100),
    suite VARCHAR(100),
    city VARCHAR(100),
    zipcode VARCHAR(20),
    lat VARCHAR(20),
    lng VARCHAR(20),
    phone VARCHAR(50),
    website VARCHAR(100),
    company_name VARCHAR(100),
    company_catchPhrase VARCHAR(255),
    company_bs VARCHAR(100)
);

CREATE TABLE passwords (
    user_id INT PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE todos (
    id INT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE posts (
    id INT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    body TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT PRIMARY KEY,
    post_id INT,
    name VARCHAR(100),
    email VARCHAR(100),
    body TEXT,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO users (id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, company_name, company_catchPhrase, company_bs)
VALUES (1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

INSERT INTO passwords (user_id, password) 
VALUES (1, 'pigeon123'); 

INSERT INTO posts (id, user_id, title, body)
VALUES (1, 1, 'sunt aut facere repellat provident', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');

INSERT INTO todos (id, user_id, title, completed)
VALUES (1, 1, 'delectus aut autem', false);

INSERT INTO comments (id, post_id, name, email, body)
VALUES (1, 1, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium');



