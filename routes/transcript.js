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
    console.log("transcript route deneme");

    try {
        const id = req.session.kullanici.id;

        const ogrenci = await studentModel.ogrenciBilgiGetir(id);
        const dersler = await studentModel.ogrenciDersleriGetir(id);
        const detay = await studentModel.ogrenciDetay(id);

        let toplamNot = 0;
        let toplamKredi = 0;

        dersler.forEach(d => {
            toplamNot += d.notu * d.kredi;
            toplamKredi += d.kredi;
        });

        const ortalama = toplamKredi
            ? (toplamNot / toplamKredi).toFixed(2)
            : "0.00";

        res.render("transcript", {
            title: "Transkript",
            ogrenci,
            dersler,
            detay,
            ortalama
      
        });

    } catch (err) {
        next(err);
    }
});
module.exports = router;
