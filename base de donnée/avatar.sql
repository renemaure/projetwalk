-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 14 juil. 2025 à 18:47
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `the_walk`
--

-- --------------------------------------------------------

--
-- Structure de la table `avatar`
--

DROP TABLE IF EXISTS `avatar`;
CREATE TABLE IF NOT EXISTS `avatar` (
  `nom` tinytext CHARACTER SET utf8 NOT NULL COMMENT 'nom de l''avatar',
  `mail` tinytext CHARACTER SET utf8 NOT NULL COMMENT 'mail d''enregistrement',
  `passe` mediumtext CHARACTER SET utf8 NOT NULL COMMENT 'mot de passe',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'cle',
  `identifiant` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT 'identifiant unique',
  `erg_date` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT 'date de création',
  `physq` int(11) NOT NULL DEFAULT '3',
  `intel` int(11) NOT NULL DEFAULT '3',
  `charis` int(11) NOT NULL DEFAULT '3',
  `vitalite` int(11) NOT NULL DEFAULT '0',
  `confiance` int(11) NOT NULL DEFAULT '0',
  `beaute` int(11) NOT NULL DEFAULT '0',
  `age` int(11) NOT NULL DEFAULT '5',
  `notoriete` int(11) NOT NULL DEFAULT '0',
  `pwalk` int(11) NOT NULL DEFAULT '0',
  `etape` tinyint(4) NOT NULL DEFAULT '1',
  `pos_dep` int(11) NOT NULL DEFAULT '200',
  `ancien_pos` int(11) NOT NULL DEFAULT '0',
  `nb_jour_inscp` int(11) NOT NULL DEFAULT '0',
  `nb_jour_caract` int(11) NOT NULL DEFAULT '0',
  `nb_jour_img` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1 COMMENT='table avatar';

--
-- Déchargement des données de la table `avatar`
--

INSERT INTO `avatar` (`nom`, `mail`, `passe`, `id`, `identifiant`, `erg_date`, `physq`, `intel`, `charis`, `vitalite`, `confiance`, `beaute`, `age`, `notoriete`, `pwalk`, `etape`, `pos_dep`, `ancien_pos`, `nb_jour_inscp`, `nb_jour_caract`, `nb_jour_img`) VALUES
('maurice', 'ducon@gg.ff', '95e146953f4f551afbd70edb44a868e0', 2, '', '16/03/2023', 5, 6, 3, 8, 9, 11, 11, 0, 14, 3, 2554, 0, 0, 0, 0),
('gertrude', 'blibli@ff.com', '95e146953f4f551afbd70edb44a868e0', 6, '', '31 03 2013', 3, 3, 3, 6, 6, 6, 0, 0, 14, 2, 1900, 0, 0, 0, 0),
('bernard', 'pouf@dd.fr', '95e146953f4f551afbd70edb44a868e0', 5, '', '31 03 2013', 5, 4, 6, 10, 11, 10, 0, 0, 15, 3, 2836, 0, 0, 0, 0),
('mimile', 'moi@fr.st', '95e146953f4f551afbd70edb44a868e0', 8, '', '06 04 2013', 5, 3, 5, 8, 10, 8, 0, 0, 13, 3, 3700, 0, 0, 0, 0),
('dudule', 'moi@fr.st', 'c18c17af6a7954a2b09e665f595510d1', 12, '', '11 04 2013', 5, 4, 4, 9, 9, 6, 0, 0, 13, 3, 4000, 0, 0, 0, 0),
('prunelle', 'moi@ducon.fr', '95e146953f4f551afbd70edb44a868e0', 13, '', '18/05/2024', 3, 3, 3, 6, 6, 6, 0, 0, 0, 1, 200, 0, 0, 0, 0),
('pascal', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 24, '', '19/05/2024', 4, 3, 5, 10, 9, 8, 0, 0, 12, 3, 3534, 0, 0, 0, 0),
('vincent', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 32, '', '04/08/2024', 3, 3, 3, 6, 6, 6, 0, 0, 14, 2, 200, 0, 0, 0, 0),
('lolo', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 33, '', '20/06/2025', 3, 3, 3, 0, 0, 0, 5, 0, 14, 2, 200, 0, 0, 0, 0),
('lu', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 34, '', '20/06/2025', 3, 3, 3, 0, 0, 0, 5, 0, 14, 2, 200, 0, 0, 0, 0),
('jean luc', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 35, '', '26/06/2025', 3, 3, 3, 0, 0, 0, 5, 0, 0, 1, 200, 0, 0, 0, 0),
('jeanjean', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 36, '', '14/07/2025', 3, 3, 3, 0, 0, 0, 5, 0, 0, 1, 200, 0, 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
