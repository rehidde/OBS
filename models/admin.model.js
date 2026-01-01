// Admin için veritabanı işlemleri
//CRUD işlemleri için
const { Kullanici, Akademisyen, OgrenciDetay, Dersler, Duyurular } = require('./index');


async function tumOgrencileriGetir() {
    const ogrenciler = await Kullanici.findAll({
        where: { rol: 'ogrenci' },
        include: [{
            model: OgrenciDetay,
            as: 'detay',
            attributes: ['program', 'durum', 'kayit', 'sinif']
        }],
        order: [['ad', 'ASC']],
        raw: true,
        nest: true
    });
    return ogrenciler;
}

//düzenleme için
async function ogrenciGetir(id) {
    const ogrenci = await Kullanici.findOne({
        where: { id: id, rol: 'ogrenci' },
        include: [{
            model: OgrenciDetay,
            as: 'detay'
        }],
        raw: true,
        nest: true
    });
    return ogrenci;
}

// ogrenci eklemek için sırasıyla kullanici ve ogrencidetay tablolarına ekleniyor
//sonrasında ogrencidersleri tablosuna idsi verilerek ders atanıyor.
async function ogrenciEkle(data) {
    const { OgrenciDersleri } = require('./index');

    const yeniId = data.numara;

    const yeniKullanici = await Kullanici.create({
        id: yeniId,
        numara: data.numara,
        ad: data.ad,
        soyad: data.soyad,
        email: data.email,
        sifre: data.sifre || '123456',
        rol: 'ogrenci',
        tc: data.tc || null,
        foto_url: data.foto_url || null
    });


    await OgrenciDetay.create({
        kullanici_id: yeniKullanici.id,
        program: data.program,
        durum: data.durum || 'Aktif',
        sinif: data.sinif || '1',
        kayit: data.kayit || new Date().toLocaleDateString('tr-TR'),
        egitim: data.egitim || 'I. Öğretim',
        dogum: data.dogum || null,
        anne: data.anne || null,
        baba: data.baba || null,
        puan: 0
    });


    const sinif = parseInt(data.sinif) || 1;
    const yariyillar = [sinif * 2 - 1, sinif * 2];

    const dersler = await Dersler.findAll({
        where: { yariyil: yariyillar },
        raw: true
    });


    for (const ders of dersler) {
        await OgrenciDersleri.create({
            ogrenci_id: yeniKullanici.id,
            ders_id: ders.id
        });
    }

    return yeniKullanici;
}

//eklemede ki gibi kullanici ve ogrencidetayda ki bilgileri güncelliyor
async function ogrenciGuncelle(id, data) {

    await Kullanici.update({
        numara: data.numara,
        ad: data.ad,
        soyad: data.soyad,
        email: data.email
    }, {
        where: { id: id }
    });


    await OgrenciDetay.update({
        program: data.program,
        durum: data.durum
    }, {
        where: { kullanici_id: id }
    });
}


async function ogrenciSil(id) {

    await OgrenciDetay.destroy({ where: { kullanici_id: id } });
    await Kullanici.destroy({ where: { id: id } });
}


//akademisyenler
async function tumAkademisyenleriGetir() {
    const akademisyenler = await Kullanici.findAll({
        where: { rol: 'akademisyen' },
        include: [{
            model: Akademisyen,
            as: 'akademisyen',
            attributes: ['id', 'unvan']
        }],
        order: [['ad', 'ASC']],
        raw: true,
        nest: true
    });
    return akademisyenler;
}

//tekli sorgu
async function akademisyenGetir(id) {
    const akademisyen = await Kullanici.findOne({
        where: { id: id, rol: 'akademisyen' },
        include: [{
            model: Akademisyen,
            as: 'akademisyen'
        }],
        raw: true,
        nest: true
    });
    return akademisyen;
}

