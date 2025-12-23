//model dosyamızın amacı veritabanı sorgularını yaptığımız fonksiyonları tutmak ve sonuçlarını dışarıya export etmek
//bu sayfa dışında veritabanı sorguları yapmayalım
const db = require('../config/db');

// isimdenBul fonksiyonunu sadece login için yazdım onun dışında kullanmayalım
async function isimdenBul(id, sifre) {
    const [rows] = await db.query(
        `SELECT id, ad, soyad, rol
         FROM Kullanici
         WHERE id = ? AND sifre = ?`,
        [id, sifre]
    );
    return rows[0];
}

// TRANSCRIPT - öğrenci temel bilgileri
async function ogrenciBilgiGetir(id) {
    const [rows] = await db.query(
        `SELECT ad, soyad, numara, tc, foto_url
         FROM Kullanici
         WHERE id = ?`,
        [id]
    );
    return rows[0];
}

// Öğrencinin dersleri
//not girme kısımlarını daha yazmadım şimdilik nulluyorum değer gelmezse
async function ogrenciDersleriGetir(ogrenciId) {
  const [rows] = await db.query(`
    SELECT
      od.kullanici_id AS ogrenci_id,
      d.id AS ders_id,
      d.ders_kodu,
      d.ad AS ders_ad,
      d.kredi,
      d.akts,
      d.yariyil,
      IFNULL(odr.notu, NULL) AS notu,
      IFNULL(odr.harf_notu, 'Atanmadı') AS harf_notu,
      IFNULL(odr.durum, 'Devam Ediyor') AS durum
    FROM ogrencidetay od
    JOIN dersler d ON d.sinif = CAST(SUBSTRING_INDEX(od.sinif, ' ', 1) AS UNSIGNED)
    LEFT JOIN ogrencidersleri odr
      ON odr.ogrenci_id = od.kullanici_id
      AND odr.ders_id = d.id
    WHERE od.kullanici_id = ?
    ORDER BY d.yariyil, d.ad
  `, [ogrenciId]);

  return rows;
}

async function ogrenciDetay(kullanici_id) {
    const [rows] = await db.query(
        `SELECT anne, baba, dogum, kayit, egitim, durum, sinif, puan, program FROM OgrenciDetay
        WHERE kullanici_id = ?`,
        [kullanici_id]
    );
    return rows[0];
    
}


async function mufredatGetir() {
  const [rows] = await db.query(`
    SELECT
      yariyil,
      ders_kodu,
      ad,
      tul,
      zorunlu_sec,
      akts,
      ogretim_sekli
    FROM dersler
    ORDER BY yariyil, ders_kodu
  `);
  return rows;
}

module.exports = {
    isimdenBul,
    ogrenciBilgiGetir,
    ogrenciDersleriGetir,
    ogrenciDetay,
    mufredatGetir
};