CREATE DATABASE IF NOT EXISTS obs;

USE obs;


CREATE TABLE Kullanici (
    id INT PRIMARY KEY,
    rol VARCHAR(20),
    numara VARCHAR(10),
    sifre VARCHAR(10),
    ad VARCHAR(50),
    soyad VARCHAR(50),
    foto_url VARCHAR(255),
    tc VARCHAR(11)
);


CREATE TABLE OgrenciDetay (
    id INT PRIMARY KEY,
    anne VARCHAR(50),
    baba VARCHAR(50),
    dogum VARCHAR(50),
    kayit VARCHAR(20),
    egitim VARCHAR(50),
    durum VARCHAR(50),
    sinif VARCHAR(20),
    program VARCHAR(150),
    puan INT
);


CREATE TABLE Dersler (
    id INT PRIMARY KEY,
    ad VARCHAR(100),
    kredi INT,
    akts INT,
    ders_kodu VARCHAR(20),
	tul VARCHAR(10),
	zorunlu_sec VARCHAR(20),
	ogretim_sekli VARCHAR(20),
	yariyil INT,
	aciklama TEXT
);


CREATE TABLE OgrenciDersleri (
    id INT PRIMARY KEY,
    ders_ad VARCHAR(100),
    kredi INT,
    akts INT,
    notu INT,
    ogretmen VARCHAR(100),
    ogrenci_id INT,
	ders_id INT,
	donem VARCHAR(20),
	harf_notu VARCHAR(2),
	donem_akts INT
);


ALTER TABLE ogrencidetay
ADD COLUMN puan INT DEFAULT 0;

UPDATE ogrencidetay
SET puan = 1000
WHERE kullanici_id = '242596';

UPDATE ogrencidetay
SET puan = 1000;


INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242596', 'ogrenci', '242596', '2360', 'Uğur', 'Sezer', '/img/default.jpg', '50452822010');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program, puan) VALUES ('242596', 'Gülfari', 'Bayzettin', '25.07.2004 / TÜRKİYE CUMHURİYETİ', '24.03.2025', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', 1000);



INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242525', 'ogrenci', '242525', '1347', 'Naide', 'Akçay', '../img/default.jpg', '68702343830');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242525', 'Nazi', 'Bilgütay', '11.09.2005 / TÜRKİYE CUMHURİYETİ', '16.08.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');


INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242535', 'ogrenci', '242535', '7448', 'Güzey', 'Yüksel', '../img/default.jpg', '96172581026');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242535', 'Aral', 'Toy', '28.11.2001 / TÜRKİYE CUMHURİYETİ', '02.03.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');



INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242540', 'ogrenci', '242540', '5915', 'Fersan', 'Güçlü', '../img/default.jpg', '26059601837');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242540', 'Rumeysa', 'Dolun', '01.04.2004 / TÜRKİYE CUMHURİYETİ', '12.08.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '3. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');


INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242523', 'ogrenci', '242523', '1354', 'Baltaş', 'Yaman', '../img/default.jpg', '43167390973');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242523', 'Birben', 'Umman', '06.04.2002 / TÜRKİYE CUMHURİYETİ', '18.08.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');



INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242546', 'ogrenci', '242546', '8068', 'Bayzettin', 'Soylu', '../img/default.jpg', '29416281617');



INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242570', 'ogrenci', '242570', '3297', 'Anka', 'Karadeniz', '../img/default.jpg', '20736636156');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242570', 'Buşra', 'Sancak', '03.11.2005 / TÜRKİYE CUMHURİYETİ', '21.07.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '3. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');



INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242584', 'ogrenci', '242584', '8337', 'Amaç', 'Ülker', '../img/default.jpg', '98318436062');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242584', 'Akise', 'Terlan', '02.01.2007 / TÜRKİYE CUMHURİYETİ', '26.12.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');



INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242580', 'ogrenci', '242580', '6685', 'Çıvgın', 'Bilge', '../img/default.jpg', '76495053499');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242580', 'Kefser', 'Çelikkan', '08.07.2001 / TÜRKİYE CUMHURİYETİ', '01.09.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '3. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');



INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242528', 'ogrenci', '242528', '5441', 'Kâzime', 'Çetin', '../img/default.jpg', '76609837413');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242528', 'İde', 'Kocabaş', '02.10.2003 / TÜRKİYE CUMHURİYETİ', '18.02.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '1. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');


UPDATE Kullanici
SET rol = 'ogrenci';


-- Müfredatta ki tüm dersler

-- 1. YARIYIL
INSERT INTO Dersler VALUES
(1,'Fizik I',3,5,'','251111101','3+0+0','Zorunlu','Yüz Yüze',1,NULL),
(2,'Programlamaya Giriş',4,8,'','251111106','4+0+0','Zorunlu','Yüz Yüze',1,NULL),
(3,'Bilim ve Mühendislik İçin Analiz I',4,6,'','251111107','3+1+0','Zorunlu','Yüz Yüze',1,NULL),
(4,'Bilgisayar Mühendisliği Kavramları',3,5,'','251111108','3+0+0','Zorunlu','Yüz Yüze',1,NULL),
(5,'Yabancı Dil I: İngilizce',2,2,'','431211301','2+0+0','Zorunlu','Yüz Yüze',1,NULL),
(6,'Atatürk İlkeleri ve İnkılap Tarihi I',2,2,'','740011301','2+0+0','Zorunlu','Yüz Yüze',1,NULL),
(7,'Türk Dili I',2,2,'','750011301','2+0+0','Zorunlu','Yüz Yüze',1,NULL);


-- 2. YARIYIL
INSERT INTO Dersler VALUES
(8,'Fizik II',3,5,'','251112101','3+0+0','Zorunlu','Yüz Yüze',2,NULL),
(9,'Web Teknolojileri',3,4,'','251112103','3+0+0','Zorunlu','Yüz Yüze',2,NULL),
(10,'Ayrık İşlemsel Yapılar',3,4,'','251112105','3+0+0','Zorunlu','Yüz Yüze',2,NULL),
(11,'Nesneye Dayalı Programlama',4,5,'','251112106','4+0+0','Zorunlu','Yüz Yüze',2,NULL),
(12,'Bilim ve Mühendislik İçin Analiz II',3,6,'','251112107','3+0+0','Zorunlu','Yüz Yüze',2,NULL),
(13,'Yabancı Dil II: İngilizce',2,2,'','431212301','2+0+0','Zorunlu','Yüz Yüze',2,NULL),
(14,'Atatürk İlkeleri ve İnkılap Tarihi II',2,2,'','740012301','2+0+0','Zorunlu','Yüz Yüze',2,NULL),
(15,'Türk Dili II',2,2,'','750012301','2+0+0','Zorunlu','Yüz Yüze',2,NULL);


-- 3. YARIYIL
INSERT INTO Dersler VALUES
(16,'Ahilik Kültürü ve Meslek Ahlakı',2,2,'','235122312','2+0+0','Zorunlu','Yüz Yüze',3,NULL),
(17,'Lineer Cebir',2,3,'','251121101','2+0+0','Zorunlu','Yüz Yüze',3,NULL),
(18,'Devre Analizi',5,5,'','251121102','3+2+0','Zorunlu','Yüz Yüze',3,NULL),
(19,'Mantık Tasarımı',5,6,'','251121103','3+2+0','Zorunlu','Yüz Yüze',3,NULL),
(20,'Web Programlama',4,6,'','251121104','4+0+0','Zorunlu','Yüz Yüze',3,NULL),
(21,'Veri Yapıları',3,5,'','251121105','3+0+0','Zorunlu','Yüz Yüze',3,NULL),
(22,'İş Sağlığı ve Güvenliği I',2,3,'','251121107','2+0+0','Zorunlu','Yüz Yüze',3,NULL);


