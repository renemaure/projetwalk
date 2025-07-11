-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Sam 13 Avril 2013 à 07:05
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
-- Structure de la table `img_avatar`
--

CREATE TABLE IF NOT EXISTS `img_avatar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` tinytext NOT NULL,
  `corps` int(11) NOT NULL,
  `tete` int(11) NOT NULL,
  `bouche` int(11) NOT NULL,
  `yeux` int(11) NOT NULL,
  `cheveux` int(11) NOT NULL,
  `pantalon` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Contenu de la table `img_avatar`
--

INSERT INTO `img_avatar` (`id`, `nom`, `corps`, `tete`, `bouche`, `yeux`, `cheveux`, `pantalon`) VALUES
(3, 'mimile', 10195, 10207, 10028, 10477, 11135, 0),
(4, 'maurice', 10195, 10207, 10027, 10260, 10822, 0),
(10, 'bernard', 10197, 10209, 10011, 10271, 10768, 11991),
(11, 'dudule', 10203, 10215, 10005, 10260, 10738, 11412);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
