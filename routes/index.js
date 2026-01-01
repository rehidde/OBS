const express = require('express');
const router = express.Router();
const kullanici = require('../models/student.model');

//burada ki amacım, sayfa sayımız belli olmadığı için
//her sayfa için router eklemek yerine hepsini buradan çekebilmek
//yeni sayfa eklerseniz buraya yeni bir path objesi ekleyerek dahil edin

const pages = [
  { path: '/', view: 'index', title: 'Ana Sayfa' },
  { path: '/dashboardAkademi', view: 'dashboardAkademi', title: 'Akademisyen Paneli' },
  { path: '/sinavOnline', view: 'sinavOnline', title: 'Online sınav sistemi' }
];

pages.forEach(p => {
  router.get(p.path, (req, res) => res.render(p.view, { title: p.title }));
});



router.get('/', (req, res) => {
  if (req.session?.kullanici) {
    return res.redirect('/dashboardOgr');
  }
  res.render('index', { title: 'giriş', error: null });
});



//burası post kısmı yani enter'a bastığımızda sunucuya gönderilen kısım

//id şifrenin boş olması ya da isimdenBulla çağırdığı bilgilerle eşleşmeme kısımlarını kontrol ediyor
//eğer bir sorun yoksa dashboarda yönlendirip o anki kullanıcı bilgilerini de hafızada tutuyor ve en son sayfayı export ediyoruz 

//kullanıcının girdi girebildiği tek yer burası o yüzden giren kişiye bilgi yüklemesi burada yapılıyor
//ve export ettiğimiz için dışarıdan burada belirlenen id üzerinden diğer sorgularımızı gerçekleştirebiliyoruz
router.post('/', async (req, res, next) => {
  try {
    const { id, sifre } = req.body;

    if (!id || !sifre) {
      return res.status(400).render('index', { title: 'giriş', error: 'ID ve Şifre zorunlu maalesef' });

    }

    const user = await kullanici.isimdenBul(id, sifre);
    if (!user) {
      return res.status(401).render('index', { title: 'giriş', error: 'Id veya şifre hatalı' });

    }

    req.session.kullanici = {
      id: user.id,
      ad: user.ad,
      soyad: user.soyad,
      sifre: user.sifre,
      rol: user.rol
    };



    switch (user.rol) {
      case 'ogrenci':
        return res.redirect('/dashboardOgr');

      case 'akademisyen':
        return res.redirect('/dashboardAkd');

      case 'admin':
        return res.redirect('/dashboardAdmin');

    }




  } catch (err) {
    next(err);
  }

});



// Login POST handler
router.post("/giris", async (req, res, next) => {
  // ... existing login logic ...
});

router.get("/cikis", (req, res) => {
  req.session.destroy((err) => {
    if (err) console.error("Session destroy error:", err);
    res.redirect("/");
  });
});

module.exports = router;