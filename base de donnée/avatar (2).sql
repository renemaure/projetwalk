-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : collecpcmit2023.mysql.db
-- Généré le : ven. 11 juil. 2025 à 18:58
-- Version du serveur : 8.0.42-33
-- Version de PHP : 8.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `collecpcmit2023`
--

-- --------------------------------------------------------

--
-- Structure de la table `avatar`
--

CREATE TABLE `avatar` (
  `nom` tinytext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'nom de l''avatar',
  `mail` tinytext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'mail d''enregistrement',
  `passe` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'mot de passe',
  `id` int NOT NULL COMMENT 'cle',
  `identifiant` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'identifiant unique',
  `erg_date` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'date de création',
  `physq` int NOT NULL DEFAULT '3',
  `intel` int NOT NULL DEFAULT '3',
  `charis` int NOT NULL DEFAULT '3',
  `vitalite` int NOT NULL DEFAULT '0',
  `confiance` int NOT NULL DEFAULT '0',
  `beaute` int NOT NULL DEFAULT '0',
  `age` int NOT NULL DEFAULT '5',
  `notoriete` int NOT NULL,
  `pwalk` int NOT NULL DEFAULT '0',
  `etape` tinyint NOT NULL DEFAULT '1',
  `pos_dep` int NOT NULL DEFAULT '200',
  `nb_jour_inscp` int NOT NULL DEFAULT '0',
  `nb_jour_caract` int NOT NULL DEFAULT '0',
  `nb_jour_img` int NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='table avatar';

--
-- Déchargement des données de la table `avatar`
--

INSERT INTO `avatar` (`nom`, `mail`, `passe`, `id`, `identifiant`, `erg_date`, `physq`, `intel`, `charis`, `vitalite`, `confiance`, `beaute`, `age`, `notoriete`, `pwalk`, `etape`, `pos_dep`, `nb_jour_inscp`, `nb_jour_caract`, `nb_jour_img`) VALUES
('maurice', 'ducon@gg.ff', '95e146953f4f551afbd70edb44a868e0', 2, '', '16/03/2023', 5, 6, 3, 8, 9, 11, 11, 0, 14, 3, 2600, 0, 0, 0),
('gertrude', 'blibli@ff.com', '95e146953f4f551afbd70edb44a868e0', 6, '', '31 03 2013', 3, 3, 3, 6, 6, 6, 0, 0, 14, 2, 1900, 0, 0, 0),
('bernard', 'pouf@dd.fr', '95e146953f4f551afbd70edb44a868e0', 5, '', '31 03 2013', 5, 4, 6, 10, 11, 10, 0, 0, 15, 3, 3043, 0, 0, 0),
('mimile', 'moi@fr.st', '95e146953f4f551afbd70edb44a868e0', 8, '', '06 04 2013', 5, 3, 5, 8, 10, 8, 0, 0, 13, 3, 3700, 0, 0, 0),
('dudule', 'moi@fr.st', '95e146953f4f551afbd70edb44a868e0', 12, '', '11 04 2013', 5, 4, 4, 9, 9, 6, 0, 0, 13, 3, 3525, 0, 0, 0),
('prunelle', 'moi@ducon.fr', '95e146953f4f551afbd70edb44a868e0', 13, '', '18/05/2024', 3, 3, 3, 6, 6, 6, 0, 0, 0, 1, 200, 0, 0, 0),
('pascal', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 24, '', '19/05/2024', 4, 3, 5, 10, 9, 8, 0, 0, 12, 2, 200, 0, 0, 0),
('vincent', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 32, '', '04/08/2024', 3, 3, 3, 6, 6, 6, 0, 0, 14, 2, 200, 0, 0, 0),
('lolo', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 33, '', '20/06/2025', 3, 3, 3, 0, 0, 0, 5, 0, 14, 2, 200, 0, 0, 0),
('lu', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 34, '', '20/06/2025', 3, 3, 3, 0, 0, 0, 5, 0, 14, 2, 200, 0, 0, 0),
('jean luc', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 35, '', '26/06/2025', 3, 3, 3, 0, 0, 0, 5, 0, 0, 1, 200, 0, 0, 0),
('wilfrid', 'infos@reperechoppe89.com', '95e146953f4f551afbd70edb44a868e0', 36, '', '29/06/2025', 3, 3, 3, 0, 0, 0, 5, 0, 0, 1, 200, 0, 0, 0),
('zombie223', 'adc7739ebb@emaily.pro', '752a998b622eb9cdd14eb996612575ab', 37, '', '11/07/2025', 3, 3, 3, 0, 0, 0, 5, 0, 0, 3, 200, 0, 0, 0),
('afdssafdssafdssafdssafdssafdssafdssafdssafdssafdssafdss', 'adc7739ebb@emaily.pro', '', 48, '', '11/07/2025', 3, 3, 3, 0, 0, 0, 5, 0, 0, 1, 200, 0, 0, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `avatar`
--
ALTER TABLE `avatar`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT 'cle', AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
