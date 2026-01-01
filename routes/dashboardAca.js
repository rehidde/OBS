const express = require("express");
const router = express.Router();
const teacherModel = require("../models/teacher.model");

function girisKontrol(req, res, next) {
    if (!req.session.kullanici || req.session.kullanici.rol !== 'akademisyen') {
        return res.redirect("/");
    }
    next();
}

// GET /dashboardAkd
router.get("/", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;
        const bilgi = await teacherModel.getirAkademisyenBilgi(id);

        // If no linked academician record found, might handle error or show limited view
        const adSoyad = bilgi && bilgi.akademisyen
            ? `${bilgi.akademisyen.unvan} ${bilgi.ad} ${bilgi.soyad}`
            : `${bilgi.ad} ${bilgi.soyad}`;

        const profilFoto = bilgi ? bilgi.foto_url : null;


        const dersProgrami = await teacherModel.getirDersProgrami(id);

        res.render("dashboardAca", {
            title: "Akademisyen Paneli",
            adSoyad,
            profilFoto,
            sonGiris: new Date().toLocaleString('tr-TR'),
            dersProgrami: dersProgrami || []
        });

    } catch (err) {
        next(err);
    }
});

// GET /dashboardAkd/derslerim
router.get("/derslerim", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;
        const bilgi = await teacherModel.getirAkademisyenBilgi(id);
        const dersler = await teacherModel.getirVerilenDersler(id);

        const adSoyad = bilgi && bilgi.akademisyen
            ? `${bilgi.akademisyen.unvan} ${bilgi.ad} ${bilgi.soyad}`
            : `${bilgi.ad} ${bilgi.soyad}`;

        res.render("DerslerAka", {
            title: "Derslerim",
            adSoyad,
            dersler
        });

    } catch (err) {
        next(err);
    }
});

// GET /dashboardAkd/not-girisi
router.get("/not-girisi", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;
        const bilgi = await teacherModel.getirAkademisyenBilgi(id);
        const dersler = await teacherModel.getirVerilenDersler(id);

        const adSoyad = bilgi && bilgi.akademisyen
            ? `${bilgi.akademisyen.unvan} ${bilgi.ad} ${bilgi.soyad}`
            : `${bilgi.ad} ${bilgi.soyad}`;

        res.render("notGirisi", {
            title: "Not Girişi - Ders Seçimi",
            adSoyad,
            dersler
        });
    } catch (err) {
        next(err);
    }
});

// GET /dashboardAkd/not-girisi/:dersId
router.get("/not-girisi/:dersId", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;
        const dersId = req.params.dersId;

        // Security check: Does this teacher own this course?
        // Simplifying: fetching all teacher courses and checking ID
        const dersler = await teacherModel.getirVerilenDersler(id);
        const secilenDers = dersler.find(d => d.id == dersId);

        if (!secilenDers) {
            return res.status(403).render('error', { message: 'Bu derse erişim yetkiniz yok.' });
            // Or redirect back with flash message
        }

        const ogrenciler = await teacherModel.getirDersiAlanOgrenciler(dersId);

        const bilgi = await teacherModel.getirAkademisyenBilgi(id);
        const adSoyad = bilgi && bilgi.akademisyen
            ? `${bilgi.akademisyen.unvan} ${bilgi.ad} ${bilgi.soyad}`
            : `${bilgi.ad} ${bilgi.soyad}`;

        res.render("notGirisiS", {
            title: `Not Girişi - ${secilenDers.ad}`,
            adSoyad,
            ders: secilenDers,
            ogrenciler
        });

    } catch (err) {
        next(err);
    }
});

// POST /dashboardAkd/not-girisi/:dersId
router.post("/not-girisi/:dersId", girisKontrol, async (req, res, next) => {
    try {
        const dersId = req.params.dersId;
        const { ogrenciId, notu } = req.body;

        // Implement logic to save single grade
        // Ensure notu is within 0-100 (server side check)
        const puan = parseInt(notu);
        if (isNaN(puan) || puan < 0 || puan > 100) {
            return res.status(400).json({ success: false, message: 'Geçersiz not.' });
        }

        await teacherModel.notKaydet(ogrenciId, dersId, puan);

        // Assuming AJAX request from frontend for smoother UX, return JSON
        res.json({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Sunucu hatası.' });
    }
});

// GET /dashboardAkd/yoklama - Yoklama İçin Ders Seçimi
router.get("/yoklama", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;
        const bilgi = await teacherModel.getirAkademisyenBilgi(id);
        const dersler = await teacherModel.getirVerilenDersler(id);

        const adSoyad = bilgi && bilgi.akademisyen
            ? `${bilgi.akademisyen.unvan} ${bilgi.ad} ${bilgi.soyad}`
            : `${bilgi.ad} ${bilgi.soyad}`;

        res.render("yoklamaSec", {
            title: "Yoklama Listesi - Ders Seçimi",
            adSoyad,
            dersler
        });
    } catch (err) {
        next(err);
    }
});

// GET /dashboardAkd/yoklama/:dersId - Seçilen Dersin Yoklama Listesi
router.get("/yoklama/:dersId", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;
        const dersId = req.params.dersId;

        // Yetki Kontrolü: Hoca bu dersi veriyor mu?
        const dersler = await teacherModel.getirVerilenDersler(id);
        const secilenDers = dersler.find(d => d.id == dersId);

        if (!secilenDers) {
            return res.status(403).render('error', { message: 'Bu derse erişim yetkiniz yok.' });
        }

        // Derse kayıtlı öğrencileri getir
        const ogrenciler = await teacherModel.getirDersiAlanOgrenciler(dersId);

        const bilgi = await teacherModel.getirAkademisyenBilgi(id);
        const adSoyad = bilgi && bilgi.akademisyen
            ? `${bilgi.akademisyen.unvan} ${bilgi.ad} ${bilgi.soyad}`
            : `${bilgi.ad} ${bilgi.soyad}`;

        res.render("yoklamaListe", {
            title: `Yoklama Listesi - ${secilenDers.ad}`,
            adSoyad,
            ders: secilenDers,
            ogrenciler
        });

    } catch (err) {
        next(err);

    }
});

// GET /dashboardAkd/duyurular - Duyuru Listesi ve Ekleme
router.get("/duyurular", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;
        const bilgi = await teacherModel.getirAkademisyenBilgi(id);
        const duyurular = await teacherModel.getirDuyurular(id);
        const dersler = await teacherModel.getirVerilenDersler(id);

        const adSoyad = bilgi && bilgi.akademisyen
            ? `${bilgi.akademisyen.unvan} ${bilgi.ad} ${bilgi.soyad}`
            : `${bilgi.ad} ${bilgi.soyad}`;

        res.render("Duyurular", {
            title: "Duyurular",
            adSoyad,
            duyurular,
            dersler,
            mesaj: null
        });
    } catch (err) {
        next(err);
    }
});

// POST /dashboardAkd/duyurular - Yeni Duyuru Ekleme
router.post("/duyurular", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;
        const { baslik, icerik, dersId } = req.body;

        await teacherModel.duyuruOlustur(id, baslik, icerik, dersId);

        // Redirect to avoid form resubmission and refresh data
        res.redirect("/dashboardAkd/duyurular");

    } catch (err) {
        next(err);
    }
});




module.exports = router;