-- 4. YARIYIL
INSERT INTO Dersler VALUES
(23,'Bilgisayar Mimarisi',3,5,'','251122103','3+0+0','Zorunlu','Yüz Yüze',4,NULL),
(24,'Programlama Dillerinin Prensipleri',3,5,'','251122104','3+0+0','Zorunlu','Yüz Yüze',4,NULL),
(25,'Sayısal Hesaplama',3,5,'','251122106','3+0+0','Zorunlu','Yüz Yüze',4,NULL),
(26,'Diferansiyel Denklemler',4,6,'','251122107','4+0+0','Zorunlu','Yüz Yüze',4,NULL),
(27,'Elektronik Devreler ve Laboratuvarı',4,6,'','251122108','3+1+0','Zorunlu','Yüz Yüze',4,NULL),
(28,'İş Sağlığı ve Güvenliği II',2,3,'','251122109','2+0+0','Zorunlu','Yüz Yüze',4,NULL);


-- 5. YARIYIL
INSERT INTO Dersler VALUES
(29,'Biçimsel Diller ve Soyut Makineler',3,3,'','251131101','3+0+0','Zorunlu','Yüz Yüze',5,NULL),
(30,'Veritabanı Yönetim Sistemleri',3,4,'','251131102','3+0+0','Zorunlu','Yüz Yüze',5,NULL),
(31,'Veri İletişimi',3,4,'','251131103','3+0+0','Zorunlu','Yüz Yüze',5,NULL),
(32,'İşletim Sistemleri',3,4,'','251131104','3+0+0','Zorunlu','Yüz Yüze',5,NULL),
(33,'Staj I',0,5,'','251131501','0+0+0','Zorunlu','Yüz Yüze',5,NULL),
(34,'Seçmeli Ders I',8,10,'','251131SEÇ','6+2+0','Seçmeli','Yüz Yüze',5,NULL);


-- 6. YARIYIL
INSERT INTO Dersler VALUES
(35,'Bilgisayar Ağları',3,5,'','251132102','3+0+0','Zorunlu','Yüz Yüze',6,NULL),
(36,'Olasılık ve İstatistik',3,3,'','251132104','3+0+0','Zorunlu','Yüz Yüze',6,NULL),
(37,'Algoritma Analizi ve Tasarımı',4,4,'','251132105','3+1+0','Zorunlu','Yüz Yüze',6,NULL),
(38,'Mikroişlemcili Sistemler ve Laboratuvarları',4,5,'','251132106','3+1+0','Zorunlu','Yüz Yüze',6,NULL),
(39,'Ortak Seçmeli Ders I',2,3,'','OSD','2+0+0','Seçmeli','Yüz Yüze',6,NULL),
(40,'Seçmeli Ders II',8,10,'','251132SEÇ','6+2+0','Seçmeli','Yüz Yüze',6,NULL);


-- 7. YARIYIL
INSERT INTO Dersler VALUES
(41,'Bilimsel Araştırma Yöntemleri',2,2,'','251141101','2+0+0','Zorunlu','Yüz Yüze',7,NULL),
(42,'Araştırma Projesi I',3,2,'','251141102','1+2+0','Zorunlu','Yüz Yüze',7,NULL),
(43,'Yapay Zekâ',4,4,'','251141103','2+2+0','Zorunlu','Yüz Yüze',7,NULL),
(44,'Staj II',0,5,'','251141501','0+0+0','Zorunlu','Yüz Yüze',7,NULL),
(45,'Seçmeli Ders III',9,10,'','251141SEÇ','9+0+0','Seçmeli','Yüz Yüze',7,NULL);

-- 8. YARIYIL

INSERT INTO Dersler VALUES
(46,'Araştırma Projesi II',3,5,'','251142101','1+2+0','Zorunlu','Yüz Yüze',8,NULL),
(47,'Seçmeli Ders IV',20,25,'','251142SEÇ','15+5+0','Seçmeli','Yüz Yüze',8,NULL);