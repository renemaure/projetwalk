-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Dim 19 Mai 2013 à 20:16
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
-- Structure de la table `univers_avatar`
--

CREATE TABLE IF NOT EXISTS `univers_avatar` (
  `structure_zonne` tinytext CHARACTER SET utf8 NOT NULL,
  `c1` int(11) NOT NULL DEFAULT '0',
  `c2` int(11) NOT NULL DEFAULT '0',
  `c3` int(11) NOT NULL DEFAULT '0',
  `c4` int(11) NOT NULL DEFAULT '0',
  `c5` int(11) NOT NULL DEFAULT '0',
  `c6` int(11) NOT NULL DEFAULT '0',
  `c7` int(11) NOT NULL DEFAULT '0',
  `c8` int(11) NOT NULL DEFAULT '0',
  `c9` int(11) NOT NULL DEFAULT '0',
  `c10` int(11) NOT NULL DEFAULT '0',
  `c11` int(11) NOT NULL DEFAULT '0',
  `c12` int(11) NOT NULL DEFAULT '0',
  `c13` int(11) NOT NULL DEFAULT '0',
  `c14` int(11) NOT NULL DEFAULT '0',
  `c15` int(11) NOT NULL DEFAULT '0',
  `c16` int(11) NOT NULL DEFAULT '0',
  `c17` int(11) NOT NULL DEFAULT '0',
  `c18` int(11) NOT NULL DEFAULT '0',
  `c19` int(11) NOT NULL DEFAULT '0',
  `c20` int(11) NOT NULL DEFAULT '0',
  `c21` int(11) NOT NULL DEFAULT '0',
  `c22` int(11) NOT NULL DEFAULT '0',
  `c23` int(11) NOT NULL DEFAULT '0',
  `c24` int(11) NOT NULL DEFAULT '0',
  `c25` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `univers_avatar`
--

INSERT INTO `univers_avatar` (`structure_zonne`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`) VALUES
('placement', 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 16, 0, 0, 0, 20, 21, 0, 0, 0, 0),
('objet', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
