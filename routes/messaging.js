const express = require("express");
const router = express.Router();
const studentModel = require("../models/student.model");

function girisKontrol(req, res, next) {
    if (!req.session.kullanici) {
        return res.redirect("/");
    }
    next();
}

router.get("/", girisKontrol, async (req, res, next) => {
    console.log("mesajlaşma sayfası router deneme");

    try {
        const id = req.session.kullanici.id;

        const ogrenci = await studentModel.ogrenciBilgiGetir(id);
        const detay = await studentModel.ogrenciDetay(id);

        res.render("messaging", {
            title: "mesajlaşma sayfası",
            kullanici: req.session.kullanici,
            ogrenci,
            detay
        });

    } catch (err) {
        next(err);
    }
});
module.exports = router;
