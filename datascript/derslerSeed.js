const sequelize = require('../config/db');
const { Dersler } = require('../models');

async function seedDersler() {
  try {
    await sequelize.authenticate();

    await Dersler.bulkCreate(

      [
        { id: 1, ad: 'Fizik I', kredi: 3, akts: 5, ders_kodu: '251111101', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 1, aciklama: null, sinif: 1, akademisyen_id: 1 },
        { id: 2, ad: 'Programlamaya Giriş', kredi: 4, akts: 8, ders_kodu: '251111106', tul: '4+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 1, aciklama: null, sinif: 1, akademisyen_id: 3 },
        { id: 3, ad: 'Bilim ve Mühendislik İçin Analiz I', kredi: 4, akts: 6, ders_kodu: '251111107', tul: '3+1+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 1, aciklama: null, sinif: 1, akademisyen_id: 2 },
        { id: 4, ad: 'Bilgisayar Mühendisliği Kavramları', kredi: 3, akts: 5, ders_kodu: '251111108', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 1, aciklama: null, sinif: 1, akademisyen_id: 10 },
        { id: 5, ad: 'Yabancı Dil I: İngilizce', kredi: 2, akts: 2, ders_kodu: '431211301', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 1, aciklama: null, sinif: 1, akademisyen_id: 6 },
        { id: 6, ad: 'Atatürk İlkeleri ve İnkılap Tarihi I', kredi: 2, akts: 2, ders_kodu: '740011301', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 1, aciklama: null, sinif: 1, akademisyen_id: 5 },
        { id: 7, ad: 'Türk Dili I', kredi: 2, akts: 2, ders_kodu: '750011301', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 1, aciklama: null, sinif: 1, akademisyen_id: 5 },
        { id: 8, ad: 'Fizik II', kredi: 3, akts: 5, ders_kodu: '251112101', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 2, aciklama: null, sinif: 1, akademisyen_id: 1 },
        { id: 9, ad: 'Web Teknolojileri', kredi: 3, akts: 4, ders_kodu: '251112103', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 2, aciklama: null, sinif: 1, akademisyen_id: 4 },
        { id: 10, ad: 'Ayrık İşlemsel Yapılar', kredi: 3, akts: 4, ders_kodu: '251112105', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 2, aciklama: null, sinif: 1, akademisyen_id: 9 },
        { id: 11, ad: 'Nesneye Dayalı Programlama', kredi: 4, akts: 5, ders_kodu: '251112106', tul: '4+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 2, aciklama: null, sinif: 1, akademisyen_id: 3 },
        { id: 12, ad: 'Bilim ve Mühendislik İçin Analiz II', kredi: 3, akts: 6, ders_kodu: '251112107', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 2, aciklama: null, sinif: 1, akademisyen_id: 2 },
        { id: 13, ad: 'Yabancı Dil II: İngilizce', kredi: 2, akts: 2, ders_kodu: '431212301', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 2, aciklama: null, sinif: 1, akademisyen_id: 6 },
        { id: 14, ad: 'Atatürk İlkeleri ve İnkılap Tarihi II', kredi: 2, akts: 2, ders_kodu: '740012301', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 2, aciklama: null, sinif: 1, akademisyen_id: 5 },
        { id: 15, ad: 'Türk Dili II', kredi: 2, akts: 2, ders_kodu: '750012301', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 2, aciklama: null, sinif: 1, akademisyen_id: 5 },
        { id: 16, ad: 'Ahilik Kültürü ve Meslek Ahlakı', kredi: 2, akts: 2, ders_kodu: '235122312', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 3, aciklama: null, sinif: 2, akademisyen_id: 5 },
        { id: 17, ad: 'Lineer Cebir', kredi: 2, akts: 3, ders_kodu: '251121101', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 3, aciklama: null, sinif: 2, akademisyen_id: 2 },
        { id: 18, ad: 'Devre Analizi', kredi: 5, akts: 5, ders_kodu: '251121102', tul: '3+2+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 3, aciklama: null, sinif: 2, akademisyen_id: 7 },
        { id: 19, ad: 'Mantık Tasarımı', kredi: 5, akts: 6, ders_kodu: '251121103', tul: '3+2+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 3, aciklama: null, sinif: 2, akademisyen_id: 8 },
        { id: 20, ad: 'Web Programlama', kredi: 4, akts: 6, ders_kodu: '251121104', tul: '4+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 3, aciklama: null, sinif: 2, akademisyen_id: 4 },
        { id: 21, ad: 'Veri Yapıları', kredi: 3, akts: 5, ders_kodu: '251121105', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 3, aciklama: null, sinif: 2, akademisyen_id: 9 },
        { id: 22, ad: 'İş Sağlığı ve Güvenliği I', kredi: 2, akts: 3, ders_kodu: '251121107', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 3, aciklama: null, sinif: 2, akademisyen_id: 11 },
        { id: 23, ad: 'Bilgisayar Mimarisi', kredi: 3, akts: 5, ders_kodu: '251122103', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 4, aciklama: null, sinif: 2, akademisyen_id: 8 },
        { id: 24, ad: 'Programlama Dillerinin Prensipleri', kredi: 3, akts: 5, ders_kodu: '251122104', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 4, aciklama: null, sinif: 2, akademisyen_id: 3 },
        { id: 25, ad: 'Sayısal Hesaplama', kredi: 3, akts: 5, ders_kodu: '251122106', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 4, aciklama: null, sinif: 2, akademisyen_id: 12 },
        { id: 26, ad: 'Diferansiyel Denklemler', kredi: 4, akts: 6, ders_kodu: '251122107', tul: '4+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 4, aciklama: null, sinif: 2, akademisyen_id: 12 },
        { id: 27, ad: 'Elektronik Devreler ve Laboratuvarı', kredi: 4, akts: 6, ders_kodu: '251122108', tul: '3+1+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 4, aciklama: null, sinif: 2, akademisyen_id: 7 },
        { id: 28, ad: 'İş Sağlığı ve Güvenliği II', kredi: 2, akts: 3, ders_kodu: '251122109', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 4, aciklama: null, sinif: 2, akademisyen_id: 11 },
        { id: 29, ad: 'Biçimsel Diller ve Soyut Makineler', kredi: 3, akts: 3, ders_kodu: '251131101', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 5, aciklama: null, sinif: 3, akademisyen_id: 9 },
        { id: 30, ad: 'Veritabanı Yönetim Sistemleri', kredi: 3, akts: 4, ders_kodu: '251131102', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 5, aciklama: null, sinif: 3, akademisyen_id: 4 },
        { id: 31, ad: 'Veri İletişimi', kredi: 3, akts: 4, ders_kodu: '251131103', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 5, aciklama: null, sinif: 3, akademisyen_id: 7 },
        { id: 32, ad: 'İşletim Sistemleri', kredi: 3, akts: 4, ders_kodu: '251131104', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 5, aciklama: null, sinif: 3, akademisyen_id: 10 },
        { id: 33, ad: 'Staj I', kredi: 0, akts: 5, ders_kodu: '251131501', tul: '0+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 5, aciklama: null, sinif: 3, akademisyen_id: null },
        { id: 34, ad: 'Seçmeli Ders I', kredi: 8, akts: 10, ders_kodu: '251131SEÇ', tul: '6+2+0', zorunlu_sec: 'Seçmeli', ogretim_sekli: 'Yüz Yüze', yariyil: 5, aciklama: null, sinif: 3, akademisyen_id: null },
        { id: 35, ad: 'Bilgisayar Ağları', kredi: 3, akts: 5, ders_kodu: '251132102', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 6, aciklama: null, sinif: 3, akademisyen_id: 10 },
        { id: 36, ad: 'Olasılık ve İstatistik', kredi: 3, akts: 3, ders_kodu: '251132104', tul: '3+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 6, aciklama: null, sinif: 3, akademisyen_id: 2 },
        { id: 37, ad: 'Algoritma Analizi ve Tasarımı', kredi: 4, akts: 4, ders_kodu: '251132105', tul: '3+1+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 6, aciklama: null, sinif: 3, akademisyen_id: 9 },
        { id: 38, ad: 'Mikroişlemcili Sistemler ve Laboratuvarları', kredi: 4, akts: 5, ders_kodu: '251132106', tul: '3+1+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 6, aciklama: null, sinif: 3, akademisyen_id: 8 },
        { id: 39, ad: 'Ortak Seçmeli Ders I', kredi: 2, akts: 3, ders_kodu: 'OSD', tul: '2+0+0', zorunlu_sec: 'Seçmeli', ogretim_sekli: 'Yüz Yüze', yariyil: 6, aciklama: null, sinif: 3, akademisyen_id: null },
        { id: 40, ad: 'Seçmeli Ders II', kredi: 8, akts: 10, ders_kodu: '251132SEÇ', tul: '6+2+0', zorunlu_sec: 'Seçmeli', ogretim_sekli: 'Yüz Yüze', yariyil: 6, aciklama: null, sinif: 3, akademisyen_id: null },
        { id: 41, ad: 'Bilimsel Araştırma Yöntemleri', kredi: 2, akts: 2, ders_kodu: '251141101', tul: '2+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 7, aciklama: null, sinif: 4, akademisyen_id: 11 },
        { id: 42, ad: 'Araştırma Projesi I', kredi: 3, akts: 2, ders_kodu: '251141102', tul: '1+2+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 7, aciklama: null, sinif: 4, akademisyen_id: null },
        { id: 43, ad: 'Yapay Zekâ', kredi: 4, akts: 4, ders_kodu: '251141103', tul: '2+2+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 7, aciklama: null, sinif: 4, akademisyen_id: 12 },
        { id: 44, ad: 'Staj II', kredi: 0, akts: 5, ders_kodu: '251141501', tul: '0+0+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 7, aciklama: null, sinif: 4, akademisyen_id: null },
        { id: 45, ad: 'Seçmeli Ders III', kredi: 9, akts: 10, ders_kodu: '251141SEÇ', tul: '9+0+0', zorunlu_sec: 'Seçmeli', ogretim_sekli: 'Yüz Yüze', yariyil: 7, aciklama: null, sinif: 4, akademisyen_id: null },
        { id: 46, ad: 'Araştırma Projesi II', kredi: 3, akts: 5, ders_kodu: '251142101', tul: '1+2+0', zorunlu_sec: 'Zorunlu', ogretim_sekli: 'Yüz Yüze', yariyil: 8, aciklama: null, sinif: 4, akademisyen_id: null },
        { id: 47, ad: 'Seçmeli Ders IV', kredi: 20, akts: 25, ders_kodu: '251142SEÇ', tul: '15+5+0', zorunlu_sec: 'Seçmeli', ogretim_sekli: 'Yüz Yüze', yariyil: 8, aciklama: null, sinif: 4, akademisyen_id: null },
        { id: 48, ad: 'ömer ve bilimleri', kredi: 3, akts: 5, ders_kodu: '24256666', tul: null, zorunlu_sec: null, ogretim_sekli: null, yariyil: 1, aciklama: null, sinif: null, akademisyen_id: null }
      ]
      ,
      {
        validate: true,
        ignoreDuplicates: true
      }
    );

    console.log('dersler elendi');
  } catch (err) {
    console.error('dersler eklenirken hata', err);
  } finally {
    await sequelize.close();
  }
}

seedDersler();