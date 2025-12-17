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
  if (req.session?.kullanici){
   return res.redirect('/dashboardOgr');
}
  res.render('index', { title: 'giriş', error: null});
});



//diğer dosyalarda currentUser kullandığım yerler olmuştu o yüzden burada eşitlik yazdım ikisini de kullanabilirsinizz

router.post('/', async (req, res, next) => {
  try{
      const {id, sifre} = req.body;

      if (!id || !sifre){
        return res.status(400).render('index', { title: 'giriş', error: 'ID ve Şifre zorunlu maalesef'});
        
      }

        const user = await kullanici.isimdenBul(id, sifre);
        if (!user){
          return res.status(401).render('index', {title: 'giriş', error:'Id veya şifre hatalı'});

        }

          req.session.kullanici = {
            id: user.id,
            ad: user.ad,
            soyad: user.soyad,
            sifre: user.sifre,
            rol: user.rol
          };






            res.redirect('/dashboardOgr');

              } catch(err) {
                next(err);
              }

            });



  module.exports = router;