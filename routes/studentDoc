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
    console.log("öğrenci belgesi router deneme");

    try {
        const id = req.session.kullanici.id;

        const ogrenci = await studentModel.ogrenciBilgiGetir(id);
        const detay = await studentModel.ogrenciDetay(id);

        res.render("studentDoc", {
            title: "Öğrenci Belgesi",
            kullanici: req.session.kullanici,
            ogrenci,
            detay
        });

    } catch (err) {
        next(err);
    }
});
module.exports = router;
