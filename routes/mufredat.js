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

router.get("/", girisKontrol, async (req, res, next) => {
        console.log("müfredat sayfası router deneme");
  try {
    const dersler = await studentModel.mufredatGetir();

    res.render("mufredat", {
      title: "Müfredat",
      kullanici: req.session.kullanici,
      dersler
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;