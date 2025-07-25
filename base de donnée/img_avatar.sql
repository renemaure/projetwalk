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
-- Structure de la table `img_avatar`
--

CREATE TABLE `img_avatar` (
  `id` int NOT NULL,
  `nom` tinytext NOT NULL,
  `corps` int NOT NULL,
  `tete` int NOT NULL,
  `bouche` int NOT NULL,
  `yeux` int NOT NULL,
  `cheveux` int NOT NULL,
  `pantalon` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `img_avatar`
--

INSERT INTO `img_avatar` (`id`, `nom`, `corps`, `tete`, `bouche`, `yeux`, `cheveux`, `pantalon`) VALUES
(3, 'mimile', 10195, 10207, 10028, 10477, 11135, 0),
(4, 'maurice', 10195, 10207, 10027, 10260, 10822, 0),
(10, 'bernard', 10197, 10209, 10011, 10271, 10768, 11991),
(11, 'dudule', 10203, 10215, 10005, 10260, 10738, 11412);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `img_avatar`
--
ALTER TABLE `img_avatar`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `img_avatar`
--
ALTER TABLE `img_avatar`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
