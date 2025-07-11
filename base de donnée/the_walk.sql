-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 20 mai 2024 à 17:00
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
  `pwalk` int(11) NOT NULL DEFAULT '0',
  `etape` tinyint(4) NOT NULL DEFAULT '1',
  `pos_dep` int(11) NOT NULL DEFAULT '200',
  `nb_jour_inscp` int(11) NOT NULL DEFAULT '0',
  `nb_jour_caract` int(11) NOT NULL DEFAULT '0',
  `nb_jour_img` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1 COMMENT='table avatar';

--
-- Déchargement des données de la table `avatar`
--

INSERT INTO `avatar` (`nom`, `mail`, `passe`, `id`, `identifiant`, `erg_date`, `physq`, `intel`, `charis`, `pwalk`, `etape`, `pos_dep`, `nb_jour_inscp`, `nb_jour_caract`, `nb_jour_img`) VALUES
('maurice', 'ducon@gg.ff', '95e146953f4f551afbd70edb44a868e0', 2, '', '16 03 2013', 5, 6, 3, 14, 3, 1200, 0, 0, 0),
('gertrude', 'blibli@ff.com', '95e146953f4f551afbd70edb44a868e0', 6, '', '31 03 2013', 3, 3, 3, 10, 1, 1900, 0, 0, 0),
('bernard', 'pouf@dd.fr', '95e146953f4f551afbd70edb44a868e0', 5, '', '31 03 2013', 5, 4, 6, 15, 3, 2700, 0, 0, 0),
('mimile', 'moi@fr.st', '95e146953f4f551afbd70edb44a868e0', 8, '', '06 04 2013', 5, 3, 5, 13, 3, 3700, 0, 0, 0),
('dudule', 'moi@fr.st', 'c18c17af6a7954a2b09e665f595510d1', 12, '', '11 04 2013', 5, 4, 4, 13, 3, 4000, 0, 0, 0),
('prunelle', 'moi@ducon.fr', '95e146953f4f551afbd70edb44a868e0', 13, '', '18/05/2024', 3, 3, 3, 0, 1, 200, 0, 0, 0),
('pascal', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 24, '', '19/05/2024', 3, 3, 3, 0, 1, 200, 0, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `img_avatar`
--

DROP TABLE IF EXISTS `img_avatar`;
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `img_avatar`
--

INSERT INTO `img_avatar` (`id`, `nom`, `corps`, `tete`, `bouche`, `yeux`, `cheveux`, `pantalon`) VALUES
(3, 'mimile', 10195, 10207, 10028, 10477, 11135, 0),
(4, 'maurice', 10195, 10207, 10027, 10260, 10822, 0),
(10, 'bernard', 10197, 10209, 10011, 10271, 10768, 11991),
(11, 'dudule', 10203, 10215, 10005, 10260, 10738, 11412);

-- --------------------------------------------------------

--
-- Structure de la table `univers_avatar`
--

DROP TABLE IF EXISTS `univers_avatar`;
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
-- Déchargement des données de la table `univers_avatar`
--

INSERT INTO `univers_avatar` (`structure_zonne`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`) VALUES
('placement', 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 16, 0, 0, 0, 20, 21, 0, 0, 0, 0),
('objet', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
