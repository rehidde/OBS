//model dosyamızın amacı veritabanı sorgularını yaptığımız fonksiyonları tutmak ve sonuçlarını dışarıya export etmek
//bu sayfa dışında veritabanı sorguları yapmayalım
const { Kullanici, OgrenciDetay, Dersler, OgrenciDersleri, Akademisyen, Duyurular } = require('./index');

// isimdenBul fonksiyonunu sadece login için yazdım onun dışında kullanmayalım
async function isimdenBul(girdiId, sifre) {
  const { Op } = require('sequelize');

  const user = await Kullanici.findOne({
    attributes: ['id', 'ad', 'soyad', 'rol', 'numara'],
    where: {
      [Op.or]: [
        { numara: girdiId },
        { id: girdiId }
      ],
      sifre: sifre
    },
    raw: true
  });
  return user;
}


async function ogrenciBilgiGetir(id) {
  const user = await Kullanici.findOne({
    attributes: ['ad', 'soyad', 'numara', 'tc', 'foto_url'],
    where: { id: id },
    raw: true
  });
  return user;
}


async function ogrenciDersleriGetir(ogrenciId) {

  const detay = await OgrenciDetay.findOne({ where: { kullanici_id: ogrenciId } });
  if (!detay) return [];

  const sinifStr = detay.sinif;
  const sinifInt = parseInt(sinifStr);

  const tumDersler = await Dersler.findAll({
    where: { sinif: sinifInt },
    order: [['yariyil', 'ASC'], ['ad', 'ASC']],
    raw: true
  });

  const alinanDersler = await OgrenciDersleri.findAll({
    where: { ogrenci_id: ogrenciId },
    raw: true
  });


  const result = tumDersler.map(ders => {
    const alinan = alinanDersler.find(ad => ad.ders_id === ders.id);
    return {
      ogrenci_id: ogrenciId,
      ders_id: ders.id,
      ders_kodu: ders.ders_kodu,
      ders_ad: ders.ad,
      kredi: ders.kredi,
      akts: ders.akts,
      yariyil: ders.yariyil,
      notu: alinan ? alinan.notu : null,
      harf_notu: alinan && alinan.harf_notu ? alinan.harf_notu : 'Atanmadı',
      durum: alinan && alinan.durum ? alinan.durum : 'Devam Ediyor'
    };
  });

  return result;
}

async function ogrenciDetay(kullanici_id) {
  const detay = await OgrenciDetay.findOne({
    attributes: ['anne', 'baba', 'dogum', 'kayit', 'egitim', 'durum', 'sinif', 'puan', 'program'],
    where: { kullanici_id: kullanici_id },
    raw: true
  });
  return detay;
}


async function mufredatGetir() {
  const dersler = await Dersler.findAll({
    attributes: ['yariyil', 'ders_kodu', 'ad', 'tul', 'zorunlu_sec', 'akts', 'ogretim_sekli'],
    include: [{
      model: Akademisyen,
      as: 'akademisyen',
      attributes: ['unvan', 'ad', 'soyad']
    }],
    order: [['yariyil', 'ASC'], ['ders_kodu', 'ASC']],
    raw: true
  });
  return dersler;
}


async function getirOgrenciDuyurulari(ogrenciId) {
  const { Op } = require('sequelize');


  const enrollments = await OgrenciDersleri.findAll({
    where: { ogrenci_id: ogrenciId },
    attributes: ['ders_id'],
    raw: true
  });
  const dersIds = enrollments.map(e => e.ders_id);

  const duyurular = await Duyurular.findAll({
    where: {
      [Op.or]: [
        { ders_id: null },
        { ders_id: { [Op.in]: dersIds } }
      ]
    },
    include: [{
      model: Akademisyen,
      as: 'akademisyen',
      attributes: ['unvan', 'ad', 'soyad']
    }, {
      model: Dersler,
      as: 'ders',
      attributes: ['ad']
    }],
    order: [['tarih', 'DESC']],
    raw: true,
    nest: true
  });

  return duyurular;
}

module.exports = {
  isimdenBul,
  ogrenciBilgiGetir,
  ogrenciDersleriGetir,
  ogrenciDetay,
  mufredatGetir,
  getirOgrenciDuyurulari
};