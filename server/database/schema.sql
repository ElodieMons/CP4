CREATE table user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname varchar(255),
  lastname varchar(255),
  email varchar(255) NOT NULL unique,
  password varchar(255) NOT NULL
);



CREATE table product (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  img varchar(255) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  quantity DECIMAL(5) DEFAULT 1
);

CREATE table user_product (
  user_id INT UNSIGNED,
  product_id INT UNSIGNED,
  PRIMARY KEY (user_id, product_id),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (product_id) REFERENCES product(id)
);

INSERT INTO user (firstname, lastname, email, password)
VALUES ("john", "doe", "jdoe@mail.com", "123456");

INSERT INTO product (name, description, img, price, quantity)
VALUES("Bouquet de tulipes", "Brassée de 20 tulipes multicolores", "./server/public/assets/images/bouquet-de-tulipes.jpg", 20, 1),
("Bouquet de tulipes", "Brassée de 40 tulipes multicolores", "./server/public/assets/images/bouquet-de-tulipes2.jpg", 40, 1),
("Bouquet du fleuriste blanc", "Bouquet blanc unique, réalisé selon les disponibilités par nos artisans fleuristes", "./server/public/assets/images/bouquet-fleuriste-blanc.jpg", 35, 1),
("Bouquet du fleuriste rose", "Bouquet rose unique, réalisé selon les disponibilités par nos artisans fleuristes", "./server/public/assets/images/bouquet-fleuriste-rose.jpg", 35, 1),
("Bouquet du fleuriste rouge", "Bouquet rouge unique, réalisé selon les disponibilités par nos artisans fleuristes ", "./server/public/assets/images/bouquet-fleuriste-rouge.jpg", 35, 1),
("Bouquet du fleuriste multicolore", "Bouquet multicolore unique, réalisé selon les disponibilités par nos artisans fleuristes ", "./server/public/assets/images/bouquet-fleuriste-multicolore.jpg", 35, 1),
("Bouquet Printemps coloré", "Bouquet de fleurs blanches et orange", "./server/public/assets/images/bouquet-myrtille.jpg", 40, 1),
("Bouquet Printemps tons chauds", "Bouquet de fleurs jaune orange et rouge", "./server/public/assets/images/bouquet-printemps-tons-chauds.jpg", 40, 1),
("Bouquet Myrtille", "Bouquet au camaïeu de fleurs rose et violet", "./server/public/assets/images/bouquet-myrtille.jpg", 40, 1),
("Bouquet Passion", "Bouquet de fleurs rouges et blanches", "./server/public/assets/images/bouquet-rouge-et-blanc-passion.jpg", 49, 1),
("Bouquet Alcove", "Bouquet de roses rouges et blanches agrémmenté de feuillages", "./server/public/assets/images/bouquet-fleurs-alcove.jpg", 40, 1),
("Bouquet de roses blanches", "Bouquet de 15 roses blanches", "./server/public/assets/images/bouquet-roses-blanches.png", 65, 1),
("Bouquet de roses rouges", "Bouquet de 15 roses rouges", "./server/public/assets/images/bouquet-roses-rouges.png", 65, 1),
("Bouquet de roses rose", "Bouquet de 15 roses rose", "./server/public/assets/images/bouquet-roses-rose.png", 65, 1),
("Bouquet de roses multicole", "Bouquet de 15 roses multicolore", "./server/public/assets/images/bouquet-de-roses-multicolore.jpg", 65, 1),
("Bouquet de roses multicole", "Bouquet de 15 roses multicolore", "./server/public/assets/images/bouquet-de-roses-multicolore.jpg", 65, 1),
("Bouquet Douceur", "Bouquet de fleurs blanches format xl", "./server/public/assets/images/bouquet-douceur.jpg", 100, 1),
("Bouquet de mariée", "Bouquet de mariée sur mesure avec poignée", "./server/public/assets/images/bouquet-de-mariee.png", 60, 1),
("Anthurium", "Plante d''intérieur tropicale facile d''entretien et connue pour ses propriétés dépolluantes", "./server/public/assets/images/plante-anthurium.jpg", 32, 1),
("Guzmania", "Plante d''intérieur exotique facile d''entretiens", "./server/public/assets/images/plante-guzmania.jpg", 25, 1),
("Azalée", "Plante d''intérieur ou d'extérieur facile d''entretien à floraison hivernale", "./server/public/assets/images/plante-azalee.png", 25, 1),
("Dendrobium", "Orchidée Dendrobium ou orchidée bambou, apporte une touche fleurie et champêtre à votre décoration d''intérieur", "./server/public/assets/images/plante-dendrobium.jpg", 30, 1),
("Orchidée 1 tige", "Orchidée Phalaenopsis, facile d''entretien, elle apporte une touche d''élégance à votre intérieur", "./server/public/assets/images/plante-phalaenopsis-1-tige.jpg", 25, 1),
("Orchidée 2 tiges", "Orchidée Phalaenopsis, c'est le cadeau idéal, facile d''entretien, elle apporte une touche d''élégance à votre intérieur", "./server/public/assets/images/plante-phalaenopsis-1-tige.jpg", 34, 1),
("Dracaena", "Plante verte purificatrice d''air facile d''entretien", "./server/public/assets/images/plante-dracaena-marginata.jpg", 34, 1),
("Spathiphyllum", "Plante verte purificatrice d''air facile d''entretien", "./server/public/assets/images/plante-spathiphyllum.jpg", 24, 1),
("Terrarium", "Jardin miniature très tendance qui regroupe un mélange de plantes vertes et/ou fleuries", "./server/public/assets/images/terrarium.png", 24, 1),
("Coupe de plantes", "Coupe de plantes vertes et fleuries de taille moyenne", "./server/public/assets/images/coupe-de-plantes.png", 40, 1),
("Panier fleuri - deuil", "Composition de fleurs piquées dans un panier", "./server/public/assets/images/deuil-paniere.jpg", 90, 1),
("Gerbe piquée - deuil", "Gerbe de fleurs piquées", "./server/public/assets/images/deuil-gerbe-piquee.jpg", 120, 1),
("Raquette - deuil", "Raquette de fleurs piquées", "./server/public/assets/images/deuil-raquette.png", 160, 1),
("Coeur - deuil", "Coeur de fleurs piquées", "./server/public/assets/images/deuil-coeur.jpg", 200, 1),
("Couronne - deuil", "Couronne de fleurs piquées", "./server/public/assets/images/deuil-couronne.jpg", 250, 1),
("Coussin carré - deuil", "Coussin carré de fleurs piquées", "./server/public/assets/images/deuil-coussin-carre.jpg", 250, 1);

