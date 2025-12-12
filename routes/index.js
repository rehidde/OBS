
const express = require('express');
const router = express.Router();
const db = require('../config/db');


//burada ki amacım, sayfa sayımız belli olmadığı için
//her sayfa için router eklemek yerine hepsini buradan çekebilmek
//yeni sayfa eklerseniz buraya yeni bir path objesi ekleyerek dahil edin

const pages = [
  { path: '/', view: 'index', title: 'Ana Sayfa' },
  { path: '/dashboardOgr', view: 'dashboardOgr', title: 'Öğrenci Paneli' },
  { path: '/dashboardAkademi', view: 'dashboardAkademi', title: 'Akademisyen Paneli' },
  { path: '/donation', view: 'donation', title: 'Bağış sayfası' },
  { path: '/notes', view: 'notes', title: 'Not Paylaşım Sistemi' },
  { path: '/messaging', view: 'messaging', title: 'Mesajlaşma Sistemi' },
  { path: '/points', view: 'points', title: 'Puan Sistemi' },
  { path: '/rewards', view: 'rewards', title: 'Ödüller' },
  { path: '/sinavOnline', view: 'sinavOnline', title: 'Online sınav sistemi' },
  { path: '/studentDoc', view: 'studentDoc', title: 'Öğrenci Belgesi' },
  { path: '/transcript', view: 'transcript', title: 'Transkript Sistemi' },
];

pages.forEach(p => {
  router.get(p.path, (req, res) => res.render(p.view, { title: p.title }));
});

module.exports = router;

