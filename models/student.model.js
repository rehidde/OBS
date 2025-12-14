const db = require('../config/db');

// LOGIN (BUNA DOKUNMUYORUZ)
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
async function ogrenciDersleriGetir(ogrenciId) {
    const [rows] = await db.query(
        `SELECT ders_ad, kredi, akts, notu, ogretmen
         FROM OgrenciDersleri
         WHERE ogrenci_id = ?`,
        [ogrenciId]
    );
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

module.exports = {
    isimdenBul,
    ogrenciBilgiGetir,
    ogrenciDersleriGetir,
    ogrenciDetay
};