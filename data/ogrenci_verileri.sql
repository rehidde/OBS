-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: obs1-odreen271-2087.g.aivencloud.com    Database: defaultdb
-- ------------------------------------------------------
-- Server version	8.0.35

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '61a5e0f0-e002-11f0-b853-26a70f2b42be:1-27,
f7f7dfda-e24a-11f0-a20c-16313b320849:1-283';

--
-- Table structure for table `akademisyen`
--

DROP TABLE IF EXISTS `akademisyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `akademisyen` (
  `id` int NOT NULL,
  `ad` varchar(50) DEFAULT NULL,
  `soyad` varchar(50) DEFAULT NULL,
  `unvan` varchar(50) DEFAULT NULL,
  `foto_url` varchar(255) DEFAULT NULL,
  `kullanici_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `kullanici_id` (`kullanici_id`),
  CONSTRAINT `akademisyen_ibfk_1` FOREIGN KEY (`kullanici_id`) REFERENCES `kullanici` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `akademisyen`
--

LOCK TABLES `akademisyen` WRITE;
/*!40000 ALTER TABLE `akademisyen` DISABLE KEYS */;
INSERT INTO `akademisyen` VALUES (1,'Ahmet','Yılmaz','Prof. Dr.','/img/default.jpg','101'),
(2,'Ayşe','Kaya','Doç. Dr.','/img/default.jpg','102'),
(3,'Mehmet','Demir','Dr. Öğr. Üyesi','/img/default.jpg','103'),
(4,'Zeynep','Çelik','Dr. Öğr. Üyesi','/img/default.jpg','104'),
(5,'Ali','Vural','Öğr. Gör.','/img/default.jpg','105'),
(6,'Elif','Sönmez','Öğr. Gör.','/img/default.jpg','106'),
(7,'Mustafa','Şahin','Prof. Dr.','/img/default.jpg','107'),
(8,'Burcu','Ekinci','Doç. Dr.','/img/default.jpg','108'),
(9,'Caner','Öz','Dr. Öğr. Üyesi','/img/default.jpg','109'),
(10,'Derya','Kurt','Dr. Öğr. Üyesi','/img/default.jpg','110'),
(11,'Fatih','Arslan','Öğr. Gör.','/img/default.jpg','111'),
(12,'Gökhan','Yıldız','Dr. Öğr. Üyesi','/img/default.jpg','112');
/*!40000 ALTER TABLE `akademisyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ders_programi`
--

DROP TABLE IF EXISTS `ders_programi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ders_programi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ders_id` int NOT NULL,
  `gun` varchar(20) NOT NULL,
  `baslangic_saati` varchar(5) NOT NULL,
  `bitis_saati` varchar(5) NOT NULL,
  `derslik` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ders_id` (`ders_id`),
  CONSTRAINT `ders_programi_ibfk_1` FOREIGN KEY (`ders_id`) REFERENCES `dersler` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ders_programi`
--

LOCK TABLES `ders_programi` WRITE;
/*!40000 ALTER TABLE `ders_programi` DISABLE KEYS */;
INSERT INTO `ders_programi` VALUES (1,1,'Pazartesi','09:00','10:50','D-101'),(2,1,'Çarşamba','13:00','14:50','Lab-1'),(3,2,'Salı','10:00','12:50','B-205'),(4,9,'Cuma','14:00','16:50','Online');
/*!40000 ALTER TABLE `ders_programi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dersler`
--

DROP TABLE IF EXISTS `dersler`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dersler` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ad` varchar(100) DEFAULT NULL,
  `kredi` int DEFAULT NULL,
  `akts` int DEFAULT NULL,
  `ders_kodu` varchar(20) DEFAULT NULL,
  `tul` varchar(10) DEFAULT NULL,
  `zorunlu_sec` varchar(20) DEFAULT NULL,
  `ogretim_sekli` varchar(20) DEFAULT NULL,
  `yariyil` int DEFAULT NULL,
  `aciklama` text,
  `sinif` int DEFAULT NULL,
  `akademisyen_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `akademisyen_id` (`akademisyen_id`),
  CONSTRAINT `dersler_ibfk_1` FOREIGN KEY (`akademisyen_id`) REFERENCES `akademisyen` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dersler`
--

LOCK TABLES `dersler` WRITE;
/*!40000 ALTER TABLE `dersler` DISABLE KEYS */;
INSERT INTO `dersler` VALUES (1,'Fizik I',3,5,'251111101','3+0+0','Zorunlu','Yüz Yüze',1,NULL,1,1),
(2,'Programlamaya Giriş',4,8,'251111106','4+0+0','Zorunlu','Yüz Yüze',1,NULL,1,3),
(3,'Bilim ve Mühendislik İçin Analiz I',4,6,'251111107','3+1+0','Zorunlu','Yüz Yüze',1,NULL,1,2),
(4,'Bilgisayar Mühendisliği Kavramları',3,5,'251111108','3+0+0','Zorunlu','Yüz Yüze',1,NULL,1,10)
(5,'Yabancı Dil I: İngilizce',2,2,'431211301','2+0+0','Zorunlu','Yüz Yüze',1,NULL,1,6),
(6,'Atatürk İlkeleri ve İnkılap Tarihi I',2,2,'740011301','2+0+0','Zorunlu','Yüz Yüze',1,NULL,1,5),
(7,'Türk Dili I',2,2,'750011301','2+0+0','Zorunlu','Yüz Yüze',1,NULL,1,5),
(8,'Fizik II',3,5,'251112101','3+0+0','Zorunlu','Yüz Yüze',2,NULL,1,1),
(9,'Web Teknolojileri',3,4,'251112103','3+0+0','Zorunlu','Yüz Yüze',2,NULL,1,4),
(10,'Ayrık İşlemsel Yapılar',3,4,'251112105','3+0+0','Zorunlu','Yüz Yüze',2,NULL,1,9),
(11,'Nesneye Dayalı Programlama',4,5,'251112106','4+0+0','Zorunlu','Yüz Yüze',2,NULL,1,3),
(12,'Bilim ve Mühendislik İçin Analiz II',3,6,'251112107','3+0+0','Zorunlu','Yüz Yüze',2,NULL,1,2),
(13,'Yabancı Dil II: İngilizce',2,2,'431212301','2+0+0','Zorunlu','Yüz Yüze',2,NULL,1,6),
(14,'Atatürk İlkeleri ve İnkılap Tarihi II',2,2,'740012301','2+0+0','Zorunlu','Yüz Yüze',2,NULL,1,5),
(15,'Türk Dili II',2,2,'750012301','2+0+0','Zorunlu','Yüz Yüze',2,NULL,1,5),
(16,'Ahilik Kültürü ve Meslek Ahlakı',2,2,'235122312','2+0+0','Zorunlu','Yüz Yüze',3,NULL,2,5),
(17,'Lineer Cebir',2,3,'251121101','2+0+0','Zorunlu','Yüz Yüze',3,NULL,2,2),
(18,'Devre Analizi',5,5,'251121102','3+2+0','Zorunlu','Yüz Yüze',3,NULL,2,7),
(19,'Mantık Tasarımı',5,6,'251121103','3+2+0','Zorunlu','Yüz Yüze',3,NULL,2,8),
(20,'Web Programlama',4,6,'251121104','4+0+0','Zorunlu','Yüz Yüze',3,NULL,2,4),
(21,'Veri Yapıları',3,5,'251121105','3+0+0','Zorunlu','Yüz Yüze',3,NULL,2,9),
(22,'İş Sağlığı ve Güvenliği I',2,3,'251121107','2+0+0','Zorunlu','Yüz Yüze',3,NULL,2,11),
(23,'Bilgisayar Mimarisi',3,5,'251122103','3+0+0','Zorunlu','Yüz Yüze',4,NULL,2,8),
(24,'Programlama Dillerinin Prensipleri',3,5,'251122104','3+0+0','Zorunlu','Yüz Yüze',4,NULL,2,3),
(25,'Sayısal Hesaplama',3,5,'251122106','3+0+0','Zorunlu','Yüz Yüze',4,NULL,2,12),
(26,'Diferansiyel Denklemler',4,6,'251122107','4+0+0','Zorunlu','Yüz Yüze',4,NULL,2,12),
(27,'Elektronik Devreler ve Laboratuvarı',4,6,'251122108','3+1+0','Zorunlu','Yüz Yüze',4,NULL,2,7),
(28,'İş Sağlığı ve Güvenliği II',2,3,'251122109','2+0+0','Zorunlu','Yüz Yüze',4,NULL,2,11),
(29,'Biçimsel Diller ve Soyut Makineler',3,3,'251131101','3+0+0','Zorunlu','Yüz Yüze',5,NULL,3,9),
(30,'Veritabanı Yönetim Sistemleri',3,4,'251131102','3+0+0','Zorunlu','Yüz Yüze',5,NULL,3,4),
(31,'Veri İletişimi',3,4,'251131103','3+0+0','Zorunlu','Yüz Yüze',5,NULL,3,7),
(32,'İşletim Sistemleri',3,4,'251131104','3+0+0','Zorunlu','Yüz Yüze',5,NULL,3,10),
(33,'Staj I',0,5,'251131501','0+0+0','Zorunlu','Yüz Yüze',5,NULL,3,NULL),
(34,'Seçmeli Ders I',8,10,'251131SEÇ','6+2+0','Seçmeli','Yüz Yüze',5,NULL,3,NULL),
(35,'Bilgisayar Ağları',3,5,'251132102','3+0+0','Zorunlu','Yüz Yüze',6,NULL,3,10),
(36,'Olasılık ve İstatistik',3,3,'251132104','3+0+0','Zorunlu','Yüz Yüze',6,NULL,3,2),
(37,'Algoritma Analizi ve Tasarımı',4,4,'251132105','3+1+0','Zorunlu','Yüz Yüze',6,NULL,3,9),
(38,'Mikroişlemcili Sistemler ve Laboratuvarları',4,5,'251132106','3+1+0','Zorunlu','Yüz Yüze',6,NULL,3,8),
(39,'Ortak Seçmeli Ders I',2,3,'OSD','2+0+0','Seçmeli','Yüz Yüze',6,NULL,3,NULL),
(40,'Seçmeli Ders II',8,10,'251132SEÇ','6+2+0','Seçmeli','Yüz Yüze',6,NULL,3,NULL),
(41,'Bilimsel Araştırma Yöntemleri',2,2,'251141101','2+0+0','Zorunlu','Yüz Yüze',7,NULL,4,11),
(42,'Araştırma Projesi I',3,2,'251141102','1+2+0','Zorunlu','Yüz Yüze',7,NULL,4,NULL),
(43,'Yapay Zekâ',4,4,'251141103','2+2+0','Zorunlu','Yüz Yüze',7,NULL,4,12),
(44,'Staj II',0,5,'251141501','0+0+0','Zorunlu','Yüz Yüze',7,NULL,4,NULL),
(45,'Seçmeli Ders III',9,10,'251141SEÇ','9+0+0','Seçmeli','Yüz Yüze',7,NULL,4,NULL),
(46,'Araştırma Projesi II',3,5,'251142101','1+2+0','Zorunlu','Yüz Yüze',8,NULL,4,NULL),
(47,'Seçmeli Ders IV',20,25,'251142SEÇ','15+5+0','Seçmeli','Yüz Yüze',8,NULL,4,NULL),
(48,'ömer ve bilimleri',3,5,'24256666',NULL,NULL,NULL,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `dersler` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donem`
--

DROP TABLE IF EXISTS `donem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donem` (
  `id` int NOT NULL,
  `ad` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donem`
--

LOCK TABLES `donem` WRITE;
/*!40000 ALTER TABLE `donem` DISABLE KEYS */;
/*!40000 ALTER TABLE `donem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `duyurular`
--

DROP TABLE IF EXISTS `duyurular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `duyurular` (
  `id` int NOT NULL AUTO_INCREMENT,
  `baslik` varchar(255) NOT NULL,
  `icerik` text NOT NULL,
  `tarih` datetime DEFAULT NULL,
  `ders_id` int DEFAULT NULL,
  `akademisyen_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `akademisyen_id` (`akademisyen_id`),
  KEY `ders_id` (`ders_id`),
  CONSTRAINT `duyurular_ibfk_5` FOREIGN KEY (`ders_id`) REFERENCES `dersler` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `duyurular`
--

LOCK TABLES `duyurular` WRITE;
/*!40000 ALTER TABLE `duyurular` DISABLE KEYS */;
INSERT INTO `duyurular` VALUES (1,'Deneme','şalgam içmeyi severim','2025-12-27 15:44:31',NULL,6),(2,'Deneme','deneme1','2025-12-27 15:56:55',NULL,7),(3,'Deneme','hhfghhchgchg','2025-12-27 17:31:30',NULL,NULL);
/*!40000 ALTER TABLE `duyurular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kullanici`
--

DROP TABLE IF EXISTS `kullanici`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kullanici` (
  `id` varchar(10) NOT NULL,
  `rol` varchar(20) DEFAULT NULL,
  `numara` varchar(10) DEFAULT NULL,
  `sifre` varchar(10) DEFAULT NULL,
  `ad` varchar(50) DEFAULT NULL,
  `soyad` varchar(50) DEFAULT NULL,
  `foto_url` varchar(255) DEFAULT NULL,
  `tc` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kullanici`
--

LOCK TABLES `kullanici` WRITE;
/*!40000 ALTER TABLE `kullanici` DISABLE KEYS */;
INSERT INTO `kullanici` VALUES ('101','akademisyen','101','123','Ahmet','Yılmaz','/img/default.jpg','11111111111'),
('102','akademisyen','102','123','Ayşe','Kaya','/img/default.jpg','11111111111'),
('103','akademisyen','103','123','Mehmet','Demir','/img/default.jpg','11111111111'),
('104','akademisyen','104','123','Zeynep','Çelik','/img/default.jpg','11111111111'),
('105','akademisyen','105','123','Ali','Vural','/img/default.jpg','11111111111'),
('106','akademisyen','106','123','Elif','Sönmez','/img/default.jpg','11111111111'),
('107','akademisyen','107','123','Mustafa','Şahin','/img/default.jpg','11111111111'),
('108','akademisyen','108','123','Burcu','Ekinci','/img/default.jpg','11111111111'),
('109','akademisyen','109','123','Caner','Öz','/img/default.jpg','11111111111'),
('110','akademisyen','110','123','Derya','Kurt','/img/default.jpg','11111111111'),
('111','akademisyen','111','123','Fatih','Arslan','/img/default.jpg','11111111111'),
('112','akademisyen','112','123','Gökhan','Yıldız','/img/default.jpg','11111111111'),
('242523','ogrenci','242523','1354','Baltaş','Yaman','/img/default.jpg','43167390973'),
('242525','ogrenci','242525','1347','Naide','Akçay','/img/default.jpg','68702343830'),
('242528','ogrenci','242528','5441','Kâzime','Çetin','/img/default.jpg','76609837413'),
('242535','ogrenci','242535','7448','Güzey','Yüksel','/img/default.jpg','96172581026'),
('242540','ogrenci','242540','5915','Fersan','Güçlü','/img/default.jpg','26059601837'),
('242546','ogrenci','242546','8068','Bayzettin','Soylu','/img/default.jpg','29416281617'),
('242570','ogrenci','242570','3297','Anka','Karadeniz','/img/default.jpg','20736636156'),
('242580','ogrenci','242580','6685','Çıvgın','Bilge','/img/default.jpg','76495053499'),
('242584','ogrenci','242584','8337','Amaç','Ülker','/img/default.jpg','98318436062'),
('242596','ogrenci','242596','2360','Uğur','Sezer','/img/default.jpg','50452822010'),
('ADM001','admin','admin','admin','Sistem','Yöneticisi',NULL,NULL);
/*!40000 ALTER TABLE `kullanici` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ogrenci`
--

DROP TABLE IF EXISTS `ogrenci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ogrenci` (
  `id` int NOT NULL,
  `kullanici_id` int DEFAULT NULL,
  `ogrenci_no` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ogrenci`
--

LOCK TABLES `ogrenci` WRITE;
/*!40000 ALTER TABLE `ogrenci` DISABLE KEYS */;
/*!40000 ALTER TABLE `ogrenci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ogrencidersleri`
--

DROP TABLE IF EXISTS `ogrencidersleri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ogrencidersleri` (
  `ogrenci_id` varchar(10) NOT NULL,
  `ders_id` int NOT NULL,
  `ders_ad` varchar(100) DEFAULT NULL,
  `kredi` int DEFAULT NULL,
  `akts` int DEFAULT NULL,
  `notu` int DEFAULT NULL,
  `ogretmen` varchar(100) DEFAULT NULL,
  `harf_notu` varchar(2) DEFAULT NULL,
  `yariyil` int DEFAULT NULL,
  `durum` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ogrenci_id`,`ders_id`),
  UNIQUE KEY `ogrencidersleri_ders_id_ogrenci_id_unique` (`ogrenci_id`,`ders_id`),
  KEY `ders_id` (`ders_id`),
  CONSTRAINT `ogrencidersleri_ibfk_1` FOREIGN KEY (`ogrenci_id`) REFERENCES `kullanici` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ogrencidersleri_ibfk_2` FOREIGN KEY (`ders_id`) REFERENCES `dersler` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ogrencidersleri`
--

LOCK TABLES `ogrencidersleri` WRITE;
/*!40000 ALTER TABLE `ogrencidersleri` DISABLE KEYS */;
INSERT INTO `ogrencidersleri` VALUES ('242523',16,'Ahilik Kültürü ve Meslek Ahlakı',2,2,NULL,NULL,NULL,3,'Devam Ediyor'),
('242523',17,'Lineer Cebir',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242523',18,'Devre Analizi',5,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242523',19,'Mantık Tasarımı',5,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242523',20,'Web Programlama',4,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242523',21,'Veri Yapıları',3,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242523',22,'İş Sağlığı ve Güvenliği I',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242523',23,'Bilgisayar Mimarisi',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242523',24,'Programlama Dillerinin Prensipleri',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242523',25,'Sayısal Hesaplama',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242523',26,'Diferansiyel Denklemler',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242523',27,'Elektronik Devreler ve Laboratuvarı',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242523',28,'İş Sağlığı ve Güvenliği II',2,3,NULL,NULL,NULL,4,'Devam Ediyor'),
('242525',16,'Ahilik Kültürü ve Meslek Ahlakı',2,2,NULL,NULL,NULL,3,'Devam Ediyor'),
('242525',17,'Lineer Cebir',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242525',18,'Devre Analizi',5,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242525',19,'Mantık Tasarımı',5,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242525',20,'Web Programlama',4,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242525',21,'Veri Yapıları',3,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242525',22,'İş Sağlığı ve Güvenliği I',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242525',23,'Bilgisayar Mimarisi',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242525',24,'Programlama Dillerinin Prensipleri',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242525',25,'Sayısal Hesaplama',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242525',26,'Diferansiyel Denklemler',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242525',27,'Elektronik Devreler ve Laboratuvarı',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242525',28,'İş Sağlığı ve Güvenliği II',2,3,NULL,NULL,NULL,4,'Devam Ediyor'),
('242528',1,'Fizik I',3,5,NULL,NULL,NULL,1,'Devam Ediyor'),
('242528',2,'Programlamaya Giriş',4,8,NULL,NULL,NULL,1,'Devam Ediyor'),
('242528',3,'Bilim ve Mühendislik İçin Analiz I',4,6,NULL,NULL,NULL,1,'Devam Ediyor'),
('242528',4,'Bilgisayar Mühendisliği Kavramları',3,5,NULL,NULL,NULL,1,'Devam Ediyor'),
('242528',5,'Yabancı Dil I: İngilizce',2,2,NULL,NULL,NULL,1,'Devam Ediyor'),
('242528',6,'Atatürk İlkeleri ve İnkılap Tarihi I',2,2,NULL,NULL,NULL,1,'Devam Ediyor'),
('242528',7,'Türk Dili I',2,2,NULL,NULL,NULL,1,'Devam Ediyor'),
('242528',8,'Fizik II',3,5,NULL,NULL,NULL,2,'Devam Ediyor'),
('242528',9,'Web Teknolojileri',3,4,NULL,NULL,NULL,2,'Devam Ediyor'),
('242528',10,'Ayrık İşlemsel Yapılar',3,4,NULL,NULL,NULL,2,'Devam Ediyor'),
('242528',11,'Nesneye Dayalı Programlama',4,5,NULL,NULL,NULL,2,'Devam Ediyor'),
('242528',12,'Bilim ve Mühendislik İçin Analiz II',3,6,NULL,NULL,NULL,2,'Devam Ediyor'),
('242528',13,'Yabancı Dil II: İngilizce',2,2,NULL,NULL,NULL,2,'Devam Ediyor'),
('242528',14,'Atatürk İlkeleri ve İnkılap Tarihi II',2,2,NULL,NULL,NULL,2,'Devam Ediyor'),
('242528',15,'Türk Dili II',2,2,NULL,NULL,NULL,2,'Devam Ediyor'),
('242535',16,'Ahilik Kültürü ve Meslek Ahlakı',2,2,NULL,NULL,NULL,3,'Devam Ediyor'),
('242535',17,'Lineer Cebir',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242535',18,'Devre Analizi',5,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242535',19,'Mantık Tasarımı',5,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242535',20,'Web Programlama',4,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242535',21,'Veri Yapıları',3,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242535',22,'İş Sağlığı ve Güvenliği I',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242535',23,'Bilgisayar Mimarisi',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242535',24,'Programlama Dillerinin Prensipleri',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242535',25,'Sayısal Hesaplama',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242535',26,'Diferansiyel Denklemler',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242535',27,'Elektronik Devreler ve Laboratuvarı',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242535',28,'İş Sağlığı ve Güvenliği II',2,3,NULL,NULL,NULL,4,'Devam Ediyor'),
('242540',29,'Biçimsel Diller ve Soyut Makineler',3,3,NULL,NULL,NULL,5,'Devam Ediyor'),
('242540',30,'Veritabanı Yönetim Sistemleri',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242540',31,'Veri İletişimi',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242540',32,'İşletim Sistemleri',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242540',33,'Staj I',0,5,NULL,NULL,NULL,5,'Devam Ediyor'),
('242540',34,'Seçmeli Ders I',8,10,NULL,NULL,NULL,5,'Devam Ediyor'),
('242540',35,'Bilgisayar Ağları',3,5,NULL,NULL,NULL,6,'Devam Ediyor'),
('242540',36,'Olasılık ve İstatistik',3,3,NULL,NULL,NULL,6,'Devam Ediyor'),
('242540',37,'Algoritma Analizi ve Tasarımı',4,4,NULL,NULL,NULL,6,'Devam Ediyor'),
('242540',38,'Mikroişlemcili Sistemler ve Laboratuvarları',4,5,NULL,NULL,NULL,6,'Devam Ediyor'),
('242540',39,'Ortak Seçmeli Ders I',2,3,NULL,NULL,NULL,6,'Devam Ediyor'),
('242540',40,'Seçmeli Ders II',8,10,NULL,NULL,NULL,6,'Devam Ediyor'),
('242546',16,'Ahilik Kültürü ve Meslek Ahlakı',2,2,NULL,NULL,NULL,3,'Devam Ediyor'),
('242546',17,'Lineer Cebir',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242546',18,'Devre Analizi',5,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242546',19,'Mantık Tasarımı',5,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242546',20,'Web Programlama',4,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242546',21,'Veri Yapıları',3,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242546',22,'İş Sağlığı ve Güvenliği I',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242546',23,'Bilgisayar Mimarisi',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242546',24,'Programlama Dillerinin Prensipleri',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242546',25,'Sayısal Hesaplama',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242546',26,'Diferansiyel Denklemler',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242546',27,'Elektronik Devreler ve Laboratuvarı',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242546',28,'İş Sağlığı ve Güvenliği II',2,3,NULL,NULL,NULL,4,'Devam Ediyor'),
('242570',29,'Biçimsel Diller ve Soyut Makineler',3,3,NULL,NULL,NULL,5,'Devam Ediyor'),
('242570',30,'Veritabanı Yönetim Sistemleri',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242570',31,'Veri İletişimi',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242570',32,'İşletim Sistemleri',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242570',33,'Staj I',0,5,NULL,NULL,NULL,5,'Devam Ediyor'),
('242570',34,'Seçmeli Ders I',8,10,NULL,NULL,NULL,5,'Devam Ediyor'),
('242570',35,'Bilgisayar Ağları',3,5,NULL,NULL,NULL,6,'Devam Ediyor'),
('242570',36,'Olasılık ve İstatistik',3,3,NULL,NULL,NULL,6,'Devam Ediyor'),
('242570',37,'Algoritma Analizi ve Tasarımı',4,4,NULL,NULL,NULL,6,'Devam Ediyor'),
('242570',38,'Mikroişlemcili Sistemler ve Laboratuvarları',4,5,NULL,NULL,NULL,6,'Devam Ediyor'),
('242570',39,'Ortak Seçmeli Ders I',2,3,NULL,NULL,NULL,6,'Devam Ediyor'),
('242570',40,'Seçmeli Ders II',8,10,NULL,NULL,NULL,6,'Devam Ediyor'),
('242580',29,'Biçimsel Diller ve Soyut Makineler',3,3,NULL,NULL,NULL,5,'Devam Ediyor'),
('242580',30,'Veritabanı Yönetim Sistemleri',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242580',31,'Veri İletişimi',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242580',32,'İşletim Sistemleri',3,4,NULL,NULL,NULL,5,'Devam Ediyor'),
('242580',33,'Staj I',0,5,NULL,NULL,NULL,5,'Devam Ediyor'),
('242580',34,'Seçmeli Ders I',8,10,NULL,NULL,NULL,5,'Devam Ediyor'),
('242580',35,'Bilgisayar Ağları',3,5,NULL,NULL,NULL,6,'Devam Ediyor'),
('242580',36,'Olasılık ve İstatistik',3,3,NULL,NULL,NULL,6,'Devam Ediyor'),
('242580',37,'Algoritma Analizi ve Tasarımı',4,4,NULL,NULL,NULL,6,'Devam Ediyor'),
('242580',38,'Mikroişlemcili Sistemler ve Laboratuvarları',4,5,NULL,NULL,NULL,6,'Devam Ediyor'),
('242580',39,'Ortak Seçmeli Ders I',2,3,NULL,NULL,NULL,6,'Devam Ediyor'),
('242580',40,'Seçmeli Ders II',8,10,NULL,NULL,NULL,6,'Devam Ediyor'),
('242584',16,'Ahilik Kültürü ve Meslek Ahlakı',2,2,NULL,NULL,NULL,3,'Devam Ediyor'),
('242584',17,'Lineer Cebir',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242584',18,'Devre Analizi',5,5,58,NULL,'DC',3,'Devam Ediyor'),
('242584',19,'Mantık Tasarımı',5,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242584',20,'Web Programlama',4,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242584',21,'Veri Yapıları',3,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242584',22,'İş Sağlığı ve Güvenliği I',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242584',23,'Bilgisayar Mimarisi',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242584',24,'Programlama Dillerinin Prensipleri',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242584',25,'Sayısal Hesaplama',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242584',26,'Diferansiyel Denklemler',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242584',27,'Elektronik Devreler ve Laboratuvarı',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242584',28,'İş Sağlığı ve Güvenliği II',2,3,NULL,NULL,NULL,4,'Devam Ediyor'),
('242596',16,'Ahilik Kültürü ve Meslek Ahlakı',2,2,NULL,NULL,NULL,3,'Devam Ediyor'),
('242596',17,'Lineer Cebir',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242596',18,'Devre Analizi',5,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242596',19,'Mantık Tasarımı',5,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242596',20,'Web Programlama',4,6,NULL,NULL,NULL,3,'Devam Ediyor'),
('242596',21,'Veri Yapıları',3,5,NULL,NULL,NULL,3,'Devam Ediyor'),
('242596',22,'İş Sağlığı ve Güvenliği I',2,3,NULL,NULL,NULL,3,'Devam Ediyor'),
('242596',23,'Bilgisayar Mimarisi',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242596',24,'Programlama Dillerinin Prensipleri',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242596',25,'Sayısal Hesaplama',3,5,NULL,NULL,NULL,4,'Devam Ediyor'),
('242596',26,'Diferansiyel Denklemler',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242596',27,'Elektronik Devreler ve Laboratuvarı',4,6,NULL,NULL,NULL,4,'Devam Ediyor'),
('242596',28,'İş Sağlığı ve Güvenliği II',2,3,NULL,NULL,NULL,4,'Devam Ediyor');
/*!40000 ALTER TABLE `ogrencidersleri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ogrencidetay`
--

DROP TABLE IF EXISTS `ogrencidetay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ogrencidetay` (
  `kullanici_id` varchar(10) NOT NULL,
  `anne` varchar(50) DEFAULT NULL,
  `baba` varchar(50) DEFAULT NULL,
  `dogum` varchar(50) DEFAULT NULL,
  `kayit` varchar(20) DEFAULT NULL,
  `egitim` varchar(50) DEFAULT NULL,
  `durum` varchar(50) DEFAULT NULL,
  `sinif` varchar(20) DEFAULT NULL,
  `program` varchar(150) DEFAULT NULL,
  `puan` int DEFAULT '0',
  PRIMARY KEY (`kullanici_id`),
  CONSTRAINT `ogrencidetay_ibfk_1` FOREIGN KEY (`kullanici_id`) REFERENCES `kullanici` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ogrencidetay`
--

LOCK TABLES `ogrencidetay` WRITE;
/*!40000 ALTER TABLE `ogrencidetay` DISABLE KEYS */;
INSERT INTO `ogrencidetay` VALUES ('242523','Birben','Umman','06.04.2002 / TÜRKİYE CUMHURİYETİ','18.08.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','2. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242525','Nazi','Bilgütay','11.09.2005 / TÜRKİYE CUMHURİYETİ','16.08.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','2. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242528','İde','Kocabaş','02.10.2003 / TÜRKİYE CUMHURİYETİ','18.02.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','1. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242535','Aral','Toy','28.11.2001 / TÜRKİYE CUMHURİYETİ','02.03.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','2. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242540','Rumeysa','Dolun','01.04.2004 / TÜRKİYE CUMHURİYETİ','12.08.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','3. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242546','Mufide','Çokan','23.11.2004 / TÜRKİYE CUMHURİYETİ','18.11.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','2. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242570','Buşra','Sancak','03.11.2005 / TÜRKİYE CUMHURİYETİ','21.07.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','3. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242580','Kefser','Çelikkan','08.07.2001 / TÜRKİYE CUMHURİYETİ','01.09.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','3. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242584','Akise','Terlan','02.01.2007 / TÜRKİYE CUMHURİYETİ','26.12.2024','ÖRGÜN ÖĞRETİM / 4','Aktif','2. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',0),
('242596','Gülfari','Bayzettin','25.07.2004 / TÜRKİYE CUMHURİYETİ','24.03.2025','ÖRGÜN ÖĞRETİM / 4','Aktif','2. SINIF','KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği',1000);
/*!40000 ALTER TABLE `ogrencidetay` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-28 19:52:17
