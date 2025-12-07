CREATE DATABASE OBS;
USE OBS;


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
    program VARCHAR(150)
);


CREATE TABLE Dersler (
    id INT PRIMARY KEY,
    ad VARCHAR(100),
    kredi INT,
    akts INT
);


CREATE TABLE OgrenciDersleri (
    id INT,
    ders_ad VARCHAR(100),
    kredi INT,
    akts INT,
    notu INT,
    ogretmen VARCHAR(100)
);

INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242596', 'ogrenci', '242596', '2360', 'Uğur', 'Sezer', '../img/default.jpg', '50452822010');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242596', 'Gülfari', 'Bayzettin', '25.07.2004 / TÜRKİYE CUMHURİYETİ', '24.03.2025', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Programlamaya Giriş', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242596', 'Programlamaya Giriş', 3, 5, 90, 'Tatu Akgündüz');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Devre Analizi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242596', 'Devre Analizi', 3, 5, 58, 'Dr. Yönetmen Şafak');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri Yapıları', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242596', 'Veri Yapıları', 3, 5, 60, 'Prof. Nazimet Ömriye Tevetoğlu Arsoy');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Bilgisayar Görmesi', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242596', 'Bilgisayar Görmesi', 3, 6, 63, 'Öğr. Aliseydi Verim Arsoy');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Web Programlama', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242596', 'Web Programlama', 3, 5, 58, 'Ledün Göken Erdoğan Erdoğan');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Yapay Zeka', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242596', 'Yapay Zeka', 3, 6, 69, 'Mihin Abdulkadir Bilgin');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242596', 'Veri İletişimi', 3, 5, 89, 'Prof. Harbinaz Eraslan Yıldırım');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242525', 'ogrenci', '242525', '1347', 'Naide', 'Akçay', '../img/default.jpg', '68702343830');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242525', 'Nazi', 'Bilgütay', '11.09.2005 / TÜRKİYE CUMHURİYETİ', '16.08.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242525', 'Veri İletişimi', 3, 5, 89, 'Öğr. Ağmur Balatekin Hançer');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Bilgisayar Görmesi', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242525', 'Bilgisayar Görmesi', 3, 6, 96, 'Olca Aksu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Programlamaya Giriş', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242525', 'Programlamaya Giriş', 3, 5, 73, 'Tümkurt Erik Korutürk');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Yapay Zeka', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242525', 'Yapay Zeka', 3, 6, 76, 'Kutun Sakarya Akçay');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri Yapıları', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242525', 'Veri Yapıları', 3, 5, 71, 'Tuğcan Öcalan');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Web Programlama', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242525', 'Web Programlama', 3, 5, 62, 'İyiyürek Bilge');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Devre Analizi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242525', 'Devre Analizi', 3, 5, 76, 'Öğr. Şüküfe Ildız Tevetoğlu Zengin');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242535', 'ogrenci', '242535', '7448', 'Güzey', 'Yüksel', '../img/default.jpg', '96172581026');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242535', 'Aral', 'Toy', '28.11.2001 / TÜRKİYE CUMHURİYETİ', '02.03.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Devre Analizi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242535', 'Devre Analizi', 3, 5, 76, 'Dr. Nesfe Aslan Zengin');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Bilgisayar Görmesi', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242535', 'Bilgisayar Görmesi', 3, 6, 88, 'Duracan Duran');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Web Programlama', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242535', 'Web Programlama', 3, 5, 57, 'Rana Zengin Bilgin');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Yapay Zeka', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242535', 'Yapay Zeka', 3, 6, 80, 'Sefer Arsoy İhsanoğlu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Programlamaya Giriş', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242535', 'Programlamaya Giriş', 3, 5, 100, 'İmam Efe Ertaş Çorlu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242535', 'Veri İletişimi', 3, 5, 67, 'Tekbay Çetin');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242540', 'ogrenci', '242540', '5915', 'Fersan', 'Güçlü', '../img/default.jpg', '26059601837');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242540', 'Rumeysa', 'Dolun', '01.04.2004 / TÜRKİYE CUMHURİYETİ', '12.08.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '3. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Yapay Zeka', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242540', 'Yapay Zeka', 3, 6, 98, 'Yunt Suat Akgündüz Tevetoğlu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri Yapıları', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242540', 'Veri Yapıları', 3, 5, 52, 'Dinçsü Bilgen İhsanoğlu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Devre Analizi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242540', 'Devre Analizi', 3, 5, 81, 'Burakhan Arslan');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Programlamaya Giriş', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242540', 'Programlamaya Giriş', 3, 5, 73, 'Şerman Demir');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242540', 'Veri İletişimi', 3, 5, 92, 'Dr. Elamiye Melikkan Yüksel Erdoğan');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242523', 'ogrenci', '242523', '1354', 'Baltaş', 'Yaman', '../img/default.jpg', '43167390973');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242523', 'Birben', 'Umman', '06.04.2002 / TÜRKİYE CUMHURİYETİ', '18.08.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Devre Analizi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242523', 'Devre Analizi', 3, 5, 60, 'Duruöz Tevetoğlu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Yapay Zeka', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242523', 'Yapay Zeka', 3, 6, 89, 'Vefia Soylu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Web Programlama', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242523', 'Web Programlama', 3, 5, 86, 'Arş. Gör. Ayyaruk Mansız Çorlu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242523', 'Veri İletişimi', 3, 5, 70, 'Bay Tulun Çetin');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Bilgisayar Görmesi', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242523', 'Bilgisayar Görmesi', 3, 6, 53, 'Yaşattin Ekber Akça');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri Yapıları', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242523', 'Veri Yapıları', 3, 5, 51, 'Uz. Cannur Göksev Türk');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Programlamaya Giriş', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242523', 'Programlamaya Giriş', 3, 5, 55, 'Çev. Göken Hayrioğlu');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242546', 'ogrenci', '242546', '8068', 'Bayzettin', 'Soylu', '../img/default.jpg', '29416281617');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242546', 'Mufide', 'Çokan', '23.11.2004 / TÜRKİYE CUMHURİYETİ', '18.11.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri Yapıları', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242546', 'Veri Yapıları', 3, 5, 59, 'Beyzade Akçay');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Bilgisayar Görmesi', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242546', 'Bilgisayar Görmesi', 3, 6, 56, 'Rafia Öcalan');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Programlamaya Giriş', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242546', 'Programlamaya Giriş', 3, 5, 52, 'Uz. İsra Şirivan Tevetoğlu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Yapay Zeka', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242546', 'Yapay Zeka', 3, 6, 76, 'Fayize Karadeniz');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Devre Analizi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242546', 'Devre Analizi', 3, 5, 52, 'Bayruhan Bilir');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Web Programlama', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242546', 'Web Programlama', 3, 5, 50, 'Selvi Ertaş');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242546', 'Veri İletişimi', 3, 5, 77, 'Badegül Durmuş İhsanoğlu');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242570', 'ogrenci', '242570', '3297', 'Anka', 'Karadeniz', '../img/default.jpg', '20736636156');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242570', 'Buşra', 'Sancak', '03.11.2005 / TÜRKİYE CUMHURİYETİ', '21.07.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '3. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri Yapıları', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242570', 'Veri Yapıları', 3, 5, 96, 'Canur Seniha Soylu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242570', 'Veri İletişimi', 3, 5, 96, 'Dr. Çalım Zülbiye Eraslan');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Programlamaya Giriş', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242570', 'Programlamaya Giriş', 3, 5, 60, 'Dr. Erksoy Sezgin');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Bilgisayar Görmesi', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242570', 'Bilgisayar Görmesi', 3, 6, 73, 'Arısoy Dumanlı');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242584', 'ogrenci', '242584', '8337', 'Amaç', 'Ülker', '../img/default.jpg', '98318436062');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242584', 'Akise', 'Terlan', '02.01.2007 / TÜRKİYE CUMHURİYETİ', '26.12.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '2. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri Yapıları', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242584', 'Veri Yapıları', 3, 5, 78, 'Temizkal Tevetoğlu');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Yapay Zeka', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242584', 'Yapay Zeka', 3, 6, 51, 'Erseç Mansız');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242584', 'Veri İletişimi', 3, 5, 90, 'Habibe Şayan Arsoy');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Bilgisayar Görmesi', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242584', 'Bilgisayar Görmesi', 3, 6, 76, 'Erkinel Hayrioğlu');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242580', 'ogrenci', '242580', '6685', 'Çıvgın', 'Bilge', '../img/default.jpg', '76495053499');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242580', 'Kefser', 'Çelikkan', '08.07.2001 / TÜRKİYE CUMHURİYETİ', '01.09.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '3. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Web Programlama', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242580', 'Web Programlama', 3, 5, 57, 'Mengüç Günser Bilir');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Programlamaya Giriş', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242580', 'Programlamaya Giriş', 3, 5, 75, 'Prof. Eraycan Sakarya');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri İletişimi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242580', 'Veri İletişimi', 3, 5, 64, 'Solma Aysevim Karadeniz');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Devre Analizi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242580', 'Devre Analizi', 3, 5, 87, 'Seracettin Ülfet Sezgin');
INSERT INTO Kullanici (id, rol, numara, sifre, ad, soyad, foto_url, tc) VALUES ('242528', 'ogrenci', '242528', '5441', 'Kâzime', 'Çetin', '../img/default.jpg', '76609837413');
INSERT INTO OgrenciDetay (id, anne, baba, dogum, kayit, egitim, durum, sinif, program) VALUES ('242528', 'İde', 'Kocabaş', '02.10.2003 / TÜRKİYE CUMHURİYETİ', '18.02.2024', 'ÖRGÜN ÖĞRETİM / 4', 'AKTİF ÖĞRENCİ', '1. SINIF', 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Yapay Zeka', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242528', 'Yapay Zeka', 3, 6, 88, 'Arş. Gör. Birgit Ertaş');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Veri Yapıları', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242528', 'Veri Yapıları', 3, 5, 73, 'Recepali Hindal Demirel Manço');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Web Programlama', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242528', 'Web Programlama', 3, 5, 66, 'Sevdi Demir');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Bilgisayar Görmesi', 3, 6);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242528', 'Bilgisayar Görmesi', 3, 6, 76, 'Prof. Saydam Görgünay Dumanlı');
INSERT INTO Dersler (ad, kredi, akts) VALUES ('Devre Analizi', 3, 5);
INSERT INTO OgrenciDersleri (id, ders_ad, kredi, akts, notu, ogretmen) VALUES ('242528', 'Devre Analizi', 3, 5, 58, 'Mukbile Akçay Aslan');


UPDATE Kullanici
SET rol = 'ogrenci';
