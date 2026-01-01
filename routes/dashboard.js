const express = require("express");
const router = express.Router();
const studentModel = require("../models/student.model");


//giriş kontrol tüm sayfalarımızda var 
//kullanıcıların sonradan url değiştirerek giriş yapmadan siteye bağlanmasının önüne geçmeye çalışıyoruz 
function girisKontrol(req, res, next) {
    if (!req.session.kullanici) {
        return res.redirect("/");
    }
    next();
}



//getle siteye ilk girişte model dosyamızda ki sorgu fonksiyonlarından işimize yarayanları çekiyoruz
//async ve await kullanımıyla da bu bilgiler gelmeden işleme devam edilmiyor ki her zaman güncel bilgilerimiz olsun 
router.get("/", girisKontrol, async (req, res, next) => {
    console.log("dashboard route deneme");

    try {
        const id = req.session.kullanici.id;

        const ogrenci = await studentModel.ogrenciBilgiGetir(id);
        const detay = await studentModel.ogrenciDetay(id);
        const duyurular = await studentModel.getirOgrenciDuyurulari(id);

        res.render("dashboardOgr", {
            kullanici: req.session.kullanici,
            ogrenci,
            detay,
            duyurular // Pass to view
        });

    } catch (err) {
        next(err);
    }

});

// GET /dashboardOgr/duyurular - Öğrenci Duyuruları
router.get("/duyurular", girisKontrol, async (req, res, next) => {
    try {
        const id = req.session.kullanici.id;

        const ogrenci = await studentModel.ogrenciBilgiGetir(id);
        const detay = await studentModel.ogrenciDetay(id);
        const duyurular = await studentModel.getirOgrenciDuyurulari(id);

        res.render("studentDuyuru", {
            kullanici: req.session.kullanici,
            ogrenci,
            detay,
            duyurular
        });

    } catch (err) {
        next(err);
    }
});

module.exports = router;