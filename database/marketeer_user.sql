-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: marketeer
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jana','2811'),(3,'omar','scrypt:32768:8:1$MzrZh6oIOH4ECsK2$606e873ab4ff21947e62b43971b7600236dd2473423a6654af655dbbad0468cdb77cd97e16b3505d0858f1ae2a89960a1538c7addddbaac8a4acd1b5026c23ce'),(4,'nahed','scrypt:32768:8:1$dfl9tFr6TwYR2w2L$0059a2533e11eaa7910eb4c0db8eedafb160d2bb3778136f5c8360e57d92909770329c6ebeff1ad1ff57a6e1a980a2d2711ccf45fedf6b00b76ac85046d979c0'),(5,'maged','scrypt:32768:8:1$ugjsi72K1H8OH1rB$bf5111d2d92d76248a6c99a34c317eab117575530d0587fc1234b56c0dd2b55cf6d175beaa41e20a52140bfbd46a7615e1cdb89097fb93454d89bbde5596df96'),(6,'bahaa','scrypt:32768:8:1$flo4hY4lZTeXoZRA$54deeb4f2cc798579dbd9943da1d058f74cfe9cac140029c5544043d2f96dacd013c10a4532033b2569bc63abf67eb82ad4394a67674fdd1b04f9a8cc7cdea6c'),(7,'soltan','scrypt:32768:8:1$7LuSWbnW8oAgLULZ$fdff8f48b32375810ce05e44a4749c9e818d1c402e9fbdadc29abf1a4d219158fb873d4d819a987a3fca1e03f0ba33eb4ea00b79c6f1bef15c4625bc19b75b40'),(8,'mai','scrypt:32768:8:1$9ycq3cxYoOcobh9Z$92f481df2f7284e0c88b0cf06fcfd096b7b88377f53c2a8929d16c84c250cbae10cca3c99703c84d8aeb36e821c300f3703582adb56b5066fe1a4a98aef8339c'),(9,'toka','scrypt:32768:8:1$JSimvpjwehmlCsZf$e9e3cbab76ba79d2d4855bb05784ee04640ae52e5042065e022909b9a5138d080451fb9640048b9709d9b91ae6e7a4129b56c449abf5f4891c04cd17ed05c702'),(10,'tarek','scrypt:32768:8:1$stc4A17eOn3dihP3$0908cac15e475e737df598a6992dc7d22efc95acb7f0103d8ce3bb0b8ef95d470ed155581f46be47cf24001e46d9951217eac8aeae95d29361ac7b88559c7e32'),(11,'','scrypt:32768:8:1$saGOt93js4ly0Mk7$db7def194589e3a15f0a2b75bde536958db193c42fe838726a77f345b7b9c95b1e5cafd39a5c10f02e2b52c7b9b3422378fed155f7a4d02fe9cb54fb129b0434'),(12,'jenny','scrypt:32768:8:1$MgMm7VfJEKmret09$a28fcf5faf6ec55bda4dc85209add9889a28c742a1a4baf2eac3885fb8547683ef00bc3f3d35656080d97f9b016297128492b520414d89284f8134dfcd2c7af9'),(13,'magda','scrypt:32768:8:1$vubqDTJK5jDOo40U$c292064f447fdf0fca1f9e4cd587951aaf861bf1dac6c6a0ed710a3ea9340209d53b8e7e65d9f434c17025b71f98a2638055c91e7b3aadb191cac2fcd40b2e39');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-24 13:46:01
