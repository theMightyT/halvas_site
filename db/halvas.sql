-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: internal-db.s45380.gridserver.com
-- Generation Time: Jun 20, 2018 at 09:47 AM
-- Server version: 5.6.31-77.0
-- PHP Version: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db45380_halvas01`
--

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE IF NOT EXISTS `portfolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(30) NOT NULL,
  `heading` varchar(200) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `category` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `path`, `heading`, `description`, `category`) VALUES
(1, 'lg_ergo', '3M Ergonomic Pain Solutions App', 'Developed an ergnomic pain point application for 3M. Using supplied design, the development involved interactive, dynamic pain point selection which would be used to determine the best available ergonomic products for the user. Video promos were part of the package, as well as links to various parts of the 3M ergo site.', ''),
(2, 'lg-shoppers', 'Shoppers Beauty Book', 'We developed the Winter / Christmas interactive Shoppers Beauty Book. Features include dynamic served, regionally aware audio and video applications. Personalized Wish List and e-commerce functionality added on.', ''),
(3, 'lg-iv', 'LHSC In Vitro Interactive Educational Program', 'We used audio, video and detailed scripts to create an interactive educational program for LHSC. The goal was to educate prospective embryo transplant candidates about the issues surrounding their choices, and help guide them to the best decision using interactive tools.', ''),
(4, 'lg_nelson', 'Nelson Aggregates Delivery Web App', 'Working in partnership with Crux Studios, we designed and developed an interactive web application for Nelson Aggregates. Features include an interactive map with routes and waypoints; the app focuses on dynamic load / delivery rate calculations.', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
