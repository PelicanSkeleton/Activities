CREATE DATABASE animals;

CREATE TABLE people(
	name varchar(30) NOT NULL,
    has_pet boolean NOT NULL,
    pet_name varchar(30),
    pet_age int(10)
);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", TRUE, "Misty", 10);

INSERT INTO people (name, has_pet)
VALUES ("Peter", false);

UPDATE people
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE name = "Peter";