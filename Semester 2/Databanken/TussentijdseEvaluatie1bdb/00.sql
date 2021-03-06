-- MySQL Script generated by MySQL Workbench
-- Wed 04 Mar 2020 21:22:16 CET
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema TussentijdseEvaluatie1BDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `TussentijdseEvaluatie1BDB` ;

-- -----------------------------------------------------
-- Schema TussentijdseEvaluatie1BDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `TussentijdseEvaluatie1BDB` ;
USE `TussentijdseEvaluatie1BDB` ;

-- -----------------------------------------------------
-- Table `TussentijdseEvaluatie1BDB`.`Leden`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `TussentijdseEvaluatie1BDB`.`Leden` ;

CREATE TABLE IF NOT EXISTS `TussentijdseEvaluatie1BDB`.`Leden` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Voornaam` VARCHAR(45) NOT NULL,
  `Familienaam` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TussentijdseEvaluatie1BDB`.`Auteurs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `TussentijdseEvaluatie1BDB`.`Auteurs` ;

CREATE TABLE IF NOT EXISTS `TussentijdseEvaluatie1BDB`.`Auteurs` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Voornaam` VARCHAR(45) NOT NULL,
  `Familienaam` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TussentijdseEvaluatie1BDB`.`Uitgeverijen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `TussentijdseEvaluatie1BDB`.`Uitgeverijen` ;

CREATE TABLE IF NOT EXISTS `TussentijdseEvaluatie1BDB`.`Uitgeverijen` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Naam` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `Naam_UNIQUE` (`Naam` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TussentijdseEvaluatie1BDB`.`Boeken`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `TussentijdseEvaluatie1BDB`.`Boeken` ;

