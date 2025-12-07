const aktifKullanici = {
    
    ad_soyad: 'Ahmet Yılmaz', 
    numara: '242599999',       
    email: 'ahmet.y@ogr.edu.tr',
    rol: 'ogrenci',          
    bolum: 'Bilgisayar Mühendisliği'
};

const notlarListesi = [
    {
        id: 1,
        aciklama: 'Bölümümüz için güncel müfredat notları. Lütfen sadece rehberlik amaçlı kullanın.',
        ders_kodu: 'WEB301',
        dosya_adi: 'WebTasarim_DersNotu.pdf',
        tarih: '10 Ekim 2025 15:30', 
        tip: 'akademisyen',
        kullanici: {
            ad_soyad: 'Prof. Dr. Ayşe Demir',
            numara: 'A12345',
            rol: 'akademisyen'
        },
        
        yorumlar: [
            { kullanici: { ad_soyad: 'Mehmet Kara' }, icerik: 'Teşekkürler hocam, çok yardımcı oldu!' },
            { kullanici: { ad_soyad: 'Ahmet Yılmaz' }, icerik: 'Bu notlar vize için yeterli mi?' }
        ]
    },
];

const sohbetVerileri = {
    fakulte: [
        {
        
            icerik: "Yeni akademik takvim fakülte sayfasında yayınlanmıştır.", 
            tarih: '28 Kasım 2025 10:00', 
            gonderen: {
                ad_soyad: 'Dekanlık',
                numara: 'D0001', 
                email: 'dekanlik@edu.tr'
            }
        },
    ],
    bolumum: [
        {
            icerik: "Bölüm Başkanınızın mesajıdır: Siber güvenlik seminerine katılım zorunludur.",
            tarih: '28 Kasım 2025 14:00',
            gonderen: {
                ad_soyad: 'Doç. Dr. Canan Akın',
                numara: 'A54321',
                email: 'canan.akin@edu.tr'
            }
        },
    ],
    tumokul: [
         {
            icerik: "Yarın kampüs genelinde elektrik kesintisi olacaktır.",
            tarih: '28 Kasım 2025 16:00',
            gonderen: {
                ad_soyad: 'Rektörlük',
                numara: 'R0001',
                email: 'rektorluk@edu.tr'
            }
        },
    ]
};

module.exports = {
    aktifKullanici,
    notlarListesi,  
    sohbetVerileri
};