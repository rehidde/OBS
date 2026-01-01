const sequelize = require('../config/db');
const { ogrencidetay } = require('../models');

async function seedOgrencidetay() {
    try {
        await sequelize.authenticate();

        await ogrencidetay.bulkCreate(


            [
                { kullanici_id: '242523', anne: 'Birben', baba: 'Umman', dogum: '06.04.2002 / TÜRKİYE CUMHURİYETİ', kayit: '18.08.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '2. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242525', anne: 'Nazi', baba: 'Bilgütay', dogum: '11.09.2005 / TÜRKİYE CUMHURİYETİ', kayit: '16.08.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '2. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242528', anne: 'İde', baba: 'Kocabaş', dogum: '02.10.2003 / TÜRKİYE CUMHURİYETİ', kayit: '18.02.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '1. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242535', anne: 'Aral', baba: 'Toy', dogum: '28.11.2001 / TÜRKİYE CUMHURİYETİ', kayit: '02.03.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '2. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242540', anne: 'Rumeysa', baba: 'Dolun', dogum: '01.04.2004 / TÜRKİYE CUMHURİYETİ', kayit: '12.08.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '3. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242546', anne: 'Mufide', baba: 'Çokan', dogum: '23.11.2004 / TÜRKİYE CUMHURİYETİ', kayit: '18.11.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '2. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242570', anne: 'Buşra', baba: 'Sancak', dogum: '03.11.2005 / TÜRKİYE CUMHURİYETİ', kayit: '21.07.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '3. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242580', anne: 'Kefser', baba: 'Çelikkan', dogum: '08.07.2001 / TÜRKİYE CUMHURİYETİ', kayit: '01.09.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '3. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242584', anne: 'Akise', baba: 'Terlan', dogum: '02.01.2007 / TÜRKİYE CUMHURİYETİ', kayit: '26.12.2024', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '2. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 0 },
                { kullanici_id: '242596', anne: 'Gülfari', baba: 'Bayzettin', dogum: '25.07.2004 / TÜRKİYE CUMHURİYETİ', kayit: '24.03.2025', egitim: 'ÖRGÜN ÖĞRETİM / 4', durum: 'Aktif', sinif: '2. SINIF', program: 'KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Mühendisliği', puan: 1000 }
            ],
            {
                validate: true,
                ignoreDuplicates: true
            }
        );

        console.log('ogrencidetay eklendi');
    } catch (err) {
        console.error('ogrencidetaylari eklenirken hata', err);
    } finally {
        await sequelize.close();
    }
}

seedOgrencidetay();

