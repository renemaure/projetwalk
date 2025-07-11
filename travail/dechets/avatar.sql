-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Lun 01 Avril 2013 à 14:27
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `collectif_swart`
--

-- --------------------------------------------------------

--
-- Structure de la table `avatar`
--

CREATE TABLE IF NOT EXISTS `avatar` (
  `nom` tinytext CHARACTER SET utf8 NOT NULL COMMENT 'nom de l''avatar',
  `mail` tinytext CHARACTER SET utf8 NOT NULL COMMENT 'mail d''enregistrement',
  `passe` mediumtext CHARACTER SET utf8 NOT NULL COMMENT 'mot de passe',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'cle',
  `date` tinytext CHARACTER SET utf8 NOT NULL COMMENT 'date création',
  `physique` int(11) NOT NULL,
  `intellect` int(11) NOT NULL,
  `charisme` int(11) NOT NULL,
  `pwalk` int(11) NOT NULL,
  `final` tinyint(4) NOT NULL DEFAULT '0',
  `image` tinytext CHARACTER SET utf8 NOT NULL COMMENT 'image de l''avatar',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COMMENT='table avatar' AUTO_INCREMENT=8 ;

--
-- Contenu de la table `avatar`
--

INSERT INTO `avatar` (`nom`, `mail`, `passe`, `id`, `date`, `physique`, `intellect`, `charisme`, `pwalk`, `final`, `image`) VALUES
('conceptor', 'grouchomarx7482@yahoo.fr', '925aa8f459068d2bd3823e959d086ba7', 1, '09 03 2013', 0, 0, 0, 0, 0, ''),
('maurice', 'ducon@gg.ff', '95e146953f4f551afbd70edb44a868e0', 2, '16 03 2013', 0, 0, 0, 0, 0, ''),
('gertrude', 'blibli@ff.com', '95e146953f4f551afbd70edb44a868e0', 6, '31 03 2013', 0, 0, 0, 0, 0, ''),
('bernard', 'pouf@dd.fr', '95e146953f4f551afbd70edb44a868e0', 5, '31 03 2013', 0, 0, 0, 0, 0, ''),
('la denrée', 'moi@ff.fr', '3dc6862aaced087142142587cba2123e', 7, '01 04 2013', 0, 0, 0, 0, 0, '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
