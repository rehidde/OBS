const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'ana sayfa'});
});


router.get('/dashboardOgr', (req, res) => {
  res.send('Öğrenci Bilgi Sistemi Yönetim Ekranı');
});

module.exports = router;