CREATE TABLE IF NOT EXISTS `TussentijdseEvaluatie1BDB`.`Boeken` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Titel` VARCHAR(100) NOT NULL,
  `Auteurs_Id` INT NOT NULL,
  `Uitgeverijen_Id` INT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Boeken_Auteurs_idx` (`Auteurs_Id` ASC) VISIBLE,
  INDEX `fk_Boeken_Uitgeverijen_idx` (`Uitgeverijen_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Boeken_Auteurs`
    FOREIGN KEY (`Auteurs_Id`)
    REFERENCES `TussentijdseEvaluatie1BDB`.`Auteurs` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Boeken_Uitgeverijen`
    FOREIGN KEY (`Uitgeverijen_Id`)
    REFERENCES `TussentijdseEvaluatie1BDB`.`Uitgeverijen` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TussentijdseEvaluatie1BDB`.`Ontleningen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `TussentijdseEvaluatie1BDB`.`Ontleningen` ;

CREATE TABLE IF NOT EXISTS `TussentijdseEvaluatie1BDB`.`Ontleningen` (
  `Leden_Id` INT NOT NULL,
  `Boeken_Id` INT NOT NULL,
  PRIMARY KEY (`Leden_Id`, `Boeken_Id`),
  INDEX `fk_Ontleningen_Leden_idx` (`Boeken_Id` ASC) VISIBLE,
  INDEX `fk_Ontleningen_Boeken_idx` (`Leden_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Ontleningen_Leden`
    FOREIGN KEY (`Leden_Id`)
    REFERENCES `TussentijdseEvaluatie1BDB`.`Leden` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ontleningen_Boeken`
    FOREIGN KEY (`Boeken_Id`)
    REFERENCES `TussentijdseEvaluatie1BDB`.`Boeken` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

insert into Leden (Voornaam, Familienaam)
values
('Jitske','Dubois'),
('Klara','Nguyen'),
('Björn','Maes'),
('Ethan','Martin'),
('Deborah','Janssens'),
('Cara','Willems'),
('Axana','Janssens'),
('Elodie','Dupont'),
('Evelyne','Peeters'),
('Meryem','Janssens'),
('Mehdi','Janssens'),
('Bavo','Nguyen'),
('Jessy','Peeters'),
('Evelyne','Lambert'),
('Liesbeth','Lambert'),
('Bo','Nguyen'),
('Milla','Martin'),
('Yarno','Nguyen'),
('Korneel','Janssens'),
('Jitske','Jacobs'),
('Emmanuel','Martin'),
('Ahmet','Maes'),
('Jitse','Martin'),
('Mattias','Janssens'),
('Evelyne','Lambert'),
('Gijs','Diallo'),
('Ilke','Lambert'),
('Jolan','Maes'),
('Iman','Janssens'),
('Oumaima','Lambert'),
('Jasmien','Maes'),
('Nelle','Martin'),
('Hafsa','Maes'),
('Saartje','Janssens'),
('Aleyna','Nguyen'),
('Anass','Janssens'),
('Océane','Janssens'),
('Lene','Nguyen'),
('Jorne','Dupont'),
('Yanis','Janssens'),
('Magali','Dubois'),
('Mehdi','Diallo'),
('Jorne','Willems'),
('Mikail','Janssens'),
('Esmée','Willems'),
('Shirley','Peeters'),
('Oskar','Peeters'),
('Walid','Nguyen'),
('Mehdi','Willems'),
('Fabio','Bah');

insert into Auteurs (Voornaam,Familienaam)
values
('Maurice','Peeters'),
('Nena','Peeters'),
('Nena','Maes'),
('Rens','Peeters'),
('Arjen','Barry'),
('Matthijs','Peeters'),
('Shirley','Willems'),
('Klara','Barry'),
('Ilke','Nguyen'),
('Vicky','Barry');

insert into Uitgeverijen (Naam)
values
('De oehoe'),
('Kaarslicht'),
('Athena'),
('De bezige bij'),
('Boekenwurm'),
('Papyrus');

insert into Boeken (Titel,Auteurs_Id,Uitgeverijen_Id)
values
('Dagen van schaamte',8,3),
('Dansen in de hemel',10,3),
('Dansen in het donker',5,1),
('Daten voor gevorderden',7,1),
('De 100-jarige man die terugkwam om de wereld te redden',10,4),
('De au pair',8,4),
('De consequenties',4,3),
('De dag van de doden',1,5),
('De dinsdagvrouwen: zeven dagen zonder',3,2),
('De dood van mevrouw Westaway',9,3),
('De doodsvogel',1,6),
('De edele kunst van Not giving a f*ck',9,2),
('De erfgename',5,5),
('De familiereünie',1,6),
('De flirtcursus',4,1),
('De Fluisterman',1,3),
('De gloriedagen van Walter Gom',4,6),
('De greppel',4,3),
('De hitte van de hel',5,4),
('De huurmoeder',5,3),
('De ingreep',5,3),
('De jacht',4,5),
('De laatste roos van de zomer',4,5),
('De laatste Wachter 2: Wolfsbloed',4,3),
('De leugenaar',8,5),
('De levenden en de doden',9,5),
('De meisjesmagneet',1,2),
('De midlifeclub',4,6),
('De minnaar',8,2),
('De Napolitaanse romans 1: De geniale vriendin',4,1),
('De Napolitaanse romans 2: De nieuwe achternaam',3,4),
('De Napolitaanse romans 3: Wie vlucht en wie blijft',3,1),
('De Napolitaanse romans 4: Het verhaal van het verloren kind',7,5),
('De Nergensman',6,6),
('De onderkant van sneeuw',5,5),
('De onwaarschijnlijke reis van Harold Fry',5,6),
('De president',1,3),
('De redding',1,5),
('De samaritaan',2,6),
('De schitterende doden',6,4),
('De secretaresse',10,4),
('De sekte',5,6),
('De sekte herrijst',8,5),
('De tweede zonde',10,4),
('De tweeling van Summerbourne',3,4),
('De uitverkorene',10,3),
('De verborgen universiteit 3: De stad van de alchemist',4,1),
('De verdwijning van Adèle Bedeau',7,4),
('De vrouw die terug moest',2,2),
('De vrouw in het medaillon',2,6),
('De vrouwen van kasteel Deverill',7,4),
('De wolven',10,6),
('De zomer hou je ook niet tegen',4,2),
('Debet',8,3),
('Denken aan vrijdag',10,6),
('Diagnose besmet',7,5),
('Dicht bij jou',1,4),
('Dochter van het moeras',8,6),
('Dochters van anderen',4,5),
('Dodelijke affaire',7,2),
('Doet sneeuw pijn',4,6),
('Domina',4,6);

insert into Ontleningen (Leden_Id, Boeken_Id)
values
(22, 57),
(14, 17),
(4, 41),
(42, 10),
(50, 34),
(36, 17),
(24, 4),
(2, 22),
(42, 20),
(23, 26),
(50, 60),
(19, 55),
(28, 26),
(18, 30),
(17, 46),
(32, 2),
(15, 47),
(27, 55),
(36, 8),
(36, 27),
(28, 46),
(9, 36),
(41, 18),
(16, 25),
(49, 58),
(40, 38),
(15, 49),
(14, 43),
(22, 48),
(38, 53),
(4, 16),
(19, 24),
(2, 32),
(22, 39),
(21, 37),
(7, 22),
(29, 37),
(19, 60),
(27, 27),
(16, 41),
(11, 41),
(43, 35),
(50, 17),
(36, 55),
(43, 52),
(17, 57),
(50, 28),
(36, 2),
(3, 39),
(32, 61),
(28, 37),
(24, 8),
(9, 34),
(42, 16),
(41, 40),
(47, 21),
(25, 5),
(45, 5),
(36, 46),
(8, 9),
(17, 34),
(47, 6),
(37, 47),
(29, 23),
(17, 55),
(7, 60),
(11, 57),
(10, 3),
(15, 26),
(38, 51),
(10, 30),
(8, 45),
(7, 54),
(19, 43),
(2, 49),
(36, 4),
(42, 27),
(47, 18),
(4, 53),
(35, 39),
(12, 35),
(29, 16),
(35, 56),
(49, 19),
(37, 37),
(12, 46),
(44, 32),
(18, 47),
(10, 20),
(6, 27),
(20, 15),
(37, 28),
(14, 54),
(30, 59),
(25, 62),
(15, 55),
(24, 50),
(48, 31),
(50, 14),
(33, 27),
(36, 48),
(9, 29),
(8, 19),
(42, 53),
(4, 22),
(34, 49),
(5, 36),
(2, 19),
(31, 36),
(5, 49),
(11, 34),
(28, 23),
(1, 14),
(50, 4),
(23, 2),
(17, 54),
(15, 39),
(21, 48),
(34, 5),
(17, 59),
(21, 45),
(23, 62),
(18, 2),
(1, 23),
(32, 46),
(20, 1),
(10, 44),
(5, 2),
(29, 42),
(41, 42),
(33, 28),
(7, 49),
(24, 44),
(48, 39),
(12, 53),
(9, 27),
(18, 54),
(37, 11),
(45, 46),
(42, 24),
(32, 43),
(6, 49),
(35, 59),
(2, 4),
(24, 41),
(38, 36),
(19, 41),
(35, 1),
(1, 46),
(16, 2),
(31, 26),
(43, 60),
(15, 8),
(17, 16),
(7, 29),
(48, 13),
(38, 16),
(19, 62),
(3, 14),
(26, 15),
(33, 21),
(25, 61),
(41, 32),
(6, 50),
(5, 12),
(28, 9),
(2, 52),
(25, 39),
(30, 28),
(22, 38),
(19, 10),
(46, 22),
(2, 16),
(23, 16),
(37, 45),
(2, 10),
(43, 32),
(37, 58),
(43, 53),
(47, 51),
(45, 42),
(11, 17),
(21, 22),
(29, 41),
(32, 18),
(24, 58),
(39, 18),
(22, 5),
(42, 46),
(31, 55),
(20, 51),
(6, 56),
(7, 61),
(46, 55);