// Admin paneli route dosyası

const express = require("express");
const router = express.Router();
const adminModel = require("../models/admin.model");

//giriş kontrol tüm sayfalarımızda var 
//kullanıcıların sonradan url değiştirerek giriş yapmadan siteye bağlanmasının önüne geçmeye çalışıyoruz 
function girisKontrol(req, res, next) {
    if (!req.session.kullanici) {
        return res.redirect("/");
    }

    if (req.session.kullanici.rol !== 'admin') {
        return res.redirect("/");
    }
    next();
}


router.get("/", girisKontrol, async (req, res, next) => {
    try {
        // İstatistikleri getir
        const istatistikler = await adminModel.istatistikleriGetir();

        res.render("dashboardAdmin", {
            kullanici: req.session.kullanici,
            istatistikler
        });
    } catch (err) {
        next(err);
    }
});

// ===================== ÖĞRENCİ YÖNETİMİ =====================

// GET /dashboardAdmin/ogrenciler - Öğrenci listesi
router.get("/ogrenciler", girisKontrol, async (req, res, next) => {
    try {
        const ogrenciler = await adminModel.tumOgrencileriGetir();

        res.render("adminOgrenciler", {
            kullanici: req.session.kullanici,
            ogrenciler,
            mesaj: null
        });
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/ogrenci/ekle - Yeni öğrenci ekle
router.post("/ogrenci/ekle", girisKontrol, async (req, res, next) => {
    try {
        const { numara, ad, soyad, email, program, durum } = req.body;

        await adminModel.ogrenciEkle({
            numara, ad, soyad, email, program, durum
        });

        res.redirect("/dashboardAdmin/ogrenciler");
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/ogrenci/guncelle/:id - Öğrenci güncelle
router.post("/ogrenci/guncelle/:id", girisKontrol, async (req, res, next) => {
    try {
        const id = req.params.id;
        const { numara, ad, soyad, email, program, durum } = req.body;

        await adminModel.ogrenciGuncelle(id, {
            numara, ad, soyad, email, program, durum
        });

        res.redirect("/dashboardAdmin/ogrenciler");
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/ogrenci/sil/:id - Öğrenci sil
router.post("/ogrenci/sil/:id", girisKontrol, async (req, res, next) => {
    try {
        const id = req.params.id;
        await adminModel.ogrenciSil(id);

        res.redirect("/dashboardAdmin/ogrenciler");
    } catch (err) {
        next(err);
    }
});

// ===================== AKADEMİSYEN YÖNETİMİ =====================

// GET /dashboardAdmin/akademisyenler - Akademisyen listesi
router.get("/akademisyenler", girisKontrol, async (req, res, next) => {
    try {
        const akademisyenler = await adminModel.tumAkademisyenleriGetir();

        res.render("adminAkademisyenler", {
            kullanici: req.session.kullanici,
            akademisyenler,
            mesaj: null
        });
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/akademisyen/ekle - Yeni akademisyen ekle
router.post("/akademisyen/ekle", girisKontrol, async (req, res, next) => {
    try {
        const { ad, soyad, email, unvan } = req.body;

        await adminModel.akademisyenEkle({
            ad, soyad, email, unvan
        });

        res.redirect("/dashboardAdmin/akademisyenler");
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/akademisyen/guncelle/:id - Akademisyen güncelle
router.post("/akademisyen/guncelle/:id", girisKontrol, async (req, res, next) => {
    try {
        const id = req.params.id;
        const { ad, soyad, email, unvan } = req.body;

        await adminModel.akademisyenGuncelle(id, {
            ad, soyad, email, unvan
        });

        res.redirect("/dashboardAdmin/akademisyenler");
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/akademisyen/sil/:id - Akademisyen sil
router.post("/akademisyen/sil/:id", girisKontrol, async (req, res, next) => {
    try {
        const id = req.params.id;
        await adminModel.akademisyenSil(id);

        res.redirect("/dashboardAdmin/akademisyenler");
    } catch (err) {
        next(err);
    }
});

// ===================== DERS YÖNETİMİ =====================

// GET /dashboardAdmin/dersler - Ders listesi
router.get("/dersler", girisKontrol, async (req, res, next) => {
    try {
        const dersler = await adminModel.tumDersleriGetir();
        const akademisyenler = await adminModel.tumAkademisyenleriGetir();

        res.render("adminDersler", {
            kullanici: req.session.kullanici,
            dersler,
            akademisyenler,
            mesaj: null
        });
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/ders/ekle - Yeni ders ekle
router.post("/ders/ekle", girisKontrol, async (req, res, next) => {
    try {
        const { ders_kodu, ad, yariyil, kredi, akts, akademisyen_id } = req.body;

        await adminModel.dersEkle({
            ders_kodu, ad, yariyil, kredi, akts,
            akademisyen_id: akademisyen_id || null
        });

        res.redirect("/dashboardAdmin/dersler");
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/ders/guncelle/:id - Ders güncelle
router.post("/ders/guncelle/:id", girisKontrol, async (req, res, next) => {
    try {
        const id = req.params.id;
        const { ders_kodu, ad, yariyil, kredi, akts, akademisyen_id } = req.body;

        await adminModel.dersGuncelle(id, {
            ders_kodu, ad, yariyil, kredi, akts,
            akademisyen_id: akademisyen_id || null
        });

        res.redirect("/dashboardAdmin/dersler");
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/ders/sil/:id - Ders sil
router.post("/ders/sil/:id", girisKontrol, async (req, res, next) => {
    try {
        const id = req.params.id;
        await adminModel.dersSil(id);

        res.redirect("/dashboardAdmin/dersler");
    } catch (err) {
        next(err);
    }
});

// ===================== DUYURU YÖNETİMİ =====================

// GET /dashboardAdmin/duyurular - Duyuru listesi ve form
router.get("/duyurular", girisKontrol, async (req, res, next) => {
    try {
        const duyurular = await adminModel.tumDuyurulariGetir();

        res.render("adminDuyurular", {
            kullanici: req.session.kullanici,
            duyurular,
            mesaj: null
        });
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAdmin/duyuru/ekle - Yeni duyuru ekle
router.post("/duyuru/ekle", girisKontrol, async (req, res, next) => {
    try {
        const { baslik, icerik, hedef } = req.body;

        await adminModel.adminDuyuruOlustur(baslik, icerik, hedef);

        res.redirect("/dashboardAdmin/duyurular");
    } catch (err) {
        next(err);
    }
});

module.exports = router;