// Yeni akademisyen eklemek için
//kullanicida yazılan id ile, akademisyenler tablosunda ise 
//manuel auto increment ile idleniyorlar
async function akademisyenEkle(data) {

    const yeniId = data.numara;

    const yeniKullanici = await Kullanici.create({
        id: yeniId,
        numara: data.numara || yeniId,
        ad: data.ad,
        soyad: data.soyad,
        sifre: data.sifre || '123456',
        rol: 'akademisyen'
    });


    const sonId = await Akademisyen.max('id') || 0;

    await Akademisyen.create({
        id: sonId + 1,
        kullanici_id: yeniKullanici.id,
        unvan: data.unvan || 'Öğr. Gör.',
        ad: data.ad,
        soyad: data.soyad
    });

    return yeniKullanici;
}

async function akademisyenGuncelle(id, data) {
    await Kullanici.update({
        ad: data.ad,
        soyad: data.soyad,
        email: data.email
    }, {
        where: { id: id }
    });

    await Akademisyen.update({
        unvan: data.unvan
    }, {
        where: { kullanici_id: id }
    });
}

// akademisyen silmek için
async function akademisyenSil(id) {
    await Akademisyen.destroy({ where: { kullanici_id: id } });
    await Kullanici.destroy({ where: { id: id } });
}


// dersler


async function tumDersleriGetir() {
    const dersler = await Dersler.findAll({
        include: [{
            model: Akademisyen,
            as: 'akademisyen',
            attributes: ['id', 'unvan'],
            include: [{
                model: Kullanici,
                as: 'kullanici',
                attributes: ['ad', 'soyad']
            }]
        }],
        order: [['yariyil', 'ASC'], ['ad', 'ASC']],
        raw: true,
        nest: true
    });
    return dersler;
}

//tekli sorgu
async function dersGetir(id) {
    const ders = await Dersler.findOne({
        where: { id: id },
        raw: true
    });
    return ders;
}


async function dersEkle(data) {
    const yeniDers = await Dersler.create({
        ders_kodu: data.ders_kodu,
        ad: data.ad,
        yariyil: data.yariyil,
        kredi: data.kredi || 3,
        akts: data.akts || 5,
        akademisyen_id: data.akademisyen_id || null
    });
    return yeniDers;
}


async function dersGuncelle(id, data) {
    await Dersler.update({
        ders_kodu: data.ders_kodu,
        ad: data.ad,
        yariyil: data.yariyil,
        kredi: data.kredi,
        akts: data.akts,
        akademisyen_id: data.akademisyen_id
    }, {
        where: { id: id }
    });
}


async function dersSil(id) {
    await Dersler.destroy({ where: { id: id } });
}



// duyurular


async function adminDuyuruOlustur(baslik, icerik, hedef) {

    const duyuru = await Duyurular.create({
        baslik: baslik,
        icerik: icerik,
        akademisyen_id: null,
        ders_id: null
    });
    return duyuru;
}


async function tumDuyurulariGetir() {
    const duyurular = await Duyurular.findAll({
        include: [{
            model: Akademisyen,
            as: 'akademisyen',
            required: false,
            include: [{
                model: Kullanici,
                as: 'kullanici',
                attributes: ['ad', 'soyad']
            }]
        }],
        order: [['tarih', 'DESC']],
        raw: true,
        nest: true
    });
    return duyurular;
}

// istatistikler

async function istatistikleriGetir() {
    const ogrenciSayisi = await Kullanici.count({ where: { rol: 'ogrenci' } });
    const akademisyenSayisi = await Kullanici.count({ where: { rol: 'akademisyen' } });
    const dersSayisi = await Dersler.count();
    const duyuruSayisi = await Duyurular.count();

    return {
        ogrenciSayisi,
        akademisyenSayisi,
        dersSayisi,
        duyuruSayisi
    };
}

module.exports = {
    tumOgrencileriGetir,
    ogrenciGetir,
    ogrenciEkle,
    ogrenciGuncelle,
    ogrenciSil,
    tumAkademisyenleriGetir,
    akademisyenGetir,
    akademisyenEkle,
    akademisyenGuncelle,
    akademisyenSil,
    tumDersleriGetir,
    dersGetir,
    dersEkle,
    dersGuncelle,
    dersSil,
    adminDuyuruOlustur,
    tumDuyurulariGetir,
    istatistikleriGetir
};
