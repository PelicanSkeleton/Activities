DROP DATABASE IF EXISTS wishes;

CREATE DATABASE wishes;

USE wishes;

CREATE TABLE wish (
    id int NOT NULL AUTO_INCREMENT,
    wish varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO wish (wish) VALUES ('Steak dinner.');
INSERT INTO wish (wish) VALUES ('Hot kinky woman.');
INSERT INTO wish (wish) VALUES ('New Gibson SG standard. All black, trapizoid inlay.')