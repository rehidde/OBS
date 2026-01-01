const sequelize = require('../config/db');
const { ogrencidersleri } = require('../models');

async function seedOgrencidersleri() {
    try {
        await sequelize.authenticate();

        await ogrencidersleriS.bulkCreate(

            [
                { ogrenci_id: '242523', ders_id: 16, ders_ad: 'Ahilik Kültürü ve Meslek Ahlakı', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 17, ders_ad: 'Lineer Cebir', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 18, ders_ad: 'Devre Analizi', kredi: 5, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 19, ders_ad: 'Mantık Tasarımı', kredi: 5, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 20, ders_ad: 'Web Programlama', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 21, ders_ad: 'Veri Yapıları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 22, ders_ad: 'İş Sağlığı ve Güvenliği I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 23, ders_ad: 'Bilgisayar Mimarisi', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 24, ders_ad: 'Programlama Dillerinin Prensipleri', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 25, ders_ad: 'Sayısal Hesaplama', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 26, ders_ad: 'Diferansiyel Denklemler', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 27, ders_ad: 'Elektronik Devreler ve Laboratuvarı', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242523', ders_id: 28, ders_ad: 'İş Sağlığı ve Güvenliği II', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },

                { ogrenci_id: '242525', ders_id: 16, ders_ad: 'Ahilik Kültürü ve Meslek Ahlakı', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 17, ders_ad: 'Lineer Cebir', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 18, ders_ad: 'Devre Analizi', kredi: 5, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 19, ders_ad: 'Mantık Tasarımı', kredi: 5, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 20, ders_ad: 'Web Programlama', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 21, ders_ad: 'Veri Yapıları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 22, ders_ad: 'İş Sağlığı ve Güvenliği I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 23, ders_ad: 'Bilgisayar Mimarisi', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 24, ders_ad: 'Programlama Dillerinin Prensipleri', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 25, ders_ad: 'Sayısal Hesaplama', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 26, ders_ad: 'Diferansiyel Denklemler', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 27, ders_ad: 'Elektronik Devreler ve Laboratuvarı', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242525', ders_id: 28, ders_ad: 'İş Sağlığı ve Güvenliği II', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },

                { ogrenci_id: '242528', ders_id: 1, ders_ad: 'Fizik I', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 1, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 2, ders_ad: 'Programlamaya Giriş', kredi: 4, akts: 8, notu: null, ogretmen: null, harf_notu: null, yariyil: 1, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 3, ders_ad: 'Bilim ve Mühendislik İçin Analiz I', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 1, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 4, ders_ad: 'Bilgisayar Mühendisliği Kavramları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 1, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 5, ders_ad: 'Yabancı Dil I: İngilizce', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 1, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 6, ders_ad: 'Atatürk İlkeleri ve İnkılap Tarihi I', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 1, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 7, ders_ad: 'Türk Dili I', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 1, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 8, ders_ad: 'Fizik II', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 2, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 9, ders_ad: 'Web Teknolojileri', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 2, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 10, ders_ad: 'Ayrık İşlemsel Yapılar', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 2, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 11, ders_ad: 'Nesneye Dayalı Programlama', kredi: 4, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 2, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 12, ders_ad: 'Bilim ve Mühendislik İçin Analiz II', kredi: 3, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 2, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 13, ders_ad: 'Yabancı Dil II: İngilizce', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 2, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 14, ders_ad: 'Atatürk İlkeleri ve İnkılap Tarihi II', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 2, durum: 'Devam Ediyor' },
                { ogrenci_id: '242528', ders_id: 15, ders_ad: 'Türk Dili II', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 2, durum: 'Devam Ediyor' },

                { ogrenci_id: '242535', ders_id: 16, ders_ad: 'Ahilik Kültürü ve Meslek Ahlakı', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 17, ders_ad: 'Lineer Cebir', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 18, ders_ad: 'Devre Analizi', kredi: 5, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 19, ders_ad: 'Mantık Tasarımı', kredi: 5, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 20, ders_ad: 'Web Programlama', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 21, ders_ad: 'Veri Yapıları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 22, ders_ad: 'İş Sağlığı ve Güvenliği I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 23, ders_ad: 'Bilgisayar Mimarisi', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 24, ders_ad: 'Programlama Dillerinin Prensipleri', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 25, ders_ad: 'Sayısal Hesaplama', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 26, ders_ad: 'Diferansiyel Denklemler', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 27, ders_ad: 'Elektronik Devreler ve Laboratuvarı', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242535', ders_id: 28, ders_ad: 'İş Sağlığı ve Güvenliği II', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },

                { ogrenci_id: '242540', ders_id: 29, ders_ad: 'Biçimsel Diller ve Soyut Makineler', kredi: 3, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 30, ders_ad: 'Veritabanı Yönetim Sistemleri', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 31, ders_ad: 'Veri İletişimi', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 32, ders_ad: 'İşletim Sistemleri', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 33, ders_ad: 'Staj I', kredi: 0, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 34, ders_ad: 'Seçmeli Ders I', kredi: 8, akts: 10, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 35, ders_ad: 'Bilgisayar Ağları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 36, ders_ad: 'Olasılık ve İstatistik', kredi: 3, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 37, ders_ad: 'Algoritma Analizi ve Tasarımı', kredi: 4, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 38, ders_ad: 'Mikroişlemcili Sistemler ve Laboratuvarları', kredi: 4, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 39, ders_ad: 'Ortak Seçmeli Ders I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242540', ders_id: 40, ders_ad: 'Seçmeli Ders II', kredi: 8, akts: 10, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },

                { ogrenci_id: '242546', ders_id: 16, ders_ad: 'Ahilik Kültürü ve Meslek Ahlakı', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 17, ders_ad: 'Lineer Cebir', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 18, ders_ad: 'Devre Analizi', kredi: 5, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 19, ders_ad: 'Mantık Tasarımı', kredi: 5, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 20, ders_ad: 'Web Programlama', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 21, ders_ad: 'Veri Yapıları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 22, ders_ad: 'İş Sağlığı ve Güvenliği I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 23, ders_ad: 'Bilgisayar Mimarisi', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 24, ders_ad: 'Programlama Dillerinin Prensipleri', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 25, ders_ad: 'Sayısal Hesaplama', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 26, ders_ad: 'Diferansiyel Denklemler', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 27, ders_ad: 'Elektronik Devreler ve Laboratuvarı', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242546', ders_id: 28, ders_ad: 'İş Sağlığı ve Güvenliği II', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },

                { ogrenci_id: '242570', ders_id: 29, ders_ad: 'Biçimsel Diller ve Soyut Makineler', kredi: 3, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 30, ders_ad: 'Veritabanı Yönetim Sistemleri', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 31, ders_ad: 'Veri İletişimi', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 32, ders_ad: 'İşletim Sistemleri', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 33, ders_ad: 'Staj I', kredi: 0, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 34, ders_ad: 'Seçmeli Ders I', kredi: 8, akts: 10, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 35, ders_ad: 'Bilgisayar Ağları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 36, ders_ad: 'Olasılık ve İstatistik', kredi: 3, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 37, ders_ad: 'Algoritma Analizi ve Tasarımı', kredi: 4, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 38, ders_ad: 'Mikroişlemcili Sistemler ve Laboratuvarları', kredi: 4, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 39, ders_ad: 'Ortak Seçmeli Ders I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242570', ders_id: 40, ders_ad: 'Seçmeli Ders II', kredi: 8, akts: 10, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },

                { ogrenci_id: '242580', ders_id: 29, ders_ad: 'Biçimsel Diller ve Soyut Makineler', kredi: 3, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 30, ders_ad: 'Veritabanı Yönetim Sistemleri', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 31, ders_ad: 'Veri İletişimi', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 32, ders_ad: 'İşletim Sistemleri', kredi: 3, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 33, ders_ad: 'Staj I', kredi: 0, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 34, ders_ad: 'Seçmeli Ders I', kredi: 8, akts: 10, notu: null, ogretmen: null, harf_notu: null, yariyil: 5, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 35, ders_ad: 'Bilgisayar Ağları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 36, ders_ad: 'Olasılık ve İstatistik', kredi: 3, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 37, ders_ad: 'Algoritma Analizi ve Tasarımı', kredi: 4, akts: 4, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 38, ders_ad: 'Mikroişlemcili Sistemler ve Laboratuvarları', kredi: 4, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 39, ders_ad: 'Ortak Seçmeli Ders I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },
                { ogrenci_id: '242580', ders_id: 40, ders_ad: 'Seçmeli Ders II', kredi: 8, akts: 10, notu: null, ogretmen: null, harf_notu: null, yariyil: 6, durum: 'Devam Ediyor' },

                { ogrenci_id: '242584', ders_id: 16, ders_ad: 'Ahilik Kültürü ve Meslek Ahlakı', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 17, ders_ad: 'Lineer Cebir', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 18, ders_ad: 'Devre Analizi', kredi: 5, akts: 5, notu: 58, ogretmen: null, harf_notu: 'DC', yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 19, ders_ad: 'Mantık Tasarımı', kredi: 5, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 20, ders_ad: 'Web Programlama', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 21, ders_ad: 'Veri Yapıları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 22, ders_ad: 'İş Sağlığı ve Güvenliği I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 23, ders_ad: 'Bilgisayar Mimarisi', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 24, ders_ad: 'Programlama Dillerinin Prensipleri', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 25, ders_ad: 'Sayısal Hesaplama', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 26, ders_ad: 'Diferansiyel Denklemler', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 27, ders_ad: 'Elektronik Devreler ve Laboratuvarı', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242584', ders_id: 28, ders_ad: 'İş Sağlığı ve Güvenliği II', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },

                { ogrenci_id: '242596', ders_id: 16, ders_ad: 'Ahilik Kültürü ve Meslek Ahlakı', kredi: 2, akts: 2, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 17, ders_ad: 'Lineer Cebir', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 18, ders_ad: 'Devre Analizi', kredi: 5, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 19, ders_ad: 'Mantık Tasarımı', kredi: 5, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 20, ders_ad: 'Web Programlama', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 21, ders_ad: 'Veri Yapıları', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 22, ders_ad: 'İş Sağlığı ve Güvenliği I', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 3, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 23, ders_ad: 'Bilgisayar Mimarisi', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 24, ders_ad: 'Programlama Dillerinin Prensipleri', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 25, ders_ad: 'Sayısal Hesaplama', kredi: 3, akts: 5, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 26, ders_ad: 'Diferansiyel Denklemler', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 27, ders_ad: 'Elektronik Devreler ve Laboratuvarı', kredi: 4, akts: 6, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' },
                { ogrenci_id: '242596', ders_id: 28, ders_ad: 'İş Sağlığı ve Güvenliği II', kredi: 2, akts: 3, notu: null, ogretmen: null, harf_notu: null, yariyil: 4, durum: 'Devam Ediyor' }
            ],
            {
                validate: true,
                ignoreDuplicates: true
            }
        );
        console.log('ogrencidersleri eklendi');
    } catch (err) {
        console.error('ogrencidersleri eklenirken hata', err);
    } finally {
        await sequelize.close();
    }
}

seedOgrencidersleri();