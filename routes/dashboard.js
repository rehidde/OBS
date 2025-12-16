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
    console.log("dashboard route deneme");

    try {
        const id = req.session.kullanici.id;

        const ogrenci = await studentModel.ogrenciBilgiGetir(id);
    

         res.render("dashboardOgr", {kullanici: req.session.kullanici,
            ogrenci
         });

        } catch (err) {
        next(err);
    }

});

module.exports = router;