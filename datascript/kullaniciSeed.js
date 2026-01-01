const sequelize = require('../config/db');
const { Kullanici } = require('../models');

async function seedKullanici() {
    try {
        await sequelize.authenticate();

        await Kullanici.bulkCreate(

            [
                { id: '101', rol: 'akademisyen', numara: '101', sifre: '123', ad: 'Ahmet', soyad: 'Yılmaz', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '102', rol: 'akademisyen', numara: '102', sifre: '123', ad: 'Ayşe', soyad: 'Kaya', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '103', rol: 'akademisyen', numara: '103', sifre: '123', ad: 'Mehmet', soyad: 'Demir', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '104', rol: 'akademisyen', numara: '104', sifre: '123', ad: 'Zeynep', soyad: 'Çelik', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '105', rol: 'akademisyen', numara: '105', sifre: '123', ad: 'Ali', soyad: 'Vural', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '106', rol: 'akademisyen', numara: '106', sifre: '123', ad: 'Elif', soyad: 'Sönmez', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '107', rol: 'akademisyen', numara: '107', sifre: '123', ad: 'Mustafa', soyad: 'Şahin', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '108', rol: 'akademisyen', numara: '108', sifre: '123', ad: 'Burcu', soyad: 'Ekinci', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '109', rol: 'akademisyen', numara: '109', sifre: '123', ad: 'Caner', soyad: 'Öz', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '110', rol: 'akademisyen', numara: '110', sifre: '123', ad: 'Derya', soyad: 'Kurt', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '111', rol: 'akademisyen', numara: '111', sifre: '123', ad: 'Fatih', soyad: 'Arslan', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '112', rol: 'akademisyen', numara: '112', sifre: '123', ad: 'Gökhan', soyad: 'Yıldız', foto_url: '/img/default.jpg', tc: '11111111111' },
                { id: '242523', rol: 'ogrenci', numara: '242523', sifre: '1354', ad: 'Baltaş', soyad: 'Yaman', foto_url: '/img/default.jpg', tc: '43167390973' },
                { id: '242525', rol: 'ogrenci', numara: '242525', sifre: '1347', ad: 'Naide', soyad: 'Akçay', foto_url: '/img/default.jpg', tc: '68702343830' },
                { id: '242528', rol: 'ogrenci', numara: '242528', sifre: '5441', ad: 'Kâzime', soyad: 'Çetin', foto_url: '/img/default.jpg', tc: '76609837413' },
                { id: '242535', rol: 'ogrenci', numara: '242535', sifre: '7448', ad: 'Güzey', soyad: 'Yüksel', foto_url: '/img/default.jpg', tc: '96172581026' },
                { id: '242540', rol: 'ogrenci', numara: '242540', sifre: '5915', ad: 'Fersan', soyad: 'Güçlü', foto_url: '/img/default.jpg', tc: '26059601837' },
                { id: '242546', rol: 'ogrenci', numara: '242546', sifre: '8068', ad: 'Bayzettin', soyad: 'Soylu', foto_url: '/img/default.jpg', tc: '29416281617' },
                { id: '242570', rol: 'ogrenci', numara: '242570', sifre: '3297', ad: 'Anka', soyad: 'Karadeniz', foto_url: '/img/default.jpg', tc: '20736636156' },
                { id: '242580', rol: 'ogrenci', numara: '242580', sifre: '6685', ad: 'Çıvgın', soyad: 'Bilge', foto_url: '/img/default.jpg', tc: '76495053499' },
                { id: '242584', rol: 'ogrenci', numara: '242584', sifre: '8337', ad: 'Amaç', soyad: 'Ülker', foto_url: '/img/default.jpg', tc: '98318436062' },
                { id: '242596', rol: 'ogrenci', numara: '242596', sifre: '2360', ad: 'Uğur', soyad: 'Sezer', foto_url: '/img/default.jpg', tc: '50452822010' },
                { id: 'ADM001', rol: 'admin', numara: 'admin', sifre: 'admin', ad: 'Sistem', soyad: 'Yöneticisi', foto_url: null, tc: null }
            ]

        );

        console.log('kullanici verileri eklendi');
    } catch (error) {
        console.error('kullanici verileri hata', error);
    } finally {
        await sequelize.close();
    }
}

seedKullanici();
