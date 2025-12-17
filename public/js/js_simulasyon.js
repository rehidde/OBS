const notlarListesi = [
  {
    id: 1,
    aciklama: "Web programlama ders notları",
    ders_kodu: "WEB301",
    dosya_adi: "web.pdf",
    tarih: "10 Ekim 2025",
    tip: "akademisyen",
    kullanici: { ad_soyad: "Prof. Dr. Ayşe Demir" },
    yorumlar: [
      { kullanici: { ad_soyad: "Ahmet Yılmaz" }, icerik: "Teşekkürler hocam" }
    ]
  }
];

const sohbetVerileri = {
  fakulte: [
    {
      icerik: "Akademik takvim yayınlandı",
      tarih: "28 Kasım 2025",
      gonderen: {
        ad_soyad: "Dekanlık",
        numara: "D001",
        email: "dekanlik@edu.tr"
      }
    }
  ],
  bolumum: [],
  tumokul: []
};

module.exports = { notlarListesi, sohbetVerileri };