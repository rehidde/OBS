const sequelize = require('../config/db');
const { Akademisyen } = require('../models');

async function seedAkademisyen() {
    try {
        await sequelize.authenticate();

        await Akademisyen.bulkCreate(
            [
                {
                    id: 1,
                    ad: 'Ahmet',
                    soyad: 'Yılmaz',
                    unvan: 'Prof. Dr.',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '101'
                },
                {
                    id: 2,
                    ad: 'Ayşe',
                    soyad: 'Kaya',
                    unvan: 'Doç. Dr.',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '102'
                },
                {
                    id: 3,
                    ad: 'Mehmet',
                    soyad: 'Demir',
                    unvan: 'Dr. Öğr. Üyesi',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '103'
                },
                {
                    id: 4,
                    ad: 'Zeynep',
                    soyad: 'Çelik',
                    unvan: 'Dr. Öğr. Üyesi',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '104'
                },
                {
                    id: 5,
                    ad: 'Ali',
                    soyad: 'Vural',
                    unvan: 'Öğr. Gör.',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '105'
                },
                {
                    id: 6,
                    ad: 'Elif',
                    soyad: 'Sönmez',
                    unvan: 'Öğr. Gör.',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '106'
                },
                {
                    id: 7,
                    ad: 'Mustafa',
                    soyad: 'Şahin',
                    unvan: 'Prof. Dr.',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '107'
                },
                {
                    id: 8,
                    ad: 'Burcu',
                    soyad: 'Ekinci',
                    unvan: 'Doç. Dr.',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '108'
                },
                {
                    id: 9,
                    ad: 'Caner',
                    soyad: 'Öz',
                    unvan: 'Dr. Öğr. Üyesi',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '109'
                },
                {
                    id: 10,
                    ad: 'Derya',
                    soyad: 'Kurt',
                    unvan: 'Dr. Öğr. Üyesi',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '110'
                },
                {
                    id: 11,
                    ad: 'Fatih',
                    soyad: 'Arslan',
                    unvan: 'Öğr. Gör.',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '111'
                },
                {
                    id: 12,
                    ad: 'Gökhan',
                    soyad: 'Yıldız',
                    unvan: 'Dr. Öğr. Üyesi',
                    foto_url: '/img/default.jpg',
                    kullanici_id: '112'
                }
            ],
            {
                validate: true,
                ignoreDuplicates: true
            }
        );

        console.log('akademisyenler ekklendi');
    } catch (err) {
        console.error('akademisyenler eklenirken hata', err);
    } finally {
        await sequelize.close();
    }
}

seedAkademisyen();