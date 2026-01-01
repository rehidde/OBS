const { Kullanici, Akademisyen, Dersler, OgrenciDersleri, DersProgrami, Duyurular, Mesajlar } = require('./index');


async function getirAkademisyenBilgi(kullaniciId) {
    const user = await Kullanici.findOne({
        attributes: ['id', 'ad', 'soyad', 'rol', 'foto_url'],
        include: [{
            model: Akademisyen,
            as: 'akademisyen',
            attributes: ['id', 'unvan', 'kullanici_id']
        }],
        where: { id: kullaniciId },

    });
    return user ? user.get({ plain: true }) : null;
}

async function getirVerilenDersler(kullaniciId) {
    const teacher = await Akademisyen.findOne({
        where: { kullanici_id: kullaniciId },
        raw: true
    });

    if (!teacher) return [];

    const dersler = await Dersler.findAll({
        where: { akademisyen_id: teacher.id },
        order: [['yariyil', 'ASC'], ['ad', 'ASC']],
        raw: true
    });

    return dersler;
}

async function getirDersiAlanOgrenciler(dersId) {
    const ogrenciler = await OgrenciDersleri.findAll({
        where: { ders_id: dersId },
        include: [{
            model: Kullanici,
            as: 'ogrenci',
            attributes: ['id', 'numara', 'ad', 'soyad', 'foto_url']
        }],
        order: [[{ model: Kullanici, as: 'ogrenci' }, 'ad', 'ASC']],

    });

    return ogrenciler.map(o => o.get({ plain: true }));
}


function hesaplaHarfNotu(puan) {
    if (puan >= 90) return 'AA';
    if (puan >= 80) return 'BA';
    if (puan >= 75) return 'BB';
    if (puan >= 70) return 'CB';
    if (puan >= 60) return 'CC';
    if (puan >= 50) return 'DC';
    if (puan >= 40) return 'DD';
    if (puan >= 30) return 'FD';
    return 'FF';
    return 'FF';
}


async function getirDersProgrami(kullaniciId) {
    const teacher = await Akademisyen.findOne({ where: { kullanici_id: kullaniciId } });
    if (!teacher) return [];

    const dersler = await Dersler.findAll({
        where: { akademisyen_id: teacher.id },
        include: [{
            model: DersProgrami,
            as: 'program'
        }],
        raw: false
    });

    let programList = [];
    dersler.forEach(ders => {
        if (ders.program && ders.program.length > 0) {
            ders.program.forEach(p => {
                programList.push({
                    ders_ad: ders.ad,
                    gun: p.gun,
                    baslangic: p.baslangic_saati,
                    bitis: p.bitis_saati,
                    derslik: p.derslik
                });
            });
        }
    });

    const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
    programList.sort((a, b) => {
        const dayA = days.indexOf(a.gun);
        const dayB = days.indexOf(b.gun);
        if (dayA !== dayB) return dayA - dayB;
        return a.baslangic.localeCompare(b.baslangic);
    });

    return programList;
}



async function getirDuyurular(kullaniciId) {
    const teacher = await Akademisyen.findOne({ where: { kullanici_id: kullaniciId } });
    if (!teacher) return [];

    const duyurular = await Duyurular.findAll({
        where: { akademisyen_id: teacher.id },
        order: [['tarih', 'DESC']],
        raw: true
    });
    return duyurular;
}


async function duyuruOlustur(kullaniciId, baslik, icerik, dersId = null) {
    const teacher = await Akademisyen.findOne({ where: { kullanici_id: kullaniciId } });
    if (!teacher) throw new Error("Akademisyen bulunamadı.");

    await Duyurular.create({
        baslik: baslik,
        icerik: icerik,
        ders_id: dersId === "" ? null : dersId,
        akademisyen_id: teacher.id
    });
}



/*

async function mesajGonder(gonderenId, aliciNo, konu, icerik) {

    const alici = await Kullanici.findOne({ where: { numara: aliciNo } });
    if (!alici) ("Bu numaraya sahip bir kullanıcı bulunamadı.");

    await Mesajlar.create({
        gonderen_id: gonderenId,
        alici_id: alici.id,
        konu: konu,
        icerik: icerik
    });
}
    

async function gelenKutusu(kullaniciId) {
    const mesajlar = await Mesajlar.findAll({
        where: { alici_id: kullaniciId },
        include: [{
            model: Kullanici,
            as: 'gonderen',
            attributes: ['ad', 'soyad', 'numara', 'rol']
        }],
        order: [['tarih', 'DESC']],
        raw: true,
        nest: true
    });
    return mesajlar;
}

async function gidenKutusu(kullaniciId) {
    const mesajlar = await Mesajlar.findAll({
        where: { gonderen_id: kullaniciId },
        include: [{
            model: Kullanici,
            as: 'alici',
            attributes: ['ad', 'soyad', 'numara', 'rol']
        }],
        order: [['tarih', 'DESC']],
        raw: true,
        nest: true
    });
    return mesajlar;
}
    */

async function notKaydet(ogrenciId, dersId, notu) {
    const harf = hesaplaHarfNotu(notu);


    await OgrenciDersleri.update(
        {
            notu: notu,
            harf_notu: harf
        },
        {
            where: {
                ogrenci_id: ogrenciId,
                ders_id: dersId
            }
        }
    );
}

module.exports = {
    getirAkademisyenBilgi,
    getirVerilenDersler,
    getirDersiAlanOgrenciler,
    notKaydet,
    getirDersProgrami,
    getirDuyurular,
    duyuruOlustur
};
