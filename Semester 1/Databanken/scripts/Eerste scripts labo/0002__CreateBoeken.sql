CREATE DATABASE IF NOT EXISTS Modernways;
USE Modernways;
CREATE TABLE Boeken (
Voornaam VARCHAR(50) CHARSET utf8mb4,
Achternaam VARCHAR(80) CHARSET utf8mb4,
Titel VARCHAR(280) CHARSET utf8mb4,
Stad VARCHAR(50) CHARSET utf8mb4,
Verschijningsjaar VARCHAR(4),
Uitgeverij VARCHAR(80) CHAR SET utf8mb4,
Herdruk VARCHAR(4),
Commentaar VARCHAR(1000)
);
