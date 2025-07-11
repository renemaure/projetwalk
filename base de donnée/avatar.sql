-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 30 mars 2021 à 21:37
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `collectif_swart`
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
  `date` tinytext CHARACTER SET utf8 NOT NULL COMMENT 'date création',
  `physq` int(11) NOT NULL DEFAULT '3',
  `intel` int(11) NOT NULL DEFAULT '3',
  `charis` int(11) NOT NULL DEFAULT '3',
  `pwalk` int(11) NOT NULL DEFAULT '0',
  `etape` tinyint(4) NOT NULL DEFAULT '1',
  `pos_dep` int(11) NOT NULL DEFAULT '100',
  `nb_jour_inscp` int(11) NOT NULL DEFAULT '0',
  `nb_jour_caract` int(11) NOT NULL DEFAULT '0',
  `nb_jour_img` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COMMENT='table avatar';

--
-- Déchargement des données de la table `avatar`
--

INSERT INTO `avatar` (`nom`, `mail`, `passe`, `id`, `date`, `physq`, `intel`, `charis`, `pwalk`, `etape`, `pos_dep`, `nb_jour_inscp`, `nb_jour_caract`, `nb_jour_img`) VALUES
('maurice', 'ducon@gg.ff', '95e146953f4f551afbd70edb44a868e0', 2, '16 03 2013', 5, 6, 3, 14, 3, 1200, 0, 0, 0),
('gertrude', 'blibli@ff.com', '95e146953f4f551afbd70edb44a868e0', 6, '31 03 2013', 3, 3, 3, 10, 1, 1900, 0, 0, 0),
('bernard', 'pouf@dd.fr', '95e146953f4f551afbd70edb44a868e0', 5, '31 03 2013', 5, 4, 6, 15, 3, 2700, 0, 0, 0),
('mimile', 'moi@fr.st', '95e146953f4f551afbd70edb44a868e0', 8, '06 04 2013', 5, 3, 5, 13, 3, 3700, 0, 0, 0),
('dudule', 'moi@fr.st', 'c18c17af6a7954a2b09e665f595510d1', 12, '11 04 2013', 5, 4, 4, 13, 3, 4000, 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
