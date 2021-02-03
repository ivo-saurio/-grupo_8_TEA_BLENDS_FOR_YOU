-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: botannys_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP DATABASE IF EXISTS botannys_db;
CREATE DATABASE botannys_db;
USE botannys_db;


DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'gin'),(2,'tea');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(45) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `FK_CATEGORIASID` (`id_categoria`),
  CONSTRAINT `FK_CATEGORIASID` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `tipo_de_rol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'usuario'),(9,'administrador');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `avatar_UNIQUE` (`avatar`),
  KEY `FK_ROLID` (`id_rol`),
  CONSTRAINT `FK_ROLID` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (9,'Maxi','Rawe','05fbca85-6841-49c1-ae62-7ba3a3394984.png','maxirawe@hotmail.com','$2b$12$yn4K0bOZE9x3.0d6Rae2A.3UJ0g73LDAJ8PGdT',NULL),(10,'Bob','Esponja','1a23fa7f-3263-4c3d-85e5-5115e58c36f1.png','bob@gmail.com','$2b$12$9tGpO.MslE..Zq7YMXn7w.85/722p1wri2sJgv',NULL),(11,'Batman','Rawe','411db55a-0c59-4b12-8a3c-b8fac214049e.jpg','batman@gmail.com','$2b$12$rE4iwVuLSxyxhTVeOsZwAuagGuQNVJ7qx.0M/j',NULL),(12,'barman','tevez','9340c0e3-7533-4198-900a-833c42603987.jpg','batmaan@gmail.com','$2b$12$31CEE7qgfTSVVASSsCcpdu6puPJXby9dEbze1k',NULL),(13,'barman','tevez','40fad4d2-a348-40eb-b9a2-e8e9b02a432b.jpg','batmaaan@gmail.com','$2b$12$3sJ0WjiBA.z9NIUN4ay/euHlQ.gk8fwBmRRVea',NULL),(14,'Maxi Rawe','jorgito','b694c430-db3d-401e-8a8f-93583ca8efd6.jpeg','maxirawee@hotmail.com','$2b$12$39IUmmBj7bOOtuuecwLVMO4Hwfb/6azIpoGLWD',NULL),(15,'hola','prueba','e9d08cbc-e55e-4239-bc9f-c38a62c068af.jpg','prueba@hotmail.com','$2b$12$TCaf8Y1Sdn4XcqJh7btCcOd5vmDvn5ie/6iRcZ',NULL),(16,'prueba','dos','f9b79cf4-7d8a-4514-ad26-8847f6b003a1.jpg','prueba2@gmail.com','$2b$12$6B5FwIpnJ9K3bBCdkbUN5eqS//a76xIcmhqtFs',NULL),(17,'Masi','dos','b15d2f95-16f0-4393-aa7d-0fab5ac8bf43.png','masi@gmail.com','$2b$12$0rx1VUM5uZ3xKGGxndOAYeFLYMQl2nwd0Qp9Ad',NULL),(19,'nombre','apellido','f21bbc1e-bec5-4013-852f-bbadfffd00fb.png','email@email.com','$2b$12$Cl2xtbBv2e8AFtc2ijDGMeO02PWp6iel3DWVMU',NULL),(20,'jajajja','ajajajaj','e3ce10e7-b2bf-40cc-8355-8ee58738bfcf.png','asinfaos@gdlksnd.com','$2b$12$w7kZNmDXzF2Cmwy6AbCKhOnXWEkE.INihsRrVR',NULL),(21,'carlos','tevez','1cbce7f1-d8b4-4a5d-a7d3-d56d8cf01d11.png','carlitos@gmail.com','$2b$12$6xH/XfZ4yR.4iK.kBQYXNuDLJfWwoW5Mo20zLj',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'botannys_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-02 21:41:31
