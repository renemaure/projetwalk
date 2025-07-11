-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : collecpcmit2023.mysql.db
-- Généré le : ven. 11 juil. 2025 à 18:59
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
-- Structure de la table `donnees_monde`
--

CREATE TABLE `donnees_monde` (
  `id` int NOT NULL,
  `ans` int NOT NULL,
  `mois` int NOT NULL,
  `jours` int NOT NULL,
  `heurs` int NOT NULL,
  `minutes` int NOT NULL,
  `secondes` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `donnees_monde`
--

INSERT INTO `donnees_monde` (`id`, `ans`, `mois`, `jours`, `heurs`, `minutes`, `secondes`) VALUES
(1, 12, 2, 23, 17, 50, 50);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `donnees_monde`
--
ALTER TABLE `donnees_monde`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `donnees_monde`
--
ALTER TABLE `donnees_monde`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
