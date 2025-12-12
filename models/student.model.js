const db = require('../config/db');




//bu dosyanın amacı sqlden çektiğimiz öğrencinin
//basit haliyle bilgilerini içeren ve ana sayfada
//öğrenci bilgilerini yansıtmak için kullanmak
//öğrenciDetay bilgileri diğer model dosyalarında olacak


//loginde session için sorgumuz
async function isimdenBul(id, sifre) {
    const[rows] = await db.query(
        `SELECT id, ad , soyad, sifre FROM Kullanici
        WHERE id = ? AND sifre = ?`,
        [id, sifre]

    );
    return rows[0] || null;
    
}

module.exports = { isimdenBul};
