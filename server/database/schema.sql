create table user (
  id int unsigned primary key auto_increment NOT NULL,
  firstname varchar(255),
  lastname varchar(255),
  email varchar(255) NOT NULL unique,
  password varchar(255) NOT NULL
);



create table products (
  id int unsigned primary key auto_increment NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  img varchar(255) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  quantity DECIMAL(5,2) DEFAULT 0
);

insert into user (firstname, lastname, email, password)
VALUES ("john", "doe", "jdoe@mail.com", "123456");

INSERT INTO products (name, description, img, price, quantity)
VALUES("Bouquet de tulipes", "Brassée de 20 tulipes multicolores", "./server/public/assets/images/bouquet-de-tulipes.jpg", 20, 0),
("Bouquet de tulipes", "Brassée de 40 tulipes multicolores", "./server/public/assets/images/bouquet-de-tulipes2.jpg", 40, 0),
("Bouquet du fleuriste blanc", "Bouquet blanc unique, réalisé par nos artisans fleuristes", "./server/public/assets/images/bouquet-fleuriste-blanc.jpg", 35, 0);

