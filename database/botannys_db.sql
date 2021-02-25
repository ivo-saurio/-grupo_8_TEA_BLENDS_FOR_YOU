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
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `size` varchar(45) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_categorias_idx` (`id_categoria`),
  CONSTRAINT `id_categorias` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (6,'Box Small','image.jpeg','Nuestra Box Small contiene Pimienta De Jamaica, Bayas De Enebro, Hibiscus, Anis Estrellado, Flor Lavanda, Cascara De Naranja, y Cuchara Coctelera.\r\nEsta diseñada para aquellos que buscan introducirse en el mundo de la cocteleria, ya que cuenta con un equilibrio perfecto de florales citricos y epeciados\r\n                    ','Small',2300,NULL),(7,'Box Medium','image.jpeg','Nuestra Box Medium contiene Pimienta Negra, Pimienta Rosa, Bayas De Enebro, Clavo De Olor, Anis Estrellado, Hibiscus, Cardamomo, Lavanda, Canela En Rama, Cuchara Coctelera y jigger.\r\nEsta diseñada para aquellos fanaticos de la cocteleria, quienes entendienden que para ser irremplazables, primero deben buscar ser diferentes\r\n                    ','Medium',4200,NULL),(8,'Box Large ','image.jpeg','Nuestra Box Large contiene Pimienta Negra, Pimienta Rosa, Pimienta Verde, Pimienta de Jamaica, Pimienta Blanca, Canela en Rama, Bayas De Enebro, Anis Estrellado, Corteza De Citricos, Rodajas De Citricos, Clavo De Olor, Cardamomo, Hibiscus, Lavanda, Jengibre, Cuchara Coctelera y Jigger.\r\nEntrena los sentidos disfrutando lo exotico, enfrentate a lo desconocido y demuestrale al mundo de que estas hecho.\r\n                    \r\n\r\n                    ','Large ',0,NULL),(9,'Box Tea','image.jpeg','Nuestra Box Tea contiene Té Rooibos, Té Oolong, Té Verde Chino, Té Inglés, Té De Jazmin, Bolsita De Canela Y Manzana, Bolsita De Hibiscus Y Naranja, Bolsita De Ananá y Jengibre, Y Un Infusor.\r\nTé Rooibos, Té Oolong, Té Verde Chino, Té Inglés, Té De Jazmin, Bolsita De Canela Y Manzana, Bolsita De Hibiscus Y Naranja, Bolsita De Ananá y Jengibre, Y Un Infusor.\r\n                    ','Medium',1900,NULL);
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
  `avatar` varchar(100) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `avatar_UNIQUE` (`avatar`),
  KEY `FK_ROLID` (`id_rol`),
  CONSTRAINT `FK_ROLID` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (9,'Maxi','Rawe','05fbca85-6841-49c1-ae62-7ba3a3394984.png','maxirawe@hotmail.com','$2b$12$yn4K0bOZE9x3.0d6Rae2A.3UJ0g73LDAJ8PGdT',NULL),(25,'Ivo','muñoz',NULL,'ivan@gmail.com','$2b$12$VScUQJhYHT7NV0i2Puy2TuAeVn.IK1jH1Q.3fCM62eq/8R.UVxVte',NULL),(27,'pepito','pepitoss',NULL,'pepito@gmail.com','$2b$12$CFLJwIbtRFftqim9aZ9txuZO4/t11ibp0/9ihQiehin6Zl399k3CS',NULL),(28,'ivan','probando',NULL,'ivanprobando@gmail.com','$2b$12$DGj4dBDIPoN5x4y/tMtLM.ls8h4.YU9D8FcVxCJErnf7164seASe6',NULL),(29,'ivan','probandoPROBANDO',NULL,'ivanprobandoPROBANDO@gmail.com','$2b$12$fX.v6LsZ9bUhuEAeQfgtqOImfK5bTcVY28oPXVRwjdU1acXXdXvxC',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-25 20:23:57
